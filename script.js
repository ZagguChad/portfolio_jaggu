document.addEventListener('DOMContentLoaded', () => {

  // 0. LOADER CONTROLLER (Inspired by d33pak.space)
  const initLoader = () => {
    const loader = document.getElementById('loader');
    const wordEl = document.getElementById('loader-word');
    const percentEl = document.getElementById('loader-percent');
    const progressFill = document.getElementById('loader-progress-fill');

    if (!loader || !wordEl) return;

    const greetings = [
      "Hello",
      "Bonjour",
      "Hola",
      "Ciao",
      "नमस्ते",
      "こんにちは",
      "안녕하세요",
      "你好",
      "Olá",
      "Привет",
      "Hallo",
      "مرحبًا",
      "ZAGGU"
    ];

    document.body.classList.add('loader-active');

    let currentIndex = 0;
    const totalWords = greetings.length;
    const intervalTime = 160; // ms per word transition
    const totalDuration = totalWords * intervalTime;
    const startTime = Date.now();

    // Greeting word cycling
    const wordInterval = setInterval(() => {
      currentIndex++;
      if (currentIndex < totalWords) {
        wordEl.classList.remove('word-animate');
        void wordEl.offsetWidth; // trigger reflow for smooth re-animation
        wordEl.textContent = greetings[currentIndex];
        wordEl.classList.add('word-animate');
      } else {
        clearInterval(wordInterval);
      }
    }, intervalTime);

    // Percentage counter and progress bar update
    const progressInterval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(Math.floor((elapsed / totalDuration) * 100), 100);

      if (percentEl) percentEl.textContent = `${progress}%`;
      if (progressFill) progressFill.style.width = `${progress}%`;

      if (progress >= 100) {
        clearInterval(progressInterval);
        setTimeout(() => {
          loader.classList.add('loader-exit');
          document.body.classList.remove('loader-active');
          setTimeout(() => {
            loader.style.display = 'none';
          }, 850);
        }, 250);
      }
    }, 25);
  };

  // 1. SMOOTH SCROLL
  const initSmoothScroll = () => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        if (!targetId) return;
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          const offset = 80;
          const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - offset;
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
        }
      });
    });
  };

  // 2. SCROLL-TRIGGERED REVEAL ANIMATIONS
  const initRevealAnimations = () => {
    const revealElements = document.querySelectorAll('.reveal');
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal--visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });

    revealElements.forEach(el => revealObserver.observe(el));
  };

  // 3. RADIO TUNER (Experience Section)
  const initRadioTuner = () => {
    const roles = [
      {
        freq: '94.1',
        org: 'FREELANCE',
        orgUrl: null,
        role: 'Editor & Creative',
        type: 'FREELANCE',
        period: '2023 — NOW',
        location: 'Remote',
        current: true,
        bullets: [
          'Video editing and post-production for short films and branded content',
          'Graphic design for social media, posters, and digital campaigns',
          'Director of Photography on independent short films'
        ]
      },
      {
        freq: '98.7',
        org: 'DATACAMP DONATES',
        orgUrl: 'https://www.datacamp.com/donates',
        role: 'Program Lead',
        type: 'VOLUNTEER',
        period: '2024 — 2025',
        location: 'Amaravati',
        current: false,
        bullets: [
          'Led data literacy workshops reaching 100+ students',
          'Organized coding bootcamps and mentorship sessions',
          'Coordinated with DataCamp for resource allocation'
        ]
      },
      {
        freq: '102.5',
        org: 'DRISHYA MULTIMEDIA',
        orgUrl: null,
        role: 'Club Head',
        type: 'LEADERSHIP',
        period: '2024 — NOW',
        location: 'Amaravati',
        current: true,
        bullets: [
          'Directing the college multimedia club — photography, videography, and design',
          'Organized campus-wide film screenings and creative workshops',
          'Mentored 30+ junior members in video production and editing'
        ]
      },
      {
        freq: '106.3',
        org: 'MICROSOFT LEARN SA',
        orgUrl: 'https://mvp.microsoft.com/studentambassadors',
        role: 'Head Executive — Media',
        type: 'AMBASSADOR',
        period: '2024 — NOW',
        location: 'Amaravati',
        current: true,
        bullets: [
          'Lead media and content strategy for Microsoft Learn Student Ambassadors chapter',
          'Organized technical workshops on Azure, AI, and developer tools',
          'Created visual content and branding for 10+ campus tech events'
        ]
      }
    ];

    let currentStationIndex = roles.length - 1; // Default to last
    const stationDots = document.querySelectorAll('.station-dot');
    const tunerNeedle = document.querySelector('.tuner-needle');
    const btnPrev = document.querySelector('.tuner-btn--prev');
    const btnNext = document.querySelector('.tuner-btn--next');
    const radioContent = document.querySelector('.radio-content');
    const radioStatic = document.querySelector('.radio-static');
    const radioDial = document.querySelector('.radio-dial');
    
    const updateTuner = (index) => {
      if (index < 0) index = 0;
      if (index >= roles.length) index = roles.length - 1;
      currentStationIndex = index;

      const role = roles[index];
      
      // Update dots
      if (stationDots.length) {
        stationDots.forEach((dot, idx) => {
          if (idx === index) {
            dot.classList.add('active');
          } else {
            dot.classList.remove('active');
          }
        });
      }

      // Update needle
      const percentage = (index / (roles.length - 1)) * 100;
      if (tunerNeedle) {
        if (window.innerWidth >= 1024) {
          // Desktop: vertical slider
          tunerNeedle.style.setProperty('--needle-pos', `${percentage}%`);
          tunerNeedle.style.top = `${percentage}%`;
          tunerNeedle.style.left = '';
        } else {
          // Mobile: horizontal slider
          tunerNeedle.style.left = `${percentage}%`;
          tunerNeedle.style.top = '';
        }
      }

      // Rotate dial
      if (radioDial) {
        const rotation = (index / (roles.length - 1)) * 270 - 135;
        radioDial.style.transform = `rotate(${rotation}deg)`;
      }

      // Static animation
      if (radioStatic) {
        radioStatic.classList.add('static-active');
        setTimeout(() => {
          radioStatic.classList.remove('static-active');
        }, 300);
      }

      // Update content
      if (radioContent) {
        const orgHtml = role.orgUrl 
          ? `<a href="${role.orgUrl}" target="_blank" rel="noreferrer">${role.org}<span class="arrow">↗</span></a>` 
          : role.org;
        const currentTag = role.current 
          ? `<span class="radio-tag radio-tag--current">CURRENT</span>` 
          : '';
        const bulletsHtml = role.bullets.map(b => `<li>› ${b}</li>`).join('');

        radioContent.innerHTML = `
          <div class="radio-header">
            <span>${role.freq} FM</span>
            <span class="radio-header__sep">·</span>
            <span>SIGNAL LOCKED</span>
            <span class="radio-header__period">${role.period}</span>
          </div>
          <div class="radio-tags">
            <span class="radio-tag radio-tag--yellow">${role.type}</span>
            ${currentTag}
            <span class="radio-tag--location">⌖ ${role.location}</span>
          </div>
          <h3 class="radio-role-title">
            ${orgHtml}
          </h3>
          <p class="radio-role-sub">${role.role}</p>
          <ul class="radio-bullets">
            ${bulletsHtml}
          </ul>
        `;
      }
    };

    if (btnPrev) {
      btnPrev.addEventListener('click', () => {
        updateTuner(currentStationIndex - 1);
      });
    }

    if (btnNext) {
      btnNext.addEventListener('click', () => {
        updateTuner(currentStationIndex + 1);
      });
    }

    if (stationDots.length) {
      stationDots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
          updateTuner(index);
        });
      });
    }

    // Handle resize to fix needle position based on screen orientation
    window.addEventListener('resize', () => {
      updateTuner(currentStationIndex);
    });

    // Initialize content
    if (radioContent) {
        updateTuner(currentStationIndex);
    }
  };

  // 4. CONNECT CHECKLIST
  const initChecklist = () => {
    const checklistItems = document.querySelectorAll('.checklist-item');
    const counterNum = document.querySelector('.counter-num');
    const connectReveal = document.querySelector('.connect-reveal');
    let checkedCount = 0;

    if (!checklistItems.length) return;

    checklistItems.forEach(item => {
      item.addEventListener('click', () => {
        const box = item.querySelector('.checklist-box');
        const text = item.querySelector('.checklist-text');
        
        if (!box || !text) return;

        const isChecked = box.classList.contains('checklist-box--checked');
        
        if (isChecked) {
          box.classList.remove('checklist-box--checked');
          text.classList.remove('checklist-text--checked');
          item.setAttribute('aria-checked', 'false');
          checkedCount--;
        } else {
          box.classList.add('checklist-box--checked');
          text.classList.add('checklist-text--checked');
          item.setAttribute('aria-checked', 'true');
          checkedCount++;
        }

        const checkedEl = document.querySelector('.counter-checked');
        if (checkedEl) {
          checkedEl.textContent = checkedCount;
        }

        if (checkedCount === 4 && connectReveal) {
          connectReveal.style.display = 'flex';
          connectReveal.classList.add('reveal--visible');
        } else if (connectReveal) {
          connectReveal.classList.remove('reveal--visible');
          connectReveal.style.display = 'none';
        }
      });
    });
  };

  // 5. PROJECT CARD HOVER EFFECTS
  const initProjectHover = () => {
    const workCards = document.querySelectorAll('.work-card');
    workCards.forEach(card => {
      const previewLines = card.querySelectorAll('.preview-line');
      
      card.addEventListener('mouseenter', () => {
        previewLines.forEach((line, i) => {
          const delay = parseInt(line.getAttribute('data-delay') || '0', 10);
          setTimeout(() => {
            line.classList.add('preview-line--visible');
          }, delay);
        });
      });
      
      card.addEventListener('mouseleave', () => {
        previewLines.forEach(line => {
          line.classList.remove('preview-line--visible');
        });
      });
    });
  };

  // 6. MARQUEE PAUSE ON HOVER
  const initMarquee = () => {
    const marqueeTracks = document.querySelectorAll('.marquee-track');
    marqueeTracks.forEach(track => {
      track.addEventListener('mouseenter', () => {
        track.classList.add('marquee--paused');
      });
      track.addEventListener('mouseleave', () => {
        track.classList.remove('marquee--paused');
      });
    });
  };

  // 7. NAV ACTIVE STATE
  const initNavActiveState = () => {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');
    
    if (!sections.length || !navLinks.length) return;

    const navObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');
          navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${id}`) {
              link.classList.add('active');
            }
          });
        }
      });
    }, {
      rootMargin: '-30% 0px -40% 0px'
    });

    sections.forEach(section => navObserver.observe(section));
  };

  // 8. THEME TOGGLE (Light / Dark Mode)
  const initThemeToggle = () => {
    const toggleBtn = document.getElementById('theme-toggle');
    if (!toggleBtn) return;

    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initialTheme = savedTheme || (systemPrefersDark ? 'dark' : 'light');

    if (initialTheme === 'dark') {
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.removeAttribute('data-theme');
    }

    toggleBtn.addEventListener('click', () => {
      const currentTheme = document.documentElement.getAttribute('data-theme');
      if (currentTheme === 'dark') {
        document.documentElement.removeAttribute('data-theme');
        localStorage.setItem('theme', 'light');
      } else {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
      }
    });
  };

  // 9. COMMAND PALETTE (⌘K)
  const initCmdPalette = () => {
    const palette = document.getElementById('cmd-palette');
    const input = document.getElementById('cmd-input');
    const backdrop = document.getElementById('cmd-backdrop');
    const btn = document.getElementById('cmd-k-btn');
    const items = document.querySelectorAll('.cmd-item');

    if (!palette || !input) return;

    const openPalette = () => {
      palette.classList.add('open');
      palette.setAttribute('aria-hidden', 'false');
      input.value = '';
      filterItems('');
      setTimeout(() => input.focus(), 50);
    };

    const closePalette = () => {
      palette.classList.remove('open');
      palette.setAttribute('aria-hidden', 'true');
    };

    const filterItems = (query) => {
      const q = query.toLowerCase().trim();
      items.forEach(item => {
        const text = item.textContent.toLowerCase();
        const cmd = item.getAttribute('data-cmd') || '';
        if (!q || text.includes(q) || cmd.includes(q)) {
          item.style.display = 'flex';
        } else {
          item.style.display = 'none';
        }
      });
    };

    if (btn) btn.addEventListener('click', openPalette);
    if (backdrop) backdrop.addEventListener('click', closePalette);

    input.addEventListener('input', (e) => filterItems(e.target.value));

    items.forEach(item => {
      item.addEventListener('click', () => {
        closePalette();
      });
    });

    document.addEventListener('keydown', (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        if (palette.classList.contains('open')) {
          closePalette();
        } else {
          openPalette();
        }
      } else if (e.key === 'Escape' && palette.classList.contains('open')) {
        closePalette();
      }
    });
  };

  // INITIALIZE ALL
  const initApp = () => {
    initLoader();
    initSmoothScroll();
    initRevealAnimations();
    initRadioTuner();
    initChecklist();
    initProjectHover();
    initMarquee();
    initNavActiveState();
    initThemeToggle();
    initCmdPalette();
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initApp);
  } else {
    initApp();
  }
});
