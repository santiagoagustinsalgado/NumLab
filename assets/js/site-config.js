window.CFG = {
  wa: "5492216906099",
  email: "hola@numlab.com.ar",
  tel: "+54 221 690-6099",
  ciudad: "La Plata, Buenos Aires",
  precio_hora: 20000,
};

// PROVISORIO — confirmar antes de difundir: fechas, precio, cupos y dias de sesion
// son valores de trabajo, no definitivos.
window.INTENSIVO = {
  nombre: "Intensivo pre-parcial",
  modalidad: "Presencial · La Plata",
  horasTotales: 12,
  semanas: 3,
  fechaInicio: "2026-09-07",
  fechaFin: "2026-09-25",
  cierreInscripcion: "2026-09-06",
  cupoMax: 5,
  cupoMin: 3,
  precio: 144000,
  precioPorHora: 12000,
  sesiones: {
    porSemana: 2,
    horasCada: 2,
    dias: "días a confirmar con la cohorte",
  },
};

window.waLink = function waLink(msg) {
  return "https://wa.me/" + window.CFG.wa + "?text=" + encodeURIComponent(msg);
};
