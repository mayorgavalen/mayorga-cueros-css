/* Home nuevo de Mayorga Cueros (16/11/2026).
   Se carga SOLO si la tienda se abre con ?mg=nuevo (lo recuerda en este navegador; ?mg=viejo lo apaga).
   Es aditivo: no reemplaza el codigo de seguimiento existente, se suma encima. Idempotente. */
(function () {
  if (window.__mgNuevo) return; window.__mgNuevo = 1;
  var G = 'https://mayorgavalen.github.io/mayorga-cueros-css/';
  var WA = 'https://wa.me/5491126802434?text=';
  var HOME = location.pathname === '/';
  var TOUCH = window.matchMedia && matchMedia('(hover: none)').matches;
  var SF = '"Instrument Serif",Georgia,serif';

  /* ---------- estilos ---------- */
  var css = ''
    /* toque */
    + 'html{-webkit-tap-highlight-color:transparent}'
    + '.btn,.btn-primary,.btn-secondary,input.btn,.mgn-chip,.mgn-b{touch-action:manipulation;transition:transform .12s cubic-bezier(.23,1,.32,1),background-color .2s,border-color .2s,color .2s!important}'
    + '.btn:active,input.btn:active,.mgn-b:active,.mgn-chip:active{transform:scale(.97)}'
    + '@media(max-width:767px){.js-search-input{font-size:16px!important}}'
    /* encabezado que se achica */
    + '.head-main .logo-img{transition:height .25s cubic-bezier(.23,1,.32,1),max-height .25s cubic-bezier(.23,1,.32,1)!important}'
    + '.head-main.mgn-chico .logo-img{max-height:36px!important;height:36px!important;width:auto!important}'
    + '@media(max-width:767px){.head-main.mgn-chico .logo-img{max-height:32px!important;height:32px!important}.head-main.mgn-chico .pb-3{padding-bottom:8px!important}}'
    /* frase de entrada */
    + '.mgn-hero{max-width:1240px;margin:0 auto;padding:44px 15px 28px;display:grid;grid-template-columns:1.25fr 1fr;gap:36px;align-items:end}'
    + '.mgn-hero h1{font-family:' + SF + '!important;font-weight:400!important;font-size:64px!important;line-height:1.02!important;color:#EAE0CE!important;margin:0;text-transform:none!important;letter-spacing:-.01em!important}'
    + '.mgn-hero h1 em{color:#C89B62}'
    + '.mgn-hero p{color:#D3C8B3;font-size:16px;line-height:1.55;margin:0 0 18px;max-width:44ch}'
    + '.mgn-ctas{display:flex;gap:10px;flex-wrap:wrap}'
    + '.mgn-b{display:inline-flex;align-items:center;justify-content:center;padding:14px 22px;font-weight:700;font-size:14px;border:1px solid #EAE0CE;color:#EAE0CE!important;text-decoration:none!important;user-select:none;-webkit-user-select:none}'
    + '.mgn-b.p{background:#EAE0CE;color:#0F0B08!important}'
    + '@media(hover:hover) and (pointer:fine){.mgn-b.p:hover{background:#C89B62;border-color:#C89B62}.mgn-b:not(.p):hover{background:rgba(234,224,206,.08)}}'
    + '@media(max-width:767px){.mgn-hero{grid-template-columns:1fr;gap:12px;padding:26px 16px 20px}.mgn-hero h1{font-size:42px!important}.mgn-hero p{font-size:15px;margin-bottom:14px}.mgn-ctas .mgn-b{flex:1}}'
    /* categorias en celular: carrusel con iman */
    + '@media(max-width:767px){[data-store="home-banner-categories"] .row{scroll-snap-type:x mandatory;scroll-padding-left:16px;overscroll-behavior-x:contain}[data-store="home-banner-categories"] .js-category-banner-container{scroll-snap-align:start}}'
    /* destacados en celular: grilla de 2 columnas, 6 productos */
    + '@media(max-width:767px){'
    + '[data-store="home-products-featured"] .js-swiper-featured{overflow:visible!important}'
    + '[data-store="home-products-featured"] .js-swiper-featured>.swiper-wrapper{display:grid!important;grid-template-columns:repeat(2,minmax(0,1fr));gap:10px;transform:none!important;padding:0 16px;box-sizing:border-box;width:100%!important}'
    + '[data-store="home-products-featured"] .js-swiper-featured .swiper-slide{width:auto!important;min-width:0!important;margin:0!important;padding:0!important;max-width:none!important}'
    + '[data-store="home-products-featured"] .item-price-container *,[data-store="home-products-featured"] .js-item-name{white-space:normal!important}'
    + '[data-store="home-products-featured"] .item-actions .btn-secondary,[data-store="home-products-featured"] .js-item-buy-open+.btn-secondary{display:none!important}'
    + '[data-store="home-products-featured"] .js-swiper-featured .swiper-slide:nth-child(n+7){display:none!important}'
    + '[data-store="home-products-featured"] .swiper-button-prev,[data-store="home-products-featured"] .swiper-button-next,[data-store="home-products-featured"] .swiper-pagination{display:none!important}'
    + '[data-store="home-products-featured"] .item-name,[data-store="home-products-featured"] .js-item-name{font-size:11.5px!important;line-height:1.3!important}'
    + '[data-store="home-products-featured"] .item-price{font-size:13px!important}'
    + '.mgn-todos{display:flex!important;margin:16px 16px 0}'
    + '}'
    + '.mgn-todos{display:none;justify-content:center}'
    + '.mgn-pill{position:absolute;left:8px;top:8px;z-index:5;background:rgba(15,11,8,.86);color:#C89B62;font-size:10.5px;font-weight:700;letter-spacing:.05em;padding:4px 8px;pointer-events:none}'
    /* cifras */
    + 'section.mg-con.mgn p b{font-size:38px!important;line-height:1!important;margin-bottom:8px!important;font-variant-numeric:tabular-nums}'
    + '@media(max-width:767px){section.mg-con.mgn p b{font-size:30px!important}}'
    /* proceso */
    + '.mgn-sec{max-width:1240px;margin:0 auto;padding:72px 15px 0}'
    + '.mgn-h{font-family:' + SF + '!important;font-weight:400!important;font-size:44px;line-height:1.02!important;color:#EAE0CE!important;margin:6px 0 0;text-transform:none!important;letter-spacing:0!important}'
    + '.mgn-eyb{font-size:11px;letter-spacing:.22em;text-transform:uppercase;color:#A89C86}'
    + '.mgn-pro{display:grid;grid-template-columns:repeat(3,1fr);gap:18px;margin-top:26px}'
    + '.mgn-pro figure{margin:0}'
    + '.mgn-pro .im{aspect-ratio:4/5;overflow:hidden;background:#1D1510}'
    + '.mgn-pro img{width:100%;height:100%;object-fit:cover;display:block}'
    + '.mgn-pro figcaption{display:grid;grid-template-columns:auto 1fr;gap:4px 14px;margin-top:14px}'
    + '.mgn-pro .n{grid-row:span 2;font-family:' + SF + ';font-size:44px;line-height:.9;color:#C89B62}'
    + '.mgn-pro h3{font-family:' + SF + '!important;font-weight:400!important;font-size:24px!important;margin:0;color:#EAE0CE!important;text-transform:none!important;letter-spacing:0!important}'
    + '.mgn-pro p{margin:0;color:#CBBFA9;font-size:14px}'
    + '@media(max-width:767px){.mgn-sec{padding:52px 16px 0}.mgn-h{font-size:34px!important}.mgn-pro{grid-template-columns:1fr;gap:26px}.mgn-pro .im{aspect-ratio:16/10}}'
    /* ayuda */
    + '.mgn-ay{border:1px solid #2E241D;background:linear-gradient(120deg,#17110D,#120D0A);padding:34px;display:grid;grid-template-columns:1fr 1.4fr;gap:30px;align-items:center}'
    + '.mgn-ay p{color:#CBBFA9;margin:10px 0 0;max-width:40ch}'
    + '.mgn-chips{display:flex;flex-wrap:wrap;gap:10px}'
    + '.mgn-chip{display:inline-flex;align-items:center;gap:8px;padding:11px 16px;border:1px solid #3D3027;border-radius:999px;font-size:14px;background:#1A1410;color:#EAE0CE!important;text-decoration:none!important;user-select:none;-webkit-user-select:none}'
    + '.mgn-chip:before{content:"";width:7px;height:7px;border-radius:50%;background:#25D366}'
    + '@media(hover:hover) and (pointer:fine){.mgn-chip:hover{border-color:#C89B62;background:#211912}}'
    + '@media(max-width:767px){.mgn-ay{grid-template-columns:1fr;padding:22px}}'
    /* preguntas */
    + '.mgn-faq{display:grid;grid-template-columns:1fr 1.6fr;gap:40px}'
    + '.mgn-faq details{border-bottom:1px solid #2E241D}.mgn-faq details:first-child{border-top:1px solid #2E241D}'
    + '.mgn-faq summary{list-style:none;cursor:pointer;padding:18px 0;display:flex;justify-content:space-between;gap:16px;font-weight:500;font-size:16px;color:#EAE0CE}'
    + '.mgn-faq summary::-webkit-details-marker{display:none}'
    + '.mgn-faq summary:after{content:"+";font-family:' + SF + ';font-size:24px;line-height:1;color:#C89B62;transition:transform .2s cubic-bezier(.23,1,.32,1)}'
    + '.mgn-faq details[open] summary:after{transform:rotate(45deg)}'
    + '.mgn-faq details p{margin:0 0 18px;color:#CBBFA9;max-width:60ch}'
    + '@media(max-width:767px){.mgn-faq{grid-template-columns:1fr;gap:14px}}'
    + '.mgn-fin{height:72px}'
    /* whatsapp con menu */
    + '.mgn-wa{position:fixed;right:18px;z-index:9999;width:min(300px,calc(100vw - 36px));background:#FBF7EF;color:#1B140F;padding:16px;box-shadow:0 18px 50px rgba(0,0,0,.5);transform-origin:bottom right;transition:opacity .2s cubic-bezier(.23,1,.32,1),transform .2s cubic-bezier(.23,1,.32,1),visibility .2s}'
    + '.mgn-wa:not(.on){opacity:0;transform:scale(.96) translateY(6px);visibility:hidden;pointer-events:none}'
    + '.mgn-wa b{display:block;font-family:' + SF + ';font-weight:400;font-size:22px;line-height:1.1;margin-bottom:4px}'
    + '.mgn-wa small{display:block;color:#6D5D4E;margin-bottom:10px;font-size:13px}'
    + '.mgn-wa a{display:block;padding:10px 12px;border:1px solid #E3D8C6;margin-top:6px;font-size:14px;background:#fff;color:#1B140F!important;text-decoration:none!important}'
    + '.mgn-wa a:active{background:#F1E8D8}'
    /* aviso de vista nueva (solo para comparar) */
    + '.mgn-modo{position:fixed;left:12px;bottom:12px;z-index:9998;background:#F2C879;color:#1B140F;font:700 12px/1 Archivo,system-ui,sans-serif;padding:9px 12px;border-radius:999px;box-shadow:0 6px 18px rgba(0,0,0,.4);text-decoration:none!important}'
    + '@media(prefers-reduced-motion:reduce){.mgn-hero *,.mgn-wa{transition:none!important;animation:none!important}}'
    + '@media(prefers-reduced-motion:no-preference){.mgn-hero>*{animation:mgnSube .6s cubic-bezier(.23,1,.32,1) both}.mgn-hero>*:nth-child(2){animation-delay:.08s}}'
    + '@keyframes mgnSube{from{opacity:.001;transform:translateY(12px)}to{opacity:1;transform:none}}';

  function antes(nuevo, ref) { nuevo.style.order = getComputedStyle(ref).order; ref.parentNode.insertBefore(nuevo, ref); return nuevo; }
  function el(html) { var d = document.createElement('div'); d.innerHTML = html.trim(); return d.firstChild; }
  function wa(t) { return WA + encodeURIComponent(t); }

  /* ---------- en toda la tienda ---------- */
  function estilos() {
    if (document.getElementById('mgn-css')) return;
    var s = document.createElement('style'); s.id = 'mgn-css'; s.textContent = css; document.head.appendChild(s);
  }
  // En pantallas tactiles, los :hover quedan "pegados" despues de tocar. Se sacan solo ahi.
  var hoverQuitado = false;
  function sinHoverTactil() {
    if (!TOUCH || hoverQuitado) return; hoverQuitado = true;
    [].forEach.call(document.styleSheets, function (sh) {
      var rules; try { rules = sh.cssRules; } catch (e) { return; }
      (function limpiar(lista) {
        for (var i = lista.length - 1; i >= 0; i--) {
          var r = lista[i];
          if (r.cssRules && !r.selectorText) { limpiar(r.cssRules); continue; }
          if (r.selectorText && r.selectorText.indexOf(':hover') > -1 && /btn|textbanner|item-product|item/.test(r.selectorText)) {
            try { (r.parentRule || sh).deleteRule(i); } catch (e) {}
          }
        }
      })(rules);
    });
  }
  function encabezado() {
    var h = document.querySelector('.head-main'); if (!h || h.dataset.mgn) return; h.dataset.mgn = 1;
    var f = function () { h.classList.toggle('mgn-chico', window.scrollY > 120); };
    window.addEventListener('scroll', f, { passive: true }); f();
  }
  function whatsapp() {
    var b = document.querySelector('.btn-whatsapp'); if (!b || b.dataset.mgn) return; b.dataset.mgn = 1;
    var p = el('<div class="mgn-wa" role="dialog" aria-label="Consultas por WhatsApp"><b>Hola, ¿en qué te ayudamos?</b><small>Elegí un tema y te abre WhatsApp con el mensaje armado.</small>'
      + '<a target="_blank" rel="noopener" href="' + wa('Hola! Quiero saber qué talle de cinto me conviene') + '">Talle de cinto</a>'
      + '<a target="_blank" rel="noopener" href="' + wa('Hola! Quería consultar stock de un color') + '">Stock de un color</a>'
      + '<a target="_blank" rel="noopener" href="' + wa('Hola! ¿Cuánto tarda el envío a mi ciudad?') + '">Envíos y tiempos</a>'
      + '<a target="_blank" rel="noopener" href="' + wa('Hola! Tengo un local y quiero comprar por mayor') + '">Compra por mayor</a>'
      + '<a target="_blank" rel="noopener" href="' + wa('Hola! Tengo otra consulta') + '">Otra consulta</a></div>');
    document.body.appendChild(p);
    var ubicar = function () { var r = b.getBoundingClientRect(); p.style.bottom = (window.innerHeight - r.top + 10) + 'px'; };
    b.addEventListener('click', function (e) { e.preventDefault(); e.stopPropagation(); ubicar(); p.classList.toggle('on'); }, true);
    document.addEventListener('click', function (e) { if (!p.contains(e.target) && e.target !== b && !b.contains(e.target)) p.classList.remove('on'); });
  }
  function modo() {
    if (document.querySelector('.mgn-modo')) return;
    var u = new URL(location.href); u.searchParams.set('mg', 'viejo');
    document.body.appendChild(el('<a class="mgn-modo" href="' + u.pathname + u.search + '">Vista nueva · ver la actual</a>'));
  }

  /* ---------- solo en el home ---------- */
  var carruselListo = false;
  function categorias() {
    if (carruselListo || window.innerWidth > 767) return;
    var r = document.querySelector('[data-store="home-banner-categories"] .row'); if (!r) return;
    r.scrollLeft = 0; carruselListo = true;
  }
  function destacados() {
    var s = document.querySelector('[data-store="home-products-featured"]'); if (!s) return;
    if (!s.querySelector('.mgn-todos')) {
      var w = s.querySelector('.js-swiper-featured'); if (w) w.parentNode.appendChild(el('<div class="mgn-todos"><a class="mgn-b p" style="width:100%" href="/productos/">Ver todos los productos</a></div>'));
    }
  }
  function sinCifras() {
    var c = document.querySelector('section.mg-con'); if (c) c.style.setProperty('display', 'none', 'important');
  }
  function ayuda() {
    var ref = document.querySelector('section.mg-may'); if (!ref || document.querySelector('.mgn-ayuda')) return;
    var chips = [['Qué talle de cinto me va', 'Hola! Quiero saber qué talle de cinto me conviene'], ['Stock de un color', 'Hola! Quería consultar stock de un color'], ['Envíos y tiempos', 'Hola! ¿Cuánto tarda el envío a mi ciudad?'], ['Regalos empresariales', 'Hola! Quiero cotizar regalos empresariales con logo'], ['Dónde está mi pedido', 'Hola! Quiero saber el estado de mi pedido']]
      .map(function (c) { return '<a class="mgn-chip" target="_blank" rel="noopener" href="' + wa(c[1]) + '">' + c[0] + '</a>'; }).join('');
    antes(el('<section class="mgn-sec mgn-ayuda" style="padding-bottom:72px"><div class="mgn-ay"><div><span class="mgn-eyb">Atención por WhatsApp</span><h2 class="mgn-h" style="font-size:38px">¿Te ayudamos a elegir?</h2><p>Elegí el tema y te abre WhatsApp con la consulta armada. Responde la familia.</p></div><div class="mgn-chips">' + chips + '</div></div></section>'), ref);
  }
  function preguntas() {
    var ref = document.querySelector('[data-store="home-newsletter"]'); if (!ref || document.querySelector('.mgn-preg')) return;
    var qs = [['¿Cuánto tarda en llegar?', 'En general, entre 3 y 7 días hábiles desde que se acredita el pago. Enviamos a todo el país.'], ['¿Puedo cambiarlo?', 'Sí, podés pedir un cambio dentro de los 15 días de la compra.'], ['¿Tiene garantía?', 'Todos nuestros artículos tienen 6 meses de garantía.'], ['¿Y si llega dañado?', 'Escribinos a mayorgacueros@gmail.com y te enviamos uno nuevo.'], ['¿Hay descuento?', '15% off pagando con transferencia, y envío gratis en compras desde $160.000.']]
      .map(function (q, i) { return '<details' + (i ? '' : ' open') + '><summary>' + q[0] + '</summary><p>' + q[1] + '</p></details>'; }).join('');
    antes(el('<section class="mgn-sec mgn-preg" style="padding-bottom:72px"><div class="mgn-faq"><div><span class="mgn-eyb">Antes de comprar</span><h2 class="mgn-h">Preguntas frecuentes</h2></div><div>' + qs + '</div></div></section>'), ref);
  }

  function todo() {
    estilos(); encabezado(); whatsapp(); modo();
    if (HOME) { categorias(); destacados(); sinCifras(); ayuda(); preguntas(); }
  }
  function arrancar() {
    todo();
    window.addEventListener('load', function () { todo(); sinHoverTactil(); setTimeout(function () { carruselListo = false; categorias(); }, 400); });
    var t; new MutationObserver(function () { clearTimeout(t); t = setTimeout(todo, 250); }).observe(document.documentElement, { childList: true, subtree: true });
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', arrancar); else arrancar();
})();
