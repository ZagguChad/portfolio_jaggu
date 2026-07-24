'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function HeroScene() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // 1. Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      50,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // 2. Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.5);
    scene.add(ambientLight);

    const dirLight = new THREE.DirectionalLight(0xffffff, 1);
    dirLight.position.set(5, 5, 5);
    scene.add(dirLight);

    // 3. 3D Wireframe Octahedron Mesh
    const geometry = new THREE.OctahedronGeometry(1.6, 0);
    const material = new THREE.MeshStandardMaterial({
      color: 0xffd000,
      wireframe: true,
      wireframeLinewidth: 2,
      roughness: 0.2,
    });
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    // 4. Animation loop
    let animationFrameId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      const delta = clock.getDelta();
      mesh.rotation.x += delta * 0.4;
      mesh.rotation.y += delta * 0.5;

      // Subtle floating oscillation
      mesh.position.y = Math.sin(clock.getElapsedTime() * 1.5) * 0.2;

      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    // 5. Handle Resize
    const handleResize = () => {
      if (!container) return;
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      if (container && renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      geometry.dispose();
      material.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 pointer-events-none opacity-30 z-0 overflow-hidden"
    />
  );
}
