/* Mayorga Cueros — tienda "Moderna" (borrador 7693919, 26/11/2026).
   Vive solo en el código de seguimiento del borrador: la tienda publicada no lo carga.
   Aditivo e idempotente: reestiliza el tema y, en el inicio, arma las secciones nuevas
   con los productos y precios que Tiendanube ya puso en la página. */
(function () {
  if (window.__mgModerna) return; window.__mgModerna = 1;

  var WA = 'https://wa.me/5491126802434?text=';
  var CDN = 'https://dcdn-us.mitiendanube.com/stores/005/088/050/products/';
  var FOTO = {
    billeteraBolsillo: CDN + 'billetera-completa-marron-03-9b82b0f159ed0e3f8817889254554809-1024-1024.webp',
    billeteraInicial: CDN + 'billetera-simple-suela-06-57204aea19fe734dd217889254784098-1024-1024.webp',
    local: 'https://mayorgavalen.github.io/mayorga-cueros-css/qs-local-historico.jpg'
  };
  // Productos de la portada, en orden: Matera Botinero, Billetera Completa, Cinto Búfalo, Maletín.
  var PORTADA = [
    { id: '366256483', linea: 'Termo, mate y yerba, listos para salir.', foto: /cuerpo/ },
    { id: '366256512', linea: 'Billetes, tarjetas y monedas en una sola pieza de cuero vacuno.', img: FOTO.billeteraBolsillo, perso: true },
    { id: '366256732', linea: 'Lonja de búfalo con chapón de metal.' },
    { id: '366256750', linea: 'Para llevar el trabajo todos los días.' }
  ];
  var CATS = [
    ['Todo', '/productos/'], ['Materas', '/materas-y-yerberos/'], ['Bolsos y viaje', '/bolsos-y-maletines/'],
    ['Cintos', '/cintos/'], ['Billeteras', '/billeteras/'], ['Mayoristas', '/catalogo-mayorista/']
  ];
  var COLOR = { 'negro': '#1E1915', 'marrón': '#5A3A26', 'marron': '#5A3A26', 'suela': '#A8703F', 'camel': '#B98451', 'pelo atigrado': '#8C6B4C', 'marrón rojizo': '#6E2F1F', 'marrón nubuck': '#6B4A35' };
  var HOME = location.pathname === '/' || /template-home/.test(document.body && document.body.className);

  var T = { piedra: '#ECE9E4', tile: '#E2DDD5', cuero: '#2B211B', suela: '#954E1C', gris: '#6B635B', linea: '#D6D0C7' };
  var F = "'Bricolage Grotesque',system-ui,-apple-system,sans-serif";
  var LOGO = "'Cormorant Garamond',Georgia,serif";

  var H = 'html body header.js-head-main.head-main.head-primary ';
  var css = ''
    /* base */
    + 'html,body{background:' + T.piedra + '!important}'
    + 'body,body p,body li,body label,body input,body select,body textarea,body button,.btn{font-family:' + F + '!important}'
    + 'body{color:' + T.cuero + '!important}'
    + 'body h1,body h2,body h3,body h4,body h5,body h6,.h1,.h2,.h3,.h4,.h5,.h6{font-family:' + F + '!important;color:' + T.cuero + '!important;text-transform:none!important;letter-spacing:-.02em!important}'
    + 'body a{color:' + T.cuero + '}'
    + 'section,.section-home,.container,.container-fluid,main,#main,.page-content{background-color:transparent!important}'
    + ':focus-visible{outline:2px solid ' + T.suela + '!important;outline-offset:2px}'
    + '.mz-oculto{display:none!important}'
    /* encabezado (prefijo largo: el tema fija colores con prioridad alta) */
    + 'html body{margin-top:0!important}'
    + H + '{position:sticky!important;top:0!important;background:rgba(236,233,228,.96)!important;-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px);border:0!important;border-bottom:1px solid ' + T.linea + '!important;box-shadow:none!important}'
    + H + '.container-fluid,' + H + '.row,' + H + '[class*="col"]{background:transparent!important;border:0!important}'
    + H + 'h1,' + H + '.section-topbar,' + H + '[data-store="navigation"],' + H + '.nav-desktop,' + H + '.utility-name,' + H + '.js-utilities-item.nav-dropdown,' + H + '.js-quick-login-badge{display:none!important}'
    + H + 'svg{fill:' + T.cuero + '!important;color:' + T.cuero + '!important;background:transparent!important}'
    + H + '.utilities-container svg{padding:4px!important}'
    + H + '#logo .logo-img{display:none!important}'
    + H + '#logo a.mz-logo{flex-direction:row!important;gap:12px}'
    + H + '#logo .mz-sello{height:48px;width:auto;display:block;filter:brightness(.18)}'
    + '@media(max-width:1100px){' + H + '#logo .mz-sello{display:none!important}}'
    + H + '#logo .mz-texto{display:inline-flex;flex-direction:column;align-items:center;line-height:1}'
    + H + '#logo a::before,' + H + '#logo a::after{content:none!important;display:none!important}'
    + H + 'a.mz-logo{display:inline-flex!important;flex-direction:column;align-items:center;line-height:1;text-decoration:none!important;color:' + T.cuero + '!important}'
    + H + 'a.mz-logo b{font-family:' + LOGO + '!important;font-weight:600;font-size:30px;line-height:1!important;letter-spacing:.14em;margin-right:-.14em;color:' + T.cuero + '!important}'
    + H + 'a.mz-logo small{font-family:' + F + '!important;font-size:9px;font-weight:500;letter-spacing:.5em;margin-top:4px;margin-right:-.5em;color:' + T.gris + '!important}'
    + H + 'input.search-input{background:#fff!important;border:0!important;border-radius:999px!important;height:44px!important;padding-left:20px!important;color:' + T.cuero + '!important;font-size:16px!important;box-shadow:none!important}'
    + H + 'input.search-input::placeholder{color:' + T.gris + '!important}'
    + H + '#ajax-cart>a{display:inline-flex!important;align-items:center;gap:6px;background:' + T.cuero + '!important;border-radius:999px!important;padding:0 16px!important;height:40px}'
    + H + '#ajax-cart>a svg{fill:' + T.piedra + '!important;color:' + T.piedra + '!important}'
    + H + '#ajax-cart .badge-amount{position:static!important;background:transparent!important;color:' + T.piedra + '!important;font-size:14px!important;font-weight:500!important;padding:0!important;border:0!important;box-shadow:none!important}'
    + H + '.mz-chips{display:flex;gap:8px;overflow-x:auto;scrollbar-width:none;padding:2px 16px 12px;max-width:none;margin:0;box-sizing:border-box;border:0!important}'
    + H + '.mz-chips::-webkit-scrollbar{display:none}'
    + H + 'a.mz-chip{flex-shrink:0;height:36px;display:inline-flex!important;align-items:center;padding:0 16px!important;border-radius:999px!important;font-family:' + F + '!important;font-size:14px!important;font-weight:500!important;letter-spacing:0!important;text-transform:none!important;white-space:nowrap;background:#fff!important;color:' + T.cuero + '!important;text-decoration:none!important}'
    + H + 'a.mz-chip.on{background:' + T.cuero + '!important;color:' + T.piedra + '!important}'
    + '@media(min-width:768px){' + H + '.mz-chips{padding:4px 28px 12px}}'
    + '@media(max-width:767px){'
    + H + '.container-fluid{padding:8px 12px 8px!important}'
    + H + '.row{flex-wrap:wrap!important}'
    + H + 'a.mz-logo b{font-size:22px!important}'
    + H + '#logo .mz-sello{display:none!important}'
    + H + 'a.mz-logo small{font-size:8px!important;margin-top:3px!important}'
    + H + '[data-store="account-links"]{display:none!important}'
    + H + '#ajax-cart>a{height:36px!important;padding:0 12px!important}'
    + H + '.utilities-container{white-space:nowrap!important}'
    + H + '.search-container{margin-top:8px!important}'
    + H + 'input.search-input{height:40px!important}'
    + H + '.mz-chips{padding:0 12px 10px}'
    + H + 'a.mz-chip{height:34px!important;padding:0 14px!important}'
    + '.mz-hero-foto{height:auto;min-height:0;width:100%;aspect-ratio:4/5}'
    + '}'
    /* inicio nuevo */
    + '.mz{max-width:1360px;margin:0 auto;padding:24px 32px 0;box-sizing:border-box;color:' + T.cuero + '}'
    + '.mz *{box-sizing:border-box}'
    + '.mz-hero{display:grid;grid-template-columns:auto minmax(0,1fr);gap:56px;padding-bottom:64px}'
    + '.mz-hero-foto{position:relative;background:' + T.tile + ';border-radius:6px;overflow:hidden;height:min(620px,calc(100vh - 220px));min-height:440px;aspect-ratio:4/5}'
    + '.mz-hero-foto img{width:100%;height:100%;object-fit:cover;object-position:50% 40%;display:block;transition:opacity .25s ease}'
    + '.mz-pill{position:absolute;top:16px;left:16px;background:#fff;border-radius:999px;padding:7px 14px;font-size:13px;font-weight:500}'
    + '.mz-info{display:flex;flex-direction:column;justify-content:space-between;gap:20px}'
    + '@media(min-width:861px){.mz-hero{align-items:start}.mz-hero-foto{height:var(--mzh,600px)!important;min-height:0!important}.mz-info{height:var(--mzh,600px)}.mz-info>div:last-child{flex:1;min-height:0;display:flex;flex-direction:column;justify-content:flex-end}.mz-picks{flex:0 1 auto;min-height:0;height:100%;max-height:190px;grid-template-rows:minmax(0,1fr)}.mz-pick{height:100%;min-height:0}.mz-pick img{height:100%;aspect-ratio:auto}.mz.mz-bajo .mz-info h1{font-size:50px!important}.mz.mz-bajo .mz-linea{margin-top:10px}.mz.mz-bajo .mz-precio{margin-top:12px}.mz.mz-bajo .mz-ctas{margin-top:16px}.mz-bento{height:var(--mzb,600px);grid-template-rows:minmax(0,1fr) auto}.mz-b1{min-height:0!important}.mz-b1 img{flex:1 1 0!important;height:auto!important;min-height:0!important}.mz-b2{min-height:0;overflow:hidden}.mz-b3{padding:24px!important;gap:16px!important}.mz-b3 b{font-size:30px!important}.mz-b2 img{flex:1 1 0;min-height:0;aspect-ratio:auto!important;height:auto}}'
    + '.mz-info h1{margin:0!important;font-size:64px!important;line-height:.95!important;font-weight:600!important;letter-spacing:-.045em!important}'
    + '.mz-linea{margin:16px 0 0;font-size:18px;line-height:1.5;color:' + T.gris + '!important;max-width:400px}'
    + '.mz-precio{display:block;margin-top:18px;font-size:28px;font-weight:600;letter-spacing:-.02em}'
    + '.mz-transf{display:block;font-size:16px;font-weight:500;color:' + T.suela + '}'
    + '.mz-sw{display:flex;gap:8px;margin-top:16px}'
    + '.mz-dot{width:18px;height:18px;border-radius:50%;display:inline-block;box-shadow:0 0 0 1px rgba(0,0,0,.18)}'
    + '.mz-dot.ch{width:11px;height:11px}'
    + '.mz-ctas{display:flex;gap:10px;flex-wrap:wrap;margin-top:24px}'
    + '.mz-b{height:54px;display:inline-flex;align-items:center;padding:0 28px;border-radius:999px;font-size:16px;font-weight:500;text-decoration:none!important;background:#fff;color:' + T.cuero + '!important;transition:transform .12s cubic-bezier(.23,1,.32,1)}'
    + '.mz-b.p{background:' + T.cuero + ';color:' + T.piedra + '!important}'
    + '.mz-b:active{transform:scale(.97)}'
    + '.mz-picks-t{font-size:14px;color:' + T.gris + ';display:block;margin-bottom:12px}'
    + '.mz-picks{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:10px}'
    + '.mz-pick{padding:3px;border-radius:6px;cursor:pointer;background:transparent;border:2px solid transparent}'
    + '.mz-pick[aria-pressed="true"]{border-color:' + T.cuero + '}'
    + '.mz-pick img{width:100%;aspect-ratio:4/5;object-fit:cover;display:block;border-radius:4px;background:' + T.tile + '}'
    + '.mz-h2{margin:0 0 24px!important;font-size:44px!important;font-weight:600!important;letter-spacing:-.035em!important;line-height:1!important}'
    + '.mz-grid{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:36px 16px;padding-bottom:96px}'
    + '.mz-card{display:flex;flex-direction:column;gap:6px;text-decoration:none!important;color:' + T.cuero + '!important}'
    + '.mz-card-foto{position:relative;background:' + T.tile + ';border-radius:6px;overflow:hidden;margin-bottom:6px}'
    + '.mz-card-foto img{width:100%;aspect-ratio:4/5;object-fit:cover;display:block}'
    + '.mz-card-foto .mz-pill{top:10px;left:10px;padding:5px 11px;font-size:12px}'
    + '.mz-card-n{display:flex;justify-content:space-between;align-items:baseline;gap:10px;font-size:16px;font-weight:500;letter-spacing:-.01em}'
    + '.mz-card-n span:last-child{display:flex;gap:4px;flex-shrink:0}'
    + '.mz-acciones{position:absolute;left:10px;right:10px;bottom:10px;display:flex;gap:8px;opacity:0;transform:translateY(8px);transition:opacity .2s ease,transform .2s cubic-bezier(.23,1,.32,1)}'
    + '.mz-acciones>span{height:44px;border-radius:999px;display:flex;align-items:center;justify-content:center;font-size:15px;font-weight:500;cursor:pointer;transition:transform .12s cubic-bezier(.23,1,.32,1)}'
    + '.mz-comprar{flex:2;background:' + T.cuero + ';color:' + T.piedra + '}'
    + '.mz-ver{flex:1;background:#fff;color:' + T.cuero + '}'
    + '.mz-card:hover .mz-acciones,.mz-card:focus-within .mz-acciones{opacity:1;transform:none}'
    + '.mz-acciones>span:active{transform:scale(.97)}'
    + '@media(hover:none){.mz-acciones{opacity:1;transform:none;left:8px;right:8px;bottom:8px;gap:6px}.mz-acciones>span{height:38px;font-size:14px}}'
    + '.mz-dot[data-img]{cursor:pointer;position:relative}'
    + '.mz-dot[data-img]::after{content:\"\";position:absolute;inset:-8px}'
    + '.mz-dot.on{box-shadow:0 0 0 2px ' + T.piedra + ',0 0 0 3px ' + T.cuero + '}'
    + '.mz-dot.ch{width:14px!important;height:14px!important}'
    + '.mz-card-n span:last-child{gap:8px!important}'
    + '.mz-card-p{font-size:15px}'
    + '.mz-card-t{font-size:14px;font-weight:500;color:' + T.suela + '}'
    + '.mz-bento{display:grid;grid-template-columns:repeat(12,minmax(0,1fr));gap:16px;padding-bottom:96px}'
    + '.mz-b1{grid-column:span 7;grid-row:span 2;display:flex;flex-direction:column;gap:16px;min-height:560px;border-radius:6px;overflow:hidden;background:#fff;padding:16px;text-decoration:none!important}'
    + '.mz-b1 img{flex:none;height:440px;width:100%;object-fit:cover;object-position:50% 50%;display:block;border-radius:4px;background:' + T.tile + '}'
    + '.mz-b1-card{background:#fff;padding:4px 6px 6px;display:flex;justify-content:space-between;align-items:flex-end;gap:16px;flex-wrap:wrap}'
    + '.mz-b1-card b{display:block;font-size:40px;font-weight:600;letter-spacing:-.035em;line-height:1;max-width:380px;color:' + T.cuero + '}'
    + '.mz-b1-card small{display:block;margin-top:6px;font-size:15px;color:' + T.gris + '}'
    + '.mz-b2{grid-column:span 5;display:flex;flex-direction:column;gap:14px;background:#fff;border-radius:6px;padding:16px;text-decoration:none!important;color:' + T.cuero + '!important}'
    + '.mz-b2 img{width:100%;aspect-ratio:16/9;object-fit:cover;display:block;border-radius:4px;filter:grayscale(1)}'
    + '.mz-b2 b{display:block;font-size:26px;font-weight:600;letter-spacing:-.02em;padding:0 4px}'
    + '.mz-b2 small{display:block;font-size:14px;color:' + T.gris + ';padding:4px 4px 4px}'
    + '.mz-b3{grid-column:span 5;display:flex;flex-direction:column;justify-content:space-between;gap:20px;background:' + T.cuero + ';color:' + T.piedra + ';border-radius:6px;padding:28px}'
    + '.mz-b3 b{display:block;font-size:28px;font-weight:600;letter-spacing:-.03em;line-height:1.05}'
    + '.mz-b3 small{display:block;margin-top:8px;font-size:15px;line-height:1.5;color:#C9C0B5}'
    + '.mz-b3 .mz-b{background:' + T.piedra + ';color:' + T.cuero + '!important;height:48px;padding:0 22px;font-size:15px;gap:8px}'
    + '.mz-b3 a.mz-link{color:' + T.piedra + '!important;font-size:15px;text-underline-offset:4px}'
    + '.mz-row{display:flex;gap:14px;align-items:center;flex-wrap:wrap}'
    + '@media(max-width:860px){'
    + '.mz{padding:16px 16px 0}'
    + '.mz-hero{grid-template-columns:minmax(0,1fr) 72px;grid-template-areas:"foto picks" "info info";gap:14px 10px;padding-bottom:48px}'
    + '.mz-hero-foto{grid-area:foto}.mz-info{display:contents}.mz-info>div:first-child{grid-area:info}.mz-info>div:last-child{grid-area:picks}'
    + '.mz-picks-t{display:none}.mz-picks{grid-template-columns:minmax(0,1fr);gap:8px}.mz-pick{padding:2px}.mz-pick img{aspect-ratio:1/1}'
    + '.mz-linea{font-size:15px!important;margin-top:8px!important}.mz-precio{font-size:22px!important;margin-top:10px!important}.mz-transf{font-size:14px!important}'
    + '.mz-sw{margin-top:10px!important}.mz-ctas{margin-top:14px!important}.mz-ctas .mz-b{height:46px;padding:0 20px;font-size:15px}'
    + '.mz-hero-foto{height:auto;min-height:0;width:100%;aspect-ratio:4/5}'
    + '.mz-info h1{font-size:34px!important}'
    + '.mz-h2{font-size:32px!important}'
    + '.mz-grid{grid-template-columns:repeat(2,minmax(0,1fr));gap:28px 10px;padding-bottom:64px}'
    + '.mz-card-n{font-size:14px;flex-direction:column;gap:4px}'
    + '.mz-bento{grid-template-columns:minmax(0,1fr);padding-bottom:64px}'
    + '.mz-b1,.mz-b2,.mz-b3{grid-column:auto;grid-row:auto}'
    + '.mz-b1{min-height:460px}.mz-b1-card b{font-size:26px}'
    + '}'
    /* pie: títulos que el tema arma con pseudo-elementos */
    + 'html body footer img[src*="logo"]{display:none!important}'
    + 'html body footer h4.h3::before{color:' + T.gris + '!important;font-family:' + F + '!important;letter-spacing:0!important;text-transform:none!important;font-size:14px!important}'
    + 'html body footer h4.h3::after{display:none!important;content:none!important}'
    + 'html body footer h4.h3{font-size:18px!important;letter-spacing:-.01em!important;text-transform:none!important}'
    + '.mz-cat-t{margin:0 0 8px!important;font-size:48px!important;font-weight:600!important;letter-spacing:-.045em!important;line-height:1!important}'
    + '@media(max-width:767px){.mz-cat-t{font-size:38px!important}}'
    /* listado: orden, etiquetas */
    + 'html body .js-category-controls .row{margin-bottom:12px!important}'
    + 'html body .js-category-controls select.js-sort-by-private.form-select,html body select.js-sort-by-private.form-select{line-height:42px!important;border-radius:999px!important;height:42px!important;padding:0 40px 0 18px!important;font-size:14px!important;font-weight:500!important;width:auto!important;min-width:180px;background-color:#fff!important}'
    + 'html body .js-item-product .label{background:#fff!important;color:' + T.cuero + '!important;border-radius:999px!important;font-size:12px!important;font-weight:500!important;padding:5px 11px!important;text-transform:none!important;letter-spacing:0!important}'
    /* compra rápida de la tienda publicada (.mg-qs) */
    + 'html body .mg-qs *{letter-spacing:0!important;text-transform:none!important}'
    + '@media(min-width:768px){html body section.js-category-controls{display:flex!important;flex-direction:row!important;flex-wrap:nowrap!important;align-items:center!important;justify-content:space-between!important;gap:24px;margin-bottom:28px!important}'
    + 'html body section.js-category-controls>.row{display:none!important}'
    + 'html body section.js-category-controls .mz-cat-t{margin:0!important}'
    + 'html body section.js-category-controls .mz-orden{display:flex!important;align-items:center;margin:0!important;padding:0!important;max-width:none!important;width:auto!important;flex:0 0 auto!important}'
    + 'html body section.js-category-controls .mz-orden .form-group{margin:0!important}}'
    + '@media(max-width:767px){html body .js-category-controls .mz-orden{display:none!important}}'
    + '@media(max-width:767px){html body select.js-sort-by-private.form-select{min-width:0!important;width:100%!important}html body .js-category-controls a.btn-default{border-radius:999px!important;background:#fff!important;border:0!important;height:42px;display:flex!important;align-items:center;padding:0 18px!important}}'
    /* categoría y tarjetas del tema */
    + 'html body .js-category-controls::before,html body .js-category-controls::after{display:none!important;content:none!important}'
    + 'html body .js-item-product,html body .js-item-product *{border:0!important;box-shadow:none!important}'
    + 'html body .js-item-product .item-image,html body .js-item-product .product-item-image-container{border-radius:6px!important;overflow:hidden!important;background:' + T.tile + '!important}'
    + 'html body .js-item-product .item-name,html body .js-item-product .js-item-name{font-size:15px!important;font-weight:500!important;line-height:1.3!important}'
    + 'html body .js-item-product .item-description{padding:10px 2px 0!important}'
    + 'html body .js-item-product .mz-card-t{display:block;margin-top:2px}'
    /* ficha */
    + 'html body #single-product .js-price-display{font-size:30px!important;font-weight:600!important;letter-spacing:-.02em!important}'
    + 'html body #single-product .js-product-name,html body #single-product h1{font-size:44px!important;font-weight:600!important;letter-spacing:-.035em!important;line-height:1!important}'
    + '.mz-pt{display:block;width:100%;margin-top:4px;font-size:17px;font-weight:600;color:' + T.suela + '}'
    + '@media(max-width:767px){.mz-cat-t{padding:0 16px!important}html body .js-item-product .mz-card-t,html body .js-item-product .js-price-display{font-size:13px!important}}'
    + '@media(max-width:767px){html body #single-product .js-product-name,html body #single-product h1{font-size:32px!important}}'
    + '@media(prefers-reduced-motion:reduce){.mz *{transition:none!important}}';

  function el(html) { var d = document.createElement('div'); d.innerHTML = html.trim(); return d.firstChild; }
  function esc(s) { return String(s == null ? '' : s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }
  function plata(s) { return String(s || '').replace(/,00$/, ''); }
  function https(u) { return !u ? '' : (u.indexOf('//') === 0 ? 'https:' + u : u); }

  function fuentes() {
    if (document.getElementById('mz-fonts')) return;
    var l = document.createElement('link'); l.id = 'mz-fonts'; l.rel = 'stylesheet';
    l.href = 'https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,400;12..96,500;12..96,600;12..96,700&family=Cormorant+Garamond:wght@600&display=swap';
    document.head.appendChild(l);
  }
  function estilos() {
    if (document.getElementById('mz-css')) return;
    var s = document.createElement('style'); s.id = 'mz-css'; s.textContent = css; document.head.appendChild(s);
  }

  /* ---------- encabezado ---------- */
  function encabezado() {
    var a = document.querySelector('#logo a');
    if (a && !a.getAttribute('data-mz')) {
      a.setAttribute('data-mz', '1');
      a.classList.add('mz-logo');
      a.setAttribute('aria-label', 'Mayorga Cueros, inicio');
      var im = a.querySelector('img.logo-img');
      a.appendChild(el('<span class="mz-texto"><b>MAYORGA</b><small>CUEROS</small></span>'));
      if (im) a.insertAdjacentHTML('afterbegin', '<img class="mz-sello" src="' + (im.currentSrc || im.src) + '" alt="" aria-hidden="true">');
    }
    var h = document.querySelector('.head-main');
    if (h) [].forEach.call(h.querySelectorAll('.utility-name'), function (u) { u.style.setProperty('display', 'none', 'important'); });
    // Al bajar, el código de la tienda publicada le pone un degradé oscuro (.compress); se pisa en línea
    var fondo = function () {
      if (!h || h.style.getPropertyValue('background-image') === 'none') return;
      h.style.setProperty('background', 'rgba(236,233,228,.96)', 'important');
      h.style.setProperty('background-image', 'none', 'important');
      h.style.setProperty('border-bottom', '1px solid ' + T.linea, 'important');
    };
    fondo();
    if (h && !h.__mzf) { h.__mzf = 1; new MutationObserver(fondo).observe(h, { attributes: true, attributeFilter: ['class', 'style'] }); }
    if (h && !h.querySelector('.mz-chips')) {
      var aqui = location.pathname;
      var chips = CATS.map(function (c) {
        var on = aqui.indexOf(c[1]) === 0 && c[1] !== '/productos/' || (c[1] === '/productos/' && aqui === '/productos/');
        return '<a class="mz-chip' + (on ? ' on' : '') + '" href="' + c[1] + '"' + (on ? ' aria-current="page"' : '') + '>' + c[0] + '</a>';
      }).join('');
      h.appendChild(el('<nav class="mz-chips" aria-label="Categorías">' + chips + '</nav>'));
    }
  }



  /* ---------- repintado general ----------
     El tema viejo es oscuro y fija colores, fondos y letras con reglas muy fuertes.
     Esta pasada recorre la página y pisa en línea lo que quedó oscuro o claro de más. */
  function rgba(c) { var m = String(c).match(/[\d.]+/g); if (!m) return null; return { r: +m[0], g: +m[1], b: +m[2], a: m[3] == null ? 1 : +m[3] }; }
  function luz(c) { return (0.2126 * c.r + 0.7152 * c.g + 0.0722 * c.b) / 255; }
  var SALTEAR = '.mz,.mz-b3,#ajax-cart,.btn-whatsapp,.mz-logo,.mz-chips,svg,img,picture,video,iframe,script,style,noscript';
  function repintar(raiz) {
    var imp = function (e, k, v) { e.style.setProperty(k, v, 'important'); };
    [].forEach.call((raiz || document.body).querySelectorAll('*'), function (e) {
      if (e.__mz) return; e.__mz = 1;
      if (e.closest(SALTEAR)) return;
      if (e.closest('header.head-main') && !e.closest('.js-desktop-dropdown,.nav-dropdown-content,.search-suggest')) return;
      if (e.closest('footer')) return;
      var cs = getComputedStyle(e);
      var tag = e.tagName;
      var esBoton = e.matches('.btn-primary,.btn-primary *,input[type="submit"].btn,.js-addtocart,.js-addtocart *');
      var esCampo = /^(INPUT|SELECT|TEXTAREA)$/.test(tag) || e.matches('.form-select,.form-control,.js-variation-option,.btn-variant');
      imp(e, 'font-family', F);
      if (cs.textTransform === 'uppercase') { imp(e, 'text-transform', 'none'); imp(e, 'letter-spacing', '0'); }
      var bg = rgba(cs.backgroundColor), co = rgba(cs.color);
      if (esBoton) {
        if (e.matches('.btn-primary,.js-addtocart,input[type="submit"].btn')) { imp(e, 'background', T.cuero); imp(e, 'border-color', T.cuero); imp(e, 'border-radius', '999px'); }
        imp(e, 'color', T.piedra);
        return;
      }
      if (esCampo) { imp(e, 'background-color', '#fff'); imp(e, 'color', T.cuero); imp(e, 'border-color', T.linea); if (tag !== 'TEXTAREA') imp(e, 'border-radius', e.matches('.js-sort-by-private') ? '999px' : '10px'); return; }
      if (bg && bg.a > 0.3 && luz(bg) < 0.3) {
        var flota = cs.position === 'fixed' || cs.position === 'absolute' || e.matches('.modal,.modal *,[class*="dropdown"],[class*="notification"],.search-suggest');
        imp(e, 'background-color', flota ? T.piedra : 'transparent');
        if (luz(bg) < 0.3 && cs.borderTopColor && rgba(cs.borderTopColor) && luz(rgba(cs.borderTopColor)) < 0.3) imp(e, 'border-color', T.linea);
      }
      if (co && luz(co) > 0.55) imp(e, 'color', /price|precio/i.test(e.className) ? T.cuero : (cs.fontSize && parseFloat(cs.fontSize) <= 13 ? T.gris : T.cuero));
    });
  }


  /* ---------- precio con transferencia (el que calcula Pago Nube, nunca uno propio) ---------- */
  function transfTarjetas() {
    [].forEach.call(document.querySelectorAll('.js-item-product'), function (it) {
      if (it.closest('.mz') || it.querySelector('.mz-card-t')) return;
      var c = it.querySelector('[data-variants]'); if (!c) return;
      var vars; try { vars = JSON.parse(c.getAttribute('data-variants')); } catch (e) { return; }
      var min = vars.reduce(function (m, v) { return v.price_number < m.price_number ? v : m; }, vars[0]);
      if (!min || !min.price_with_payment_discount_short) return;
      var pr = it.querySelector('.item-price-container') || it.querySelector('.js-price-display') || it.querySelector('.item-description');
      if (pr) pr.insertAdjacentHTML('beforeend', '<span class="mz-card-t">' + plata(min.price_with_payment_discount_short) + ' con transferencia</span>');
    });
  }
  function transfFicha() {
    var cont = document.querySelector('#single-product[data-variants]'); if (!cont) return;
    var precio = cont.querySelector('.js-price-display'); if (!precio) return;
    var vars; try { vars = JSON.parse(cont.getAttribute('data-variants')); } catch (e) { return; }
    var linea = cont.querySelector('.mz-pt');
    if (!linea) { linea = el('<span class="mz-pt"></span>'); precio.parentNode.insertAdjacentElement('afterend', linea); }
    var elegidos = [].map.call(cont.querySelectorAll('select.js-variation-option'), function (x) { return x.value; });
    var v = vars.filter(function (x) { return elegidos.every(function (val, i) { return !val || x['option' + i] === val; }); })[0] || vars[0];
    linea.textContent = v.price_with_payment_discount_short ? plata(v.price_with_payment_discount_short) + ' con transferencia' : '';
  }


  /* ---------- categoría: el tema deja un hueco alto arriba; se achica y se pone el título ---------- */
  function categoria() {
    // Barra de categorías que agrega el código de la tienda publicada: repite los botones de arriba.
    // Se saca entera; el selector de orden (Más vendidos) vuelve al lado del título.
    var cc0 = document.querySelector('.js-category-controls');
    [].forEach.call(document.querySelectorAll('div[style*="border-top"]'), function (barra) {
      if (barra.__mzb || !cc0 || barra.parentNode !== cc0.parentNode) return;
      barra.__mzb = 1;
      var sel = barra.querySelector('select.js-sort-by-private');
      if (sel) {
        var col = sel.closest('[class*="col"]') || sel.parentNode;
        col.classList.add('mz-orden');
        cc0.appendChild(col);
      }
      barra.style.setProperty('display', 'none', 'important');
    });
    var c = document.querySelector('.js-category-controls'); if (!c || c.__mzc) return; c.__mzc = 1;
    c.style.setProperty('min-height', '0', 'important');
    c.style.setProperty('padding-top', '32px', 'important');
    c.style.setProperty('padding-bottom', '0', 'important');
    var chip = document.querySelector('.mz-chip.on');
    var nombre = chip ? chip.textContent : (document.title || '').split(/[|\-–]/)[0].trim();
    if (nombre && !c.querySelector('.mz-cat-t')) c.insertAdjacentHTML('afterbegin', '<h1 class="mz-cat-t">' + esc(nombre === 'Todo' ? 'Todos los productos' : nombre) + '</h1>');
  }


  /* ---------- precios sin ",00" (Tiendanube los vuelve a escribir al cambiar de variante; se limpian de nuevo) ---------- */
  function sinCeros() {
    [].forEach.call(document.querySelectorAll('.js-price-display,.js-compare-price-display'), function (e) {
      var t = e.textContent; if (/,00\s*$/.test(t)) e.textContent = t.replace(/,00\s*$/, '');
    });
    // Ventana de compra rápida y otros textos sueltos con precio: solo elementos sin hijos
    [].forEach.call(document.querySelectorAll('.mg-qs,.modal,.js-item-product,#single-product'), function (raiz) {
      var w = document.createTreeWalker(raiz, NodeFilter.SHOW_TEXT, null), n;
      while ((n = w.nextNode())) if (/\$[\d.]+,00/.test(n.nodeValue)) n.nodeValue = n.nodeValue.replace(/(\$[\d.]+),00/g, '$1');
    });
  }
  /* ---------- inicio: el código de la tienda publicada agrega secciones propias; se esconden ---------- */
  function soloInicioNuevo() {
    var mz = document.querySelector('.mz'); if (!mz || !mz.parentElement) return;
    [].forEach.call(mz.parentElement.children, function (c) { if (c !== mz && !c.classList.contains('mz-oculto') && c.tagName !== 'SCRIPT') c.classList.add('mz-oculto'); });
  }


  /* ---------- fotos render del Bolso de Viaje: se reemplazan por la foto real ---------- */
  var REAL_BOLSO = CDN + 'bolso-de-viaje-nubuck-03-0362069a14e5bbd0f317889256308109-1024-1024.webp';
  function sinRenders() {
    [].forEach.call(document.querySelectorAll('img'), function (im) {
      var u = (im.getAttribute('src') || '') + (im.getAttribute('srcset') || '') + (im.getAttribute('data-srcset') || '') + (im.getAttribute('data-src') || '');
      if (!/_2k_2026/.test(u)) return;
      if (im.closest('.js-item-product,.mz-card,.mz-pick,.mz-hero-foto')) {
        im.setAttribute('src', REAL_BOLSO); im.removeAttribute('srcset'); im.removeAttribute('data-srcset'); im.setAttribute('data-src', REAL_BOLSO);
      } else {
        var c = im.closest('.swiper-slide,[class*="thumb"],.js-product-slide') || im; c.style.setProperty('display', 'none', 'important');
      }
    });
  }

  /* ---------- pie: el tema fija los colores con reglas muy fuertes, se pisan en línea ---------- */
  function pie() {
    var f = document.querySelector('footer'); if (!f) return;
    var imp = function (e, k, v) { e.style.setProperty(k, v, 'important'); };
    if (!f.__mzf) { f.__mzf = 1; imp(f, 'background', T.tile); imp(f, 'border-top', '1px solid ' + T.linea); }
    var dv = f.querySelector('.divider'); if (dv) dv.style.setProperty('display', 'none', 'important');
    var logoPie = function (despues, antesDe) {
      var html = '<span class="mz-logo mz-logo-pie" style="display:flex;flex-direction:column;align-items:flex-start;line-height:1;margin-bottom:20px"><b>MAYORGA</b><small>CUEROS</small></span>';
      if (despues) despues.insertAdjacentHTML('afterend', html); else antesDe.insertAdjacentHTML('afterbegin', html);
      var lp = f.querySelector('.mz-logo-pie'), lb = lp.querySelector('b'), ls = lp.querySelector('small');
      imp(lb, 'color', T.cuero); imp(lb, 'font-family', LOGO); imp(lb, 'font-weight', '600'); imp(lb, 'font-size', '26px'); imp(lb, 'letter-spacing', '.14em');
      imp(ls, 'color', T.gris); imp(ls, 'font-family', F); imp(ls, 'font-size', '9px'); imp(ls, 'letter-spacing', '.5em'); imp(ls, 'margin-top', '4px');
    };
    if (!f.querySelector('.mz-logo-pie')) {
      var im = f.querySelector('img[src*="logo"]');
      if (im) { im.style.display = 'none'; logoPie(im, null); }
      else { var col = f.querySelector('.row.element-footer > *'); if (col) logoPie(null, col); }
    }
    [].forEach.call(f.querySelectorAll('*'), function (e) {
      if (e.__mz) return; e.__mz = 1;
      if (e.closest('.mz-logo')) return;
      if (e.tagName === 'svg' || e.closest('svg')) { imp(e, 'fill', T.cuero); return; }
      imp(e, 'color', e.closest('.footer-legal') ? T.gris : T.cuero);
      imp(e, 'font-family', F);
      if (getComputedStyle(e).textTransform === 'uppercase') { imp(e, 'text-transform', 'none'); imp(e, 'letter-spacing', '0'); }
      if (/footer-legal/.test(e.className)) { imp(e, 'background', T.tile); imp(e, 'border-top', '1px solid ' + T.linea); }
      if (/^(LI|P|DIV)$/.test(e.tagName) && e.children.length < 3 && /Rinc[oó]n 1264/.test(e.textContent) && e.textContent.length < 80) e.style.display = 'none';
    });
  }


  /* ---------- productos que trae la página ---------- */
  function productos() {
    var vistos = {}, lista = [];
    [].forEach.call(document.querySelectorAll('.js-item-product[data-product-id]'), function (it) {
      var id = it.getAttribute('data-product-id'); if (vistos[id]) return;
      var c = it.querySelector('[data-variants]'); if (!c) return;
      var vars; try { vars = JSON.parse(c.getAttribute('data-variants')); } catch (e) { return; }
      if (!vars.length) return;
      var link = it.querySelector('a[href*="/productos/"]');
      var nom = it.querySelector('.js-item-name');
      vistos[id] = 1;
      var min = vars.reduce(function (m, v) { return v.price_number < m.price_number ? v : m; }, vars[0]);
      var desde = vars.some(function (v) { return v.price_number !== min.price_number; });
      var colores = [];
      vars.forEach(function (v) { var k = (v.option0 || '').trim(); if (k && !/^\d+$/.test(k) && colores.indexOf(k) < 0) colores.push(k); });
      lista.push({
        id: id,
        n: (nom ? nom.textContent : (link && link.title) || '').trim(),
        url: link ? link.href : '#',
        p: (desde ? 'Desde ' : '') + plata(min.price_short),
        t: plata(min.price_with_payment_discount_short),
        img: https(vars[0].image_url),
        vars: vars,
        colores: colores
      });
    });
    return lista;
  }
  function puntos(cols, chico, vars) {
    return cols.map(function (k) {
      var c = COLOR[k.toLowerCase()] || '#9A8F84', img = '';
      if (vars) vars.some(function (v) { if ((v.option0 || '').trim() === k && v.image_url) { img = https(v.image_url); return true; } });
      return '<span class="mz-dot' + (chico ? ' ch' : '') + '"' + (img ? ' role="button" tabindex="0" aria-label="Ver en ' + esc(k) + '" data-img="' + img + '"' : '') + ' title="' + esc(k) + '" style="background:' + c + '"></span>';
    }).join('');
  }

  /* ---------- inicio ---------- */
  function inicio() {
    if (!HOME || document.querySelector('.mz')) return;
    var prods = productos(); if (prods.length < 4) return;
    var porId = {}; prods.forEach(function (p) { porId[p.id] = p; });
    var hero = PORTADA.map(function (h) {
      var p = porId[h.id]; if (!p) return null;
      var img = h.img || p.img;
      if (h.foto) p.vars.some(function (v) { if (h.foto.test(v.image_url || '')) { img = https(v.image_url); return true; } });
      return { p: p, linea: h.linea, img: img, perso: !!h.perso };
    }).filter(Boolean);
    if (!hero.length) return;

    var primera = document.querySelector('[data-store^="home-"]'); if (!primera) return;
    var picks = hero.map(function (h, i) {
      return '<button type="button" class="mz-pick" data-i="' + i + '" aria-pressed="' + (i ? 'false' : 'true') + '" aria-label="' + esc(h.p.n) + '"><img src="' + h.img + '" alt="" loading="lazy"></button>';
    }).join('');
    var cards = prods.map(function (p) {
      var perso = /billetera/i.test(p.n);
      return '<a class="mz-card" href="' + p.url + '"><div class="mz-card-foto"><img src="' + p.img + '" alt="' + esc(p.n) + '" loading="lazy">'
        + (perso ? '<span class="mz-pill">Con tus iniciales</span>' : '')
        + '<span class="mz-acciones"><span class="mz-comprar" role="button" tabindex="0" data-id="' + p.id + '">Comprar</span><span class="mz-ver">Ver</span></span></div>'
        + '<div class="mz-card-n"><span>' + esc(p.n) + '</span><span>' + puntos(p.colores, true, p.vars) + '</span></div>'
        + '<span class="mz-card-p">' + p.p + '</span>'
        + (p.t ? '<span class="mz-card-t">' + p.t + ' con transferencia</span>' : '') + '</a>';
    }).join('');
    var waIcono = '<svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M4 20l1.4-4A8 8 0 1 1 8.5 19z"/></svg>';

    var html = '<div class="mz">'
      + '<section class="mz-hero" aria-label="Producto destacado">'
      + '<div class="mz-hero-foto"><img class="mz-hi" src="" alt=""><span class="mz-pill mz-hp">Con tus iniciales</span></div>'
      + '<div class="mz-info"><div>'
      + '<h1 class="mz-hn"></h1><p class="mz-linea mz-hl"></p>'
      + '<span class="mz-precio mz-hpr"></span><span class="mz-transf mz-ht"></span>'
      + '<div class="mz-sw mz-hs"></div>'
      + '<div class="mz-ctas"><a class="mz-b p mz-hc" href="#">Comprar</a><a class="mz-b" href="/productos/">Ver todos los productos</a></div>'
      + '</div><div><span class="mz-picks-t">Los más elegidos</span><div class="mz-picks" role="group" aria-label="Elegir producto destacado">' + picks + '</div></div></div>'
      + '</section>'
      + '<section aria-labelledby="mz-todos"><h2 class="mz-h2" id="mz-todos">Todos los productos</h2><div class="mz-grid">' + cards + '</div></section>'
      + '<section class="mz-bento" aria-label="Más de Mayorga">'
      + '<a class="mz-b1" href="' + (porId['366256512'] ? porId['366256512'].url : '/billeteras/') + '"><img src="' + FOTO.billeteraInicial + '" alt="Billeteras con iniciales grabadas en metal" loading="lazy">'
      + '<div class="mz-b1-card"><div><b>Tu billetera, con tus iniciales.</b><small>Una o dos letras en metal.</small></div><span class="mz-b p" style="height:48px;font-size:15px">Personalizar</span></div></a>'
      + '<a class="mz-b2" href="/quienes-somos/"><img src="' + FOTO.local + '" alt="Local histórico de la familia Mayorga en el centro porteño" loading="lazy">'
      + '<div><b>Tres generaciones en el cuero</b><small>Uno de los locales de la familia en el centro porteño. Conocé la historia.</small></div></a>'
      + '<div class="mz-b3"><div><b>¿Tenés un local o una marca?</b><small>Somos fabricantes. Pedinos el catálogo mayorista con precios por cantidad.</small></div>'
      + '<div class="mz-row"><a class="mz-b" target="_blank" rel="noopener" href="' + WA + encodeURIComponent('Hola! Tengo un comercio y quiero el catálogo mayorista. Negocio: … Ciudad: … Productos que me interesan: …') + '">' + waIcono + 'Pedir catálogo por WhatsApp</a>'
      + '<a class="mz-link" href="/catalogo-mayorista/">Ver propuesta mayorista</a></div></div>'
      + '</section>'
      + '</div>';
    var nuevo = el(html);
    primera.parentNode.insertBefore(nuevo, primera);
    [].forEach.call(document.querySelectorAll('[data-store^="home-"]'), function (s) { s.classList.add('mz-oculto'); });
    // Secciones sueltas del tema viejo que no tienen data-store
    [].forEach.call(document.querySelectorAll('section.mg-con,section.mg-may,.mgn-sec'), function (s) { s.classList.add('mz-oculto'); });

    function mostrar(i) {
      var h = hero[i];
      var q = function (c) { return nuevo.querySelector(c); };
      q('.mz-hi').src = h.img; q('.mz-hi').alt = h.p.n;
      q('.mz-hp').style.display = h.perso ? '' : 'none';
      q('.mz-hn').textContent = h.p.n;
      q('.mz-hl').textContent = h.linea;
      q('.mz-hpr').textContent = h.p.p;
      q('.mz-ht').textContent = h.p.t ? h.p.t + ' con transferencia' : '';
      q('.mz-hs').innerHTML = puntos(h.p.colores, false, h.p.vars);
      q('.mz-hc').href = h.p.url;
      [].forEach.call(nuevo.querySelectorAll('.mz-pick'), function (b) { b.setAttribute('aria-pressed', b.getAttribute('data-i') == i ? 'true' : 'false'); });
    }
    nuevo.addEventListener('click', function (e) {
      var c = e.target.closest && e.target.closest('.mz-comprar');
      if (c) {
        e.preventDefault(); e.stopPropagation();
        var nat = document.querySelector('.js-item-product[data-product-id="' + c.getAttribute('data-id') + '"] .js-item-buy-open');
        if (nat) nat.click(); else location.href = c.closest('a').href;
        return;
      }
      var d = e.target.closest && e.target.closest('.mz-dot[data-img]');
      if (d) {
        e.preventDefault(); e.stopPropagation();
        var caja = d.closest('.mz-card') || d.closest('.mz-hero');
        var im = caja && caja.querySelector('.mz-card-foto img, .mz-hi');
        if (im) { im.src = d.getAttribute('data-img'); im.removeAttribute('srcset'); }
        [].forEach.call(d.parentNode.querySelectorAll('.mz-dot'), function (x) { x.classList.toggle('on', x === d); });
        return;
      }
      var b = e.target.closest && e.target.closest('.mz-pick'); if (!b) return;
      mostrar(+b.getAttribute('data-i'));
    });
    mostrar(0);
    function ajustar() {
      var h = document.querySelector('header.head-main'); if (!h) return;
      var sec = nuevo.querySelector('.mz-hero');
      var arriba = sec.getBoundingClientRect().top + window.scrollY;
      var libre = window.innerHeight - arriba - 24;
      var alto = Math.max(380, Math.min(640, Math.round(libre)));
      nuevo.style.setProperty('--mzh', alto + 'px');
      nuevo.classList.toggle('mz-bajo', alto < 560);
      var libreB = window.innerHeight - h.getBoundingClientRect().height - 48;
      nuevo.style.setProperty('--mzb', Math.max(600, Math.min(760, Math.round(libreB))) + 'px');
    }
    ajustar(); window.addEventListener('resize', ajustar); window.addEventListener('load', ajustar);
  }

  function todo() { fuentes(); estilos(); encabezado(); inicio(); pie(); categoria(); transfTarjetas(); transfFicha(); sinCeros(); sinRenders(); soloInicioNuevo(); repintar(); }
  function arrancar() {
    todo();
    window.addEventListener('load', todo);
    document.addEventListener('change', function (e) { if (e.target && e.target.matches && e.target.matches('.js-variation-option')) setTimeout(transfFicha, 50); });
    var t; new MutationObserver(function () { clearTimeout(t); t = setTimeout(todo, 250); }).observe(document.documentElement, { childList: true, subtree: true });
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', arrancar); else arrancar();
})();
