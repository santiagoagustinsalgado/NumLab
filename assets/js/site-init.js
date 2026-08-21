document.addEventListener("DOMContentLoaded", () => {
  const msgReserva = `Hola, te escribo desde la web de NumLab Academy. Quiero consultar si mi caso es viable segun agenda y modalidad de trabajo.

Materia: ____
Tema o unidad: ____
Fecha de parcial/final: ____
Lenguaje/herramienta (MATLAB/Octave/C++): ____
Tenes parciales anteriores o guia de catedra? (si/no): ____
Modalidad preferida: virtual / presencial
Material disponible (PDF/enunciado/codigo): ____
Venis solo/a o con grupo?: ____
Buscas una sesion puntual o continuidad?: ____

Si hay compatibilidad de agenda y formato, podemos avanzar?`;

  const msgEmail = `Hola,

Materia: ____
Tema: ____
Fecha de parcial/final: ____
Lenguaje/herramienta (MATLAB/Octave/C++): ____
Parciales anteriores / guia?: ____
Modalidad (virtual/presencial): ____
Material disponible (PDF/enunciado/codigo): ____`;

  const msgGrupo = `Hola, te escribo desde la web de NumLab Academy. Quiero consultar el formato grupal.

Materia: ____
Cantidad de estudiantes: ____
Fecha de parcial/final: ____
Lenguaje/herramienta (MATLAB/Octave/C++): ____
Modalidad preferida: virtual / presencial

Hay lugar para un grupo?`;

  const msgDiagnostico = `Hola! Quiero coordinar una clase diagnóstico.

Materia: ____
Tema o unidad: ____
Fecha de parcial: ____`;

  const waHref = window.waLink(msgReserva);
  const waGrupoHref = window.waLink(msgGrupo);
  const waDiagnosticoHref = window.waLink(msgDiagnostico);
  const emailHref = "mailto:" + window.CFG.email + "?subject=Consulta%20NumLab%20Academy&body=" + encodeURIComponent(msgEmail);

  const el = (id) => document.getElementById(id);

  if (el("cta-wa-hero")) el("cta-wa-hero").href = waHref;
  if (el("cta-wa-final")) el("cta-wa-final").href = waHref;
  if (el("cta-wa-sticky")) el("cta-wa-sticky").href = waHref;
  if (el("cta-wa-grupo")) el("cta-wa-grupo").href = waGrupoHref;
  if (el("cta-wa-diagnostico")) el("cta-wa-diagnostico").href = waDiagnosticoHref;

  if (el("cta-email")) el("cta-email").href = emailHref;

  if (el("footer-email-link")) {
    el("footer-email-link").href = emailHref;
    el("footer-email-link").textContent = window.CFG.email;
  }

  if (el("footer-tel")) el("footer-tel").textContent = window.CFG.tel;
  if (el("footer-tel-2")) el("footer-tel-2").textContent = window.CFG.tel;
  if (el("footer-ciudad")) el("footer-ciudad").textContent = window.CFG.ciudad;

  const email2 = document.getElementById("footer-email-link-2");
  if (email2) {
    email2.href = emailHref;
    email2.textContent = window.CFG.email;
  }

  const ciudad2 = document.getElementById("footer-ciudad-2");
  if (ciudad2) ciudad2.textContent = window.CFG.ciudad;
});
