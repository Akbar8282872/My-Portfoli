/**
 * Motion, GSAP ScrollTrigger, Interactive Canvas & Project Filter Engine
 */

export function initMotion() {
  // 1. Canvas Interactive Ambient Spotlight (Desktop Only)
  const canvas = document.getElementById('ambient-canvas');
  if (canvas) {
    const isMobileOrTouch = window.innerWidth < 860 || window.matchMedia('(hover: none)').matches;
    if (isMobileOrTouch) {
      canvas.style.display = 'none';
    } else {
      const ctx = canvas.getContext('2d');
      let width = (canvas.width = window.innerWidth);
      let height = (canvas.height = window.innerHeight);

      let mouseX = width / 2;
      let mouseY = height / 3;
      let targetX = mouseX;
      let targetY = mouseY;

      window.addEventListener('resize', () => {
        if (window.innerWidth < 860) {
          canvas.style.display = 'none';
        } else {
          canvas.style.display = 'block';
          width = canvas.width = window.innerWidth;
          height = canvas.height = window.innerHeight;
        }
      });

      window.addEventListener('mousemove', (e) => {
        targetX = e.clientX;
        targetY = e.clientY;
      });

      function renderCanvas() {
        mouseX += (targetX - mouseX) * 0.05;
        mouseY += (targetY - mouseY) * 0.05;

        ctx.clearRect(0, 0, width, height);

        const gradient = ctx.createRadialGradient(
          mouseX,
          mouseY,
          50,
          mouseX,
          mouseY,
          550
        );
        gradient.addColorStop(0, 'rgba(255, 85, 0, 0.09)');
        gradient.addColorStop(0.5, 'rgba(255, 85, 0, 0.02)');
        gradient.addColorStop(1, 'transparent');

        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, width, height);

        requestAnimationFrame(renderCanvas);
      }
      renderCanvas();
    }
  }

  // 2. Smooth Anchor Navigation
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId && targetId !== '#') {
        const targetEl = document.querySelector(targetId);
        if (targetEl) {
          e.preventDefault();
          targetEl.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  });

  // 3. Dynamic Pakistan Local Clock (Topbar & Footer)
  const clockEl = document.getElementById('live-pak-time');
  const footerClockEl = document.getElementById('footer-live-pak-time');
  const updateTime = () => {
    const options = {
      timeZone: 'Asia/Karachi',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true,
    };
    const timeStr = new Intl.DateTimeFormat('en-US', options).format(new Date());
    if (clockEl) {
      clockEl.textContent = `// ${timeStr} PKT`;
    }
    if (footerClockEl) {
      footerClockEl.textContent = `${timeStr} PKT`;
    }
  };
  updateTime();
  setInterval(updateTime, 1000);

  // 4. Interactive Architecture Console Tab Switcher
  const consoleTabBtns = document.querySelectorAll('.console-tab-btn');
  const consolePanels = document.querySelectorAll('.console-panel-view');

  consoleTabBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      const targetPanelId = btn.getAttribute('data-target-panel');
      consoleTabBtns.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');

      consolePanels.forEach((panel) => {
        if (panel.id === targetPanelId) {
          panel.classList.add('active');
          if (window.gsap) {
            gsap.fromTo(panel, { opacity: 0, y: 15 }, { opacity: 1, y: 0, duration: 0.35, ease: 'power2.out' });
          }
        } else {
          panel.classList.remove('active');
        }
      });
    });
  });

  // 5. Project Category Filtering Engine
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      filterBtns.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      projectCards.forEach((card) => {
        const category = card.getAttribute('data-category');
        if (filterValue === 'all' || category === filterValue || category?.includes(filterValue)) {
          card.style.display = '';
          if (window.gsap) {
            gsap.fromTo(card, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.45, ease: 'power2.out' });
          }
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // 6. GSAP ScrollTrigger Animations
  if (window.gsap) {
    if (window.ScrollTrigger) {
      window.gsap.registerPlugin(window.ScrollTrigger);
    }

    // Hero title entrance
    gsap.from('.hero-giant-title span', {
      y: 90,
      opacity: 0,
      duration: 1.1,
      stagger: 0.2,
      ease: 'power4.out',
    });

    // Centerpiece Portrait ease-in
    gsap.from('.hero-center-portrait img', {
      scale: 0.94,
      opacity: 0,
      duration: 1.4,
      ease: 'power3.out',
      delay: 0.15,
    });

    if (window.ScrollTrigger) {
      // About console reveal
      gsap.from('.about-console', {
        scrollTrigger: {
          trigger: '.about-studio-section',
          start: 'top 75%',
        },
        y: 40,
        opacity: 0,
        duration: 0.9,
        ease: 'power3.out',
      });

      gsap.from('.studio-meta-ledger .ledger-item', {
        scrollTrigger: {
          trigger: '.studio-meta-ledger',
          start: 'top 85%',
        },
        y: 25,
        opacity: 0,
        duration: 0.7,
        stagger: 0.08,
        ease: 'power3.out',
      });

      // Flagship Project Top Showcase Reveal
      if (document.querySelector('.project-card-flagship')) {
        gsap.from('.project-card-flagship', {
          scrollTrigger: {
            trigger: '.project-card-flagship',
            start: 'top 85%',
          },
          y: 40,
          opacity: 0,
          duration: 0.9,
          ease: 'power3.out',
        });
      }

      // Grid Cards Staggered Reveal
      const standardCards = document.querySelectorAll('.project-card:not(.project-card-flagship)');
      if (standardCards.length) {
        gsap.from(standardCards, {
          scrollTrigger: {
            trigger: standardCards[0],
            start: 'top 85%',
          },
          y: 30,
          opacity: 0,
          duration: 0.7,
          stagger: 0.08,
          ease: 'power3.out',
        });
      }

      // Services Split Cards Smooth Reveal
      const serviceCards = document.querySelectorAll('.service-split-card');
      serviceCards.forEach((card) => {
        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: 'top 88%',
            toggleActions: 'play none none none',
          },
          y: 30,
          opacity: 0,
          duration: 0.7,
          ease: 'power3.out',
        });
      });

      // Experience card reveal
      gsap.from('.experience-card-elevated', {
        scrollTrigger: {
          trigger: '.experience-section',
          start: 'top 75%',
        },
        y: 40,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
      });

      // Contact Form Split Grid Reveal
      gsap.from(['.contact-info-col', '.contact-form-col'], {
        scrollTrigger: {
          trigger: '.contact-studio-section',
          start: 'top 75%',
        },
        y: 35,
        opacity: 0,
        duration: 0.9,
        stagger: 0.15,
        ease: 'power3.out',
      });
    }
  }

  // 7. Interactive Top Scroll Progress Bar
  const progressBar = document.getElementById('scroll-progress-bar');
  if (progressBar) {
    const updateProgress = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollHeight > 0) {
        const scrolledPercent = (window.scrollY / scrollHeight) * 100;
        progressBar.style.width = `${Math.min(100, Math.max(0, scrolledPercent))}%`;
      }
    };
    window.addEventListener('scroll', updateProgress, { passive: true });
    updateProgress();
  }

  // 8. Interactive 3D Card Hover Perspective Physics (Desktop & Tablets)
  if (window.matchMedia('(hover: hover) and (min-width: 860px)').matches) {
    const interactiveCards = document.querySelectorAll('.project-card, .service-split-card, .experience-card-elevated');
    interactiveCards.forEach((card) => {
      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        const tiltX = (y / (rect.height / 2)) * -3.2;
        const tiltY = (x / (rect.width / 2)) * 3.2;
        card.style.transform = `perspective(1000px) rotateX(${tiltX.toFixed(2)}deg) rotateY(${tiltY.toFixed(2)}deg) translateY(-5px)`;
      });

      card.addEventListener('mouseleave', () => {
        card.style.transform = '';
      });
    });
  }

  // 9. Metric Numbers Live Viewport Trigger
  const metricNumbers = document.querySelectorAll('.metric-number');
  if (metricNumbers.length && 'IntersectionObserver' in window) {
    const metricObserver = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('counted-in');
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );
    metricNumbers.forEach((el) => metricObserver.observe(el));
  }
}

