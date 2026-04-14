(function () {
  function initScrollReveal() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        entry.target.classList.toggle('visible', entry.isIntersecting);
      });
    }, { threshold: 0.12 });

    document
      .querySelectorAll('.reveal, .reveal-left, .reveal-spring, .reveal-scale, .reveal-fade, .reveal-cta')
      .forEach((node) => observer.observe(node));
  }

  function initCtaAnimation() {
    if (typeof window.gsap === 'undefined' || typeof window.ScrollTrigger === 'undefined') {
      return;
    }

    const cta = document.getElementById('contacto');
    if (!cta) {
      return;
    }

    window.gsap.set(cta, { transformOrigin: 'center bottom' });
    window.gsap.fromTo(
      cta,
      { y: 140, opacity: 0, scale: 0.88 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        ease: 'none',
        scrollTrigger: {
          trigger: cta,
          start: 'top 100%',
          end: 'top 20%',
          scrub: 1.4,
        },
      }
    );
  }

  function initLimitsAnimation() {
    if (typeof window.gsap === 'undefined' || typeof window.ScrollTrigger === 'undefined') {
      return;
    }

    window.gsap.registerPlugin(window.ScrollTrigger);
    const section = document.getElementById('limites-section');
    if (!section) {
      return;
    }

    window.gsap.fromTo(
      section,
      { x: '100vw' },
      {
        x: 0,
        ease: 'none',
        scrollTrigger: {
          trigger: section,
          start: 'top 95%',
          end: 'top 20%',
          scrub: 1.2,
        },
      }
    );
  }

  function initResultsTerminalInteraction() {
    const rows = document.querySelectorAll('.rt-row');
    rows.forEach((row) => {
      row.addEventListener('click', function onRowClick() {
        const isActive = this.classList.contains('active');
        rows.forEach((node) => node.classList.remove('active'));
        if (!isActive) {
          this.classList.add('active');
        }
      });

      row.addEventListener('keydown', function onRowKey(event) {
        if (event.key === 'Enter' || event.key === ' ') {
          this.click();
        }
      });
    });
  }

  function initMethodTimeline() {
    const line = document.getElementById('mt-line');
    const nodes = document.querySelectorAll('.mt-node');
    const timeline = document.querySelector('.method-timeline');

    if (!line || !nodes.length || !timeline) {
      return;
    }

    let fired = false;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !fired) {
          fired = true;
          requestAnimationFrame(() => line.classList.add('animated'));
          nodes.forEach((node, index) => {
            setTimeout(() => node.classList.add('lit'), 300 + index * 480);
          });
        }
      });
    }, { threshold: 0.25 });

    observer.observe(timeline);
  }

  window.NumLabModules = window.NumLabModules || {};
  window.NumLabModules.initCore = function initCore() {
    initScrollReveal();
    initCtaAnimation();
    initLimitsAnimation();
    initResultsTerminalInteraction();
    initMethodTimeline();
  };
})();
