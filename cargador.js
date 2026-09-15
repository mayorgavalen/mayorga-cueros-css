/* Cargador de Mayorga Cueros.
   Esto se define UNA VEZ en el portal y no se toca nunca mas.
   Todo el diseno vive en mayorga.css, que se edita y publica desde la compu. */
(function () {
  var href = 'https://mayorgavalen.github.io/mayorga-cueros-css/mayorga.css';
  if (document.querySelector('link[data-mayorga]')) return;
  var l = document.createElement('link');
  l.rel = 'stylesheet';
  l.href = href;
  l.setAttribute('data-mayorga', '1');
  (document.head || document.documentElement).appendChild(l);
})();
