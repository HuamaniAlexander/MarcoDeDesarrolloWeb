// admincontroller: maneja el panel de administración
const AdminController = {

  init() {
    this.initSidebar();
    this.initSearch();

    // inicializa tooltips de bootstrap si existen en la página
    document.querySelectorAll('[data-bs-toggle="tooltip"]')
      .forEach(el => new bootstrap.Tooltip(el));
  },

  // sidebar responsive: usa offcanvas de bootstrap en móvil
  initSidebar() {
    const toggleBtn = document.getElementById('sidebar-toggle');
    const sidebar   = document.getElementById('admin-sidebar');
    if (toggleBtn && sidebar) {
      toggleBtn.addEventListener('click', () => sidebar.classList.toggle('show'));
    }

    // resalta el link activo según la url actual
    const current = window.location.pathname.split('/').pop();
    document.querySelectorAll('.sidebar-link').forEach(link => {
      if (link.getAttribute('href') === current) link.classList.add('active');
    });
  },

  // búsqueda en tiempo real con debounce
  initSearch() {
    const input = document.getElementById('admin-search');
    if (!input) return;
    let timer;
    input.addEventListener('input', e => {
      clearTimeout(timer);
      timer = setTimeout(() => this.filterTable(e.target.value), 300); // debounce 300ms
    });
  },

  filterTable(query) {
    const rows = document.querySelectorAll('[data-searchable]');
    const q    = query.toLowerCase();
    rows.forEach(row => {
      row.style.display = row.textContent.toLowerCase().includes(q) ? '' : 'none';
    });
  },

  // renderiza la tabla de pedidos en admin
  renderOrdersTable() {
    const tbody = document.getElementById('orders-tbody');
    if (!tbody) return;
    const orders = OrderModel.getAll();
    tbody.innerHTML = orders.map(o => Renderer.orderRow(o)).join('');
  },

  // renderiza las tarjetas de productos en admin
  renderProductsGrid() {
    const grid = document.getElementById('admin-products-grid');
    if (!grid) return;
    const products = ProductModel.getAll();
    grid.innerHTML = products.map(p => this._adminProductCard(p)).join('');
  },

  _adminProductCard(product) {
    return `
      <div class="col-md-6 col-xl-4" data-searchable>
        <div class="card-tonal p-4 h-100 d-flex flex-column gap-3">
          <div class="d-flex justify-content-between align-items-start">
            <div>
              <span class="badge badge-${product.available ? 'active' : 'cancelled'} rounded-pill mb-2">
                ${product.available ? 'Disponible' : 'Agotado'}
              </span>
              <h6 class="headline fw-black mb-1">${product.name}</h6>
              <p class="text-muted-brand small mb-0">${product.description}</p>
            </div>
            <span class="fw-black text-flame ms-3 text-nowrap">${product.getFormattedPrice()}</span>
          </div>
          <div class="d-flex align-items-center gap-2 mt-auto">
            <span class="badge badge-pending rounded-pill">Stock: ${product.stock}</span>
            <span class="badge rounded-pill px-3" style="background:var(--color-surface-highest);color:var(--color-on-surface-variant)">
              ${product.category}
            </span>
            <div class="ms-auto d-flex gap-2">
              <button class="btn btn-ghost btn-sm rounded-3" data-bs-toggle="tooltip" title="Editar">
                <span class="material-symbols-outlined" style="font-size:1rem">edit</span>
              </button>
              <button class="btn btn-sm rounded-3" style="background:rgba(164,2,19,.15);color:var(--color-error)">
                <span class="material-symbols-outlined" style="font-size:1rem">delete</span>
              </button>
            </div>
          </div>
        </div>
      </div>`;
  },
};
