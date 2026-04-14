window.CFG = {
  wa: "5492216906099",
  email: "hola@numlab.com.ar",
  tel: "+54 221 690-6099",
  ciudad: "La Plata, Buenos Aires",
  precio_hora: 20000,
};

window.waLink = function waLink(msg) {
  return "https://wa.me/" + window.CFG.wa + "?text=" + encodeURIComponent(msg);
};
