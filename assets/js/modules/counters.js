(function () {
  function animateCounter(element) {
    const target = parseInt(element.dataset.target || '0', 10);
    const suffix = element.dataset.suffix || '';
    const duration = 1400;
    const startTime = performance.now();

    function update(now) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      element.textContent = Math.round(eased * target) + suffix;

      if (progress < 1) {
        requestAnimationFrame(update);
      } else {
        element.textContent = target + suffix;
      }
    }

    requestAnimationFrame(update);
  }

  function initCounters() {
    const counters = document.querySelectorAll('.count-up');
    if (!counters.length) {
      return;
    }

    if (!('IntersectionObserver' in window)) {
      counters.forEach(animateCounter);
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    counters.forEach((counter) => observer.observe(counter));
  }

  window.NumLabModules = window.NumLabModules || {};
  window.NumLabModules.initCounters = initCounters;
})();
