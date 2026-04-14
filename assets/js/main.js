(function () {
  function run(name) {
    if (window.NumLabModules && typeof window.NumLabModules[name] === 'function') {
      window.NumLabModules[name]();
    }
  }

  document.addEventListener('DOMContentLoaded', function onReady() {
    run('initCore');
    run('initHero');
    run('initFaq');
    run('initPacks');
    run('initCounters');
  });
})();
