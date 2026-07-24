'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function HeroScene() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // 1. Scene, Camera, Renderer setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      50,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 8;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // 2. Ambient & Directional Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.8);
    scene.add(ambientLight);

    const dirLight = new THREE.DirectionalLight(0xffffff, 1.2);
    dirLight.position.set(5, 8, 5);
    scene.add(dirLight);

    // Palette hex values: Black (#141111), Yellow (#FFD000), Sky Blue (#27CCF3), Green (#A8E66C), Pink (#FF6B8B), Purple (#C0A0FF)
    const colors = [0x141111, 0xffd000, 0x27ccf3, 0xa8e66c, 0xff6b8b, 0xc0a0ff];

    // 3. Create Group of Procedural Low-Poly Builder Objects
    const group = new THREE.Group();

    // Geometries
    const geometries: THREE.BufferGeometry[] = [
      new THREE.OctahedronGeometry(0.8, 0),
      new THREE.TorusGeometry(0.7, 0.15, 8, 16),
      new THREE.IcosahedronGeometry(0.75, 0),
      new THREE.BoxGeometry(0.9, 0.9, 0.9),
      new THREE.CylinderGeometry(0.3, 0.3, 1.2, 8),
      new THREE.RingGeometry(0.5, 0.7, 16),
      new THREE.SphereGeometry(0.5, 8, 8),
    ];

    const meshes: { mesh: THREE.Mesh; rotSpeed: { x: number; y: number; z: number }; basePosY: number; floatSpeed: number; floatOffset: number }[] = [];

    const positions = [
      { x: -3.5, y: 1.5, z: -1 },
      { x: 3.8, y: -1.2, z: -2 },
      { x: -2.2, y: -2.0, z: -0.5 },
      { x: 3.2, y: 2.2, z: -1.5 },
      { x: 0, y: 3.0, z: -3 },
      { x: -4.0, y: -0.5, z: -2.5 },
      { x: 4.2, y: 0.5, z: -1.8 },
    ];

    positions.forEach((pos, idx) => {
      const geo = geometries[idx % geometries.length];
      const color = colors[idx % colors.length];
      
      const isWire = idx % 2 === 0;
      const mat = new THREE.MeshStandardMaterial({
        color: color,
        wireframe: isWire,
        wireframeLinewidth: isWire ? 2 : 1,
        roughness: 0.3,
        metalness: 0.1,
      });

      const mesh = new THREE.Mesh(geo, mat);
      mesh.position.set(pos.x, pos.y, pos.z);

      mesh.rotation.x = Math.random() * Math.PI;
      mesh.rotation.y = Math.random() * Math.PI;

      group.add(mesh);

      meshes.push({
        mesh,
        rotSpeed: {
          x: (Math.random() - 0.5) * 0.4,
          y: (Math.random() - 0.5) * 0.5,
          z: (Math.random() - 0.5) * 0.3,
        },
        basePosY: pos.y,
        floatSpeed: 1 + Math.random() * 0.8,
        floatOffset: Math.random() * Math.PI * 2,
      });
    });

    // Floating particles (points)
    const particleGeo = new THREE.BufferGeometry();
    const particleCount = 40;
    const posArray = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount * 3; i += 3) {
      posArray[i] = (Math.random() - 0.5) * 16;
      posArray[i + 1] = (Math.random() - 0.5) * 10;
      posArray[i + 2] = (Math.random() - 0.5) * 6;
    }
    particleGeo.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    const particleMat = new THREE.PointsMaterial({
      size: 0.08,
      color: 0x141111,
      transparent: true,
      opacity: 0.4,
    });
    const particles = new THREE.Points(particleGeo, particleMat);
    group.add(particles);

    scene.add(group);

    // 4. Mouse tracking for subtle parallax
    let mouseX = 0;
    let mouseY = 0;
    const handleMouseMove = (e: MouseEvent) => {
      const halfW = window.innerWidth / 2;
      const halfH = window.innerHeight / 2;
      mouseX = (e.clientX - halfW) / halfW;
      mouseY = (e.clientY - halfH) / halfH;
    };
    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // 5. Animation loop
    let animationFrameId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      const delta = clock.getDelta();
      const elapsedTime = clock.getElapsedTime();

      // Rotate group slightly based on mouse position
      group.rotation.y += (mouseX * 0.2 - group.rotation.y) * 0.05;
      group.rotation.x += (-mouseY * 0.2 - group.rotation.x) * 0.05;

      // Animate individual meshes
      meshes.forEach(({ mesh, rotSpeed, basePosY, floatSpeed, floatOffset }) => {
        mesh.rotation.x += rotSpeed.x * delta;
        mesh.rotation.y += rotSpeed.y * delta;
        mesh.rotation.z += rotSpeed.z * delta;

        mesh.position.y = basePosY + Math.sin(elapsedTime * floatSpeed + floatOffset) * 0.25;
      });

      // Slowly rotate particles
      particles.rotation.y = elapsedTime * 0.05;

      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    // 6. Handle Resize
    const handleResize = () => {
      if (!container) return;
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
      if (container && renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      geometries.forEach((g) => g.dispose());
      particleGeo.dispose();
      particleMat.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 pointer-events-none opacity-40 z-0 overflow-hidden"
    />
  );
}
