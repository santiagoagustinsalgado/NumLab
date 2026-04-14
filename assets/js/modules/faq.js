(function () {
  function initFaqOpenLimit() {
    const faqDetails = document.querySelectorAll('details.faq-item');
    const maxOpen = 3;

    faqDetails.forEach((detail) => {
      detail.addEventListener('toggle', () => {
        if (!detail.open) {
          return;
        }

        const openItems = Array.from(faqDetails).filter((node) => node.open);
        if (openItems.length > maxOpen) {
          const oldest = openItems.find((node) => node !== detail);
          if (oldest) {
            oldest.removeAttribute('open');
          }
        }
      });
    });
  }

  function initFaqAccordionToggle() {
    const toggle = document.getElementById('faq-toggle');
    const body = document.getElementById('faq-body');

    if (!toggle || !body) {
      return;
    }

    toggle.addEventListener('click', () => {
      const expanded = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!expanded));
      body.classList.toggle('open', !expanded);
    });
  }

  window.NumLabModules = window.NumLabModules || {};
  window.NumLabModules.initFaq = function initFaq() {
    initFaqOpenLimit();
    initFaqAccordionToggle();
  };
})();
