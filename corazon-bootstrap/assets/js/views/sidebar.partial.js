// sidebar.partial.js: genera el html del sidebar admin y lo inyecta en #admin-sidebar
// permite reutilizar la navegación en todas las páginas admin sin duplicar html
function renderAdminSidebar(activePage) {
  const links = [
    { href: 'dashboard.html',  icon: 'dashboard',        label: 'Dashboard'   },
    { href: 'orders.html',     icon: 'receipt_long',     label: 'Pedidos'     },
    { href: 'products.html',   icon: 'restaurant_menu',  label: 'Productos'   },
    { href: 'inventory.html',  icon: 'inventory_2',      label: 'Inventario'  },
    { href: 'reports.html',    icon: 'analytics',        label: 'Reportes'    },
  ];

  const navItems = links.map(l => `
    <a href="${l.href}" class="sidebar-link ${activePage === l.href ? 'active' : ''}">
      <span class="material-symbols-outlined" style="font-size:1.3rem">${l.icon}</span>
      <span class="small fw-semibold">${l.label}</span>
    </a>`).join('');

  const html = `
    <!-- logo y título -->
    <div class="px-4 pb-6 mb-4 border-bottom" style="border-color:rgba(90,65,54,.2)!important;padding-bottom:1.5rem">
      <span class="headline fw-black text-flame d-block" style="font-size:1.2rem">EL CORAZÓN</span>
      <span class="text-muted-brand" style="font-size:.65rem;letter-spacing:.15em;text-transform:uppercase">Admin Console</span>
    </div>

    <!-- avatar del admin -->
    <div class="d-flex align-items-center gap-3 px-4 mb-4">
      <div class="rounded-3 overflow-hidden flex-shrink-0" style="width:40px;height:40px;background:var(--color-surface-high)">
        <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuC0MraxyhscVfh4jK3KB23ZvFV1f6EeUXqD4tCQ-6O9Q68r8ioboZXXCNoskkFQR32W-dwTEmI4cpRE4aMDQARlhIq-D8Pa7vAOCVJRQ70dUEKLlbYQDrV4DuuwHLWNRM2ThsbWp-b5BoHt6GFqgfS-RY2EykdMUpHM7K59FfYaIYNABDgNgktcH0N5V2zG-OFovfEEYR9ltM4LIVoIIhWqTeFSxL-Y6A-v6QGtVigCOHX2zKqFkyB_qYPyvJEiOgJEkB0aY0ZyM_RW"
             alt="Admin" class="w-100 h-100 object-fit-cover">
      </div>
      <div>
        <div class="fw-bold text-primary-brand small">Gerencia Central</div>
        <div class="text-muted-brand" style="font-size:.65rem;letter-spacing:.12em;text-transform:uppercase">Admin Mode</div>
      </div>
    </div>

    <!-- navegación principal -->
    <nav class="flex-grow-1 d-flex flex-column gap-1 px-2">
      ${navItems}
    </nav>

    <!-- acciones inferiores -->
    <div class="mt-auto px-2 pt-4" style="border-top:1px solid rgba(90,65,54,.2)">
      <a href="../login.html" class="sidebar-link text-danger opacity-75">
        <span class="material-symbols-outlined" style="font-size:1.3rem">logout</span>
        <span class="small fw-semibold">Cerrar Sesión</span>
      </a>
    </div>`;

  const el = document.getElementById('admin-sidebar');
  if (el) el.innerHTML = html;
}
