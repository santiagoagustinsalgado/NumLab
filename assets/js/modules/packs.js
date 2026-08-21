(function () {
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
    initButtonRipple();
  };
})();
