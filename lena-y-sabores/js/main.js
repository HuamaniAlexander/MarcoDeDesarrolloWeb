// // js principal — interacciones basicas

// // contador carrito (simulado)
// let cartCount = 0;
// function updateCartBadge() {
//   document.querySelectorAll('.cart-badge').forEach(b => {
//     b.textContent = cartCount;
//     b.style.display = cartCount > 0 ? 'flex' : 'none';
//   });
// }

// // agregar al carrito
// function agregarAlCarrito(nombre, precio) {
//   cartCount++;
//   updateCartBadge();
//   showToast(`✅ ${nombre} agregado al pedido`);
// }

// // toast de confirmacion
// function showToast(msg) {
//   let toast = document.getElementById('toast-global');
//   if (!toast) {
//     toast = document.createElement('div');
//     toast.id = 'toast-global';
//     toast.style.cssText = `
//       position:fixed; bottom:28px; left:50%; transform:translateX(-50%) translateY(60px);
//       background:#1A1A1A; color:#fff; padding:14px 28px;
//       border-radius:12px; font-size:.9rem; font-weight:600;
//       box-shadow:0 8px 32px rgba(0,0,0,0.25); z-index:9999;
//       transition:transform .3s ease, opacity .3s ease; opacity:0;
//       white-space:nowrap;
//     `;
//     document.body.appendChild(toast);
//   }
//   toast.textContent = msg;
//   toast.style.transform = 'translateX(-50%) translateY(0)';
//   toast.style.opacity = '1';
//   clearTimeout(toast._timer);
//   toast._timer = setTimeout(() => {
//     toast.style.transform = 'translateX(-50%) translateY(60px)';
//     toast.style.opacity = '0';
//   }, 2500);
// }

// // filtros de categoria (carta / promociones)
// function initCategoryTabs() {
//   document.querySelectorAll('.cat-tab').forEach(tab => {
//     tab.addEventListener('click', function () {
//       const parent = this.closest('.category-tabs');
//       parent.querySelectorAll('.cat-tab').forEach(t => t.classList.remove('activo'));
//       this.classList.add('activo');
//       // aqui iria logica de filtro si hubiera backend
//     });
//   });
// }

// // contador de personas (reserva)
// function initCounters() {
//   document.querySelectorAll('.counter-box').forEach(box => {
//     const btnMinus = box.querySelector('.btn-minus');
//     const btnPlus = box.querySelector('.btn-plus');
//     const display = box.querySelector('.count-display');
//     if (!display) return;
//     let count = parseInt(display.textContent) || 1;
//     btnMinus?.addEventListener('click', () => {
//       if (count > 1) { count--; display.textContent = count; }
//     });
//     btnPlus?.addEventListener('click', () => {
//       if (count < 20) { count++; display.textContent = count; }
//     });
//   });
// }

// // seleccion de horario
// function initTimeButtons() {
//   document.querySelectorAll('.time-btn').forEach(btn => {
//     btn.addEventListener('click', function () {
//       const group = this.closest('.time-group');
//       if (group) {
//         group.querySelectorAll('.time-btn').forEach(b => b.classList.remove('selected'));
//       }
//       this.classList.add('selected');
//     });
//   });
// }

// // formulario de reserva
// function initReservaForm() {
//   const form = document.getElementById('reserva-form');
//   if (!form) return;
//   form.addEventListener('submit', function (e) {
//     e.preventDefault();
//     showToast('🎉 Reserva confirmada. Te esperamos!');
//     this.reset();
//     document.querySelectorAll('.time-btn').forEach(b => b.classList.remove('selected'));
//     const display = document.querySelector('.count-display');
//     if (display) display.textContent = '2';
//   });
// }

// // formulario de login
// function initAuthForms() {
//   const loginForm = document.getElementById('login-form');
//   if (loginForm) {
//     loginForm.addEventListener('submit', e => {
//       e.preventDefault();
//       showToast('✅ Sesion iniciada correctamente');
//     });
//   }
//   const regBtn = document.getElementById('btn-crear-cuenta');
//   if (regBtn) {
//     regBtn.addEventListener('click', () => {
//       showToast('📧 Revisa tu correo para confirmar tu cuenta');
//     });
//   }
// }

// // newsletter
// function initNewsletter() {
//   document.querySelectorAll('.newsletter-form').forEach(f => {
//     f.addEventListener('submit', e => {
//       e.preventDefault();
//       const input = f.querySelector('input[type="email"]');
//       if (input?.value) {
//         showToast('📬 Suscripcion exitosa. Gracias!');
//         input.value = '';
//       }
//     });
//   });
// }

// // smooth scroll navbar links
// function initSmoothScroll() {
//   document.querySelectorAll('a[href^="#"]').forEach(a => {
//     a.addEventListener('click', function (e) {
//       const target = document.querySelector(this.getAttribute('href'));
//       if (target) {
//         e.preventDefault();
//         target.scrollIntoView({ behavior: 'smooth', block: 'start' });
//       }
//     });
//   });
// }

// // init al cargar
// document.addEventListener('DOMContentLoaded', () => {
//   updateCartBadge();
//   initCategoryTabs();
//   initCounters();
//   initTimeButtons();
//   initReservaForm();
//   initAuthForms();
//   initNewsletter();
//   initSmoothScroll();
// });
