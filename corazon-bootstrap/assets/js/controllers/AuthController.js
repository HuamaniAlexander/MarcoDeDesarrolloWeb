// authcontroller: maneja la autenticación (mock frontend)
const AuthController = {

  init() {
    const loginForm    = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');
    if (loginForm)    loginForm.addEventListener('submit',    e => this.handleLogin(e));
    if (registerForm) registerForm.addEventListener('submit', e => this.handleRegister(e));
  },

  handleLogin(e) {
    e.preventDefault();
    const email    = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;

    // validación básica — en producción iría contra la api
    if (!email || !password) return this.showError('Completa todos los campos.');

    // mock: redirige según rol (en producción se valida con jwt)
    if (email.includes('admin')) {
      this.showSuccess('¡Bienvenido, Admin!');
      setTimeout(() => window.location.href = 'admin/dashboard.html', 800);
    } else {
      this.showSuccess('¡Bienvenido de vuelta!');
      setTimeout(() => window.location.href = '../pages/home.html', 800);
    }
  },

  handleRegister(e) {
    e.preventDefault();
    const password = document.getElementById('password').value;
    const confirm  = document.getElementById('confirm_password').value;

    if (password !== confirm) return this.showError('Las contraseñas no coinciden.');
    if (password.length < 8)  return this.showError('La contraseña debe tener al menos 8 caracteres.');

    this.showSuccess('¡Cuenta creada! Redirigiendo...');
    setTimeout(() => window.location.href = 'login.html', 1200);
  },

  // toast de bootstrap para feedback al usuario
  showError(msg) {
    this._toast(msg, 'danger');
  },
  showSuccess(msg) {
    this._toast(msg, 'success');
  },

  // crea un toast dinámico usando el componente toast de bootstrap
  _toast(msg, type) {
    const container = document.getElementById('toast-container') || (() => {
      const el = document.createElement('div');
      el.id = 'toast-container';
      el.className = 'toast-container position-fixed top-0 end-0 p-3';
      el.style.zIndex = 9999;
      document.body.appendChild(el);
      return el;
    })();

    const toastEl = document.createElement('div');
    toastEl.className = `toast align-items-center text-bg-${type} border-0`;
    toastEl.setAttribute('role', 'alert');
    toastEl.innerHTML = `
      <div class="d-flex">
        <div class="toast-body fw-semibold">${msg}</div>
        <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast"></button>
      </div>`;
    container.appendChild(toastEl);

    // bootstrap toast api: show() muestra el componente nativo
    const toast = new bootstrap.Toast(toastEl, { delay: 3000 });
    toast.show();
    toastEl.addEventListener('hidden.bs.toast', () => toastEl.remove());
  },
};
