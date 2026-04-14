(function () {
  function initHeroAnimations() {
    if (typeof window.gsap === 'undefined' || typeof window.ScrollTrigger === 'undefined') {
      return;
    }

    window.gsap.registerPlugin(window.ScrollTrigger);

    const clases = document.getElementById('word-clases');
    const particulares = document.getElementById('word-particulares');
    const lead = document.getElementById('hero-lead');
    const eyebrow = document.querySelector('.eyebrow');

    const tl = window.gsap.timeline({ delay: 0.15 });

    if (eyebrow) {
      window.gsap.set(eyebrow, { y: -20, opacity: 0 });
      tl.to(eyebrow, { y: 0, opacity: 1, duration: 0.7, ease: 'power2.out' }, 0);
    }

    if (clases) {
      window.gsap.set(clases, { x: -80, opacity: 0, filter: 'blur(7px)', scale: 0.92 });
      tl.to(clases, { x: 0, opacity: 1, filter: 'blur(0px)', scale: 1, duration: 1.0, ease: 'expo.out' }, 0.1);
    }

    if (particulares) {
      window.gsap.set(particulares, { x: 100, opacity: 0, filter: 'blur(5px)', scale: 0.9 });
      tl.to(particulares, { x: 0, opacity: 1, filter: 'blur(0px)', scale: 1, duration: 1.1, ease: 'expo.out' }, 0.35);
    }

    if (lead) {
      window.gsap.set(lead, { y: 30, opacity: 0, filter: 'blur(5px)' });
      tl.to(lead, { y: 0, opacity: 1, filter: 'blur(0px)', duration: 0.9, ease: 'power3.out' }, 0.7);
    }

    if (clases && particulares) {
      window.gsap.to(clases, {
        y: -40,
        scrollTrigger: {
          trigger: '#hero-title',
          start: 'top top',
          end: 'bottom top',
          scrub: 1.5,
        },
      });

      window.gsap.to(particulares, {
        y: -70,
        scrollTrigger: {
          trigger: '#hero-title',
          start: 'top top',
          end: 'bottom top',
          scrub: 2.2,
        },
      });
    }

    if (lead) {
      window.gsap.to(lead, {
        y: -25,
        scrollTrigger: {
          trigger: '#hero-title',
          start: 'top top',
          end: 'bottom top',
          scrub: 1,
        },
      });
    }

    const title = document.getElementById('hero-title');
    if (title) {
      window.gsap.set(title, { transformOrigin: 'left top' });
      window.gsap.fromTo(
        title,
        { y: -120, opacity: 0, scale: 0.85 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: '#hero-title',
            start: 'top 100%',
            end: 'top 10%',
            scrub: 1.2,
          },
        }
      );
    }

    if (lead) {
      window.gsap.fromTo(
        lead,
        { y: -70, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: '#hero-title',
            start: 'top 95%',
            end: 'top 5%',
            scrub: 1.8,
          },
        }
      );
    }
  }

  function initHeroInteractions() {
    document.querySelector('.hero-caret')?.addEventListener('click', () => {
      document.getElementById('packs')?.scrollIntoView({ behavior: 'smooth' });
    });

    const sepLine = document.querySelector('.hero-sep-line');
    if (sepLine) {
      const obs = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            sepLine.classList.add('visible');
            obs.disconnect();
          }
        });
      }, { threshold: 0.5 });
      obs.observe(sepLine);
    }
  }

  window.NumLabModules = window.NumLabModules || {};
  window.NumLabModules.initHero = function initHero() {
    initHeroAnimations();
    initHeroInteractions();
  };
})();
