(function () {
  function formatDateShort(iso) {
    const parts = iso.split('-');
    return parts[2] + '/' + parts[1];
  }

  function formatCurrency(n) {
    return '$' + n.toLocaleString('es-AR');
  }

  function initIntensivo() {
    const cfg = window.INTENSIVO;
    if (!cfg) {
      return;
    }

    const fields = {
      nombre: cfg.nombre,
      modalidad: cfg.modalidad,
      horasTotales: cfg.horasTotales,
      semanas: cfg.semanas,
      cupoMax: cfg.cupoMax,
      cupoMin: cfg.cupoMin,
      fechaInicio: formatDateShort(cfg.fechaInicio),
      fechaFin: formatDateShort(cfg.fechaFin),
      cierreInscripcion: formatDateShort(cfg.cierreInscripcion),
      precio: formatCurrency(cfg.precio),
      precioPorHora: formatCurrency(cfg.precioPorHora) + '/h',
      sesionesPorSemana: cfg.sesiones.porSemana,
      horasPorSesion: cfg.sesiones.horasCada,
      diasSesion: cfg.sesiones.dias,
    };

    Object.keys(fields).forEach((key) => {
      document.querySelectorAll('[data-int-field="' + key + '"]').forEach((el) => {
        el.textContent = fields[key];
      });
    });

    const msgIntensivo = `Hola! Quiero sumarme al ${cfg.nombre}.

Nombre: ____
Materia: ____
Cátedra: ____`;

    const waHref = window.waLink(msgIntensivo);
    document.querySelectorAll('[data-int-wa]').forEach((el) => {
      el.href = waHref;
    });
  }

  window.NumLabModules = window.NumLabModules || {};
  window.NumLabModules.initIntensivo = initIntensivo;
})();
