(function () {
  function initPackSelector() {
    const hints = {
      'pack-individual': '-> Una hora, sin descuento. Para destrabar una duda puntual.',
      'pack-5h': '-> 5 horas con 5% off. Ideal para preparar un parcial proximo.',
      'pack-10h': '-> 10 horas con 10% off. El mas elegido, continuidad real.',
      'pack-20h': '-> 20 horas con 15% off. Para acompanar la cursada completa.',
    };

    const pills = document.querySelectorAll('.selector-pill');
    const hint = document.getElementById('selector-hint');
    const animated = {
      'pack-10h': document.getElementById('pack-10h'),
      'pack-20h': document.getElementById('pack-20h'),
    };

    let current = null;

    function resetAll() {
      pills.forEach((pill) => pill.classList.remove('active'));
      document.querySelectorAll('.pack-highlighted').forEach((card) => card.classList.remove('pack-highlighted'));
      Object.values(animated).forEach((node) => {
        if (node) {
          node.style.animationPlayState = 'running';
        }
      });
    }

    pills.forEach((pill) => {
      pill.addEventListener('click', function onPackClick() {
        const target = this.dataset.target;
        const card = document.getElementById(target);

        if (current === target) {
          resetAll();
          current = null;
          if (hint) {
            hint.textContent = '';
          }
          return;
        }

        resetAll();
        this.classList.add('active');

        if (card) {
          card.classList.add('pack-highlighted');
          card.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }

        Object.entries(animated).forEach(([id, node]) => {
          if (node) {
            node.style.animationPlayState = id === target ? 'running' : 'paused';
          }
        });

        if (hint) {
          hint.textContent = hints[target] || '';
        }

        current = target;
      });
    });

    const defaultTarget = 'pack-10h';
    const defaultPill = document.querySelector('.selector-pill[data-target="' + defaultTarget + '"]');
    const defaultCard = document.getElementById(defaultTarget);

    if (defaultPill && defaultCard) {
      defaultPill.classList.add('active');
      defaultCard.classList.add('pack-highlighted');
      defaultCard.style.animationPlayState = 'running';

      Object.entries(animated).forEach(([id, node]) => {
        if (node) {
          node.style.animationPlayState = id === defaultTarget ? 'running' : 'paused';
        }
      });

      if (hint) {
        hint.textContent = hints[defaultTarget];
      }
      current = defaultTarget;
    }
  }

  function initButtonRipple() {
    document.querySelectorAll('.btn-wa').forEach((btn) => {
      btn.addEventListener('mousemove', (event) => {
        const rect = btn.getBoundingClientRect();
        btn.style.setProperty('--rx', ((event.clientX - rect.left) / rect.width) * 100 + '%');
        btn.style.setProperty('--ry', ((event.clientY - rect.top) / rect.height) * 100 + '%');
      });
    });
  }

  window.NumLabModules = window.NumLabModules || {};
  window.NumLabModules.initPacks = function initPacks() {
    initPackSelector();
    initButtonRipple();
  };
})();
