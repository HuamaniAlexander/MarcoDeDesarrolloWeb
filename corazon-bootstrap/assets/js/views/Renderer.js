// renderer: genera fragmentos html reutilizables para las vistas
const Renderer = {

  // card de producto para la home — usa grid de bootstrap: col-md-6 col-lg-3
  productCard(product) {
    const img = product.image
      ? `<img src="${product.image}" class="card-img-top object-fit-cover" style="height:200px" alt="${product.name}">`
      : `<div class="d-flex align-items-center justify-content-center" style="height:200px;background:var(--color-surface-high)">
           <span class="material-symbols-outlined" style="font-size:3rem;color:var(--color-primary)">restaurant</span>
         </div>`;

    const badge = product.available
      ? '' : `<span class="badge badge-cancelled position-absolute top-0 end-0 m-2">Agotado</span>`;

    return `
      <div class="col-md-6 col-lg-3">
        <div class="card card-tonal h-100 position-relative overflow-hidden">
          ${badge}
          ${img}
          <div class="card-body d-flex flex-column p-3">
            <h6 class="headline fw-black mb-1" style="font-size:.95rem">${product.name}</h6>
            <p class="text-muted-brand small mb-3 flex-grow-1">${product.description}</p>
            <div class="d-flex justify-content-between align-items-center">
              <span class="fw-black text-flame">${product.getFormattedPrice()}</span>
              <button class="btn btn-ember btn-sm rounded-pill px-3 add-to-cart"
                      data-product-id="${product.id}"
                      ${!product.available ? 'disabled' : ''}>
                <span class="material-symbols-outlined" style="font-size:1rem">add</span>
              </button>
            </div>
          </div>
        </div>
      </div>`;
  },

  // fila de item en el carrito
  cartRow(item) {
    return `
      <tr data-item-id="${item.id}">
        <td>
          <div class="d-flex align-items-center gap-3">
            <div class="rounded-3 overflow-hidden flex-shrink-0" style="width:56px;height:56px;background:var(--color-surface-high)">
              ${item.image ? `<img src="${item.image}" class="w-100 h-100 object-fit-cover" alt="${item.name}">` : ''}
            </div>
            <div>
              <div class="fw-bold" style="font-size:.9rem">${item.name}</div>
              <div class="text-muted-brand small">S/ ${item.price.toFixed(2)} c/u</div>
            </div>
          </div>
        </td>
        <td class="align-middle">
          <div class="d-flex align-items-center gap-2">
            <button class="btn btn-ghost btn-sm rounded-circle p-1 qty-decrease" data-id="${item.id}" style="width:30px;height:30px">
              <span class="material-symbols-outlined" style="font-size:.9rem">remove</span>
            </button>
            <span class="fw-bold px-2">${item.qty}</span>
            <button class="btn btn-ghost btn-sm rounded-circle p-1 qty-increase" data-id="${item.id}" style="width:30px;height:30px">
              <span class="material-symbols-outlined" style="font-size:.9rem">add</span>
            </button>
          </div>
        </td>
        <td class="align-middle fw-black text-flame">S/ ${(item.price * item.qty).toFixed(2)}</td>
        <td class="align-middle">
          <button class="btn btn-link text-danger p-0 remove-item" data-id="${item.id}">
            <span class="material-symbols-outlined">delete</span>
          </button>
        </td>
      </tr>`;
  },

  // fila de pedido para la tabla de admin
  orderRow(order) {
    return `
      <tr>
        <td class="fw-bold text-flame">#${order.id}</td>
        <td>${order.customer}</td>
        <td class="text-muted-brand small">${order.items}</td>
        <td class="fw-black">${order.getFormattedTotal()}</td>
        <td><span class="badge ${order.getStatusBadgeClass()} rounded-pill px-3 py-2">${order.getStatusLabel()}</span></td>
        <td>
          <div class="d-flex gap-2">
            <button class="btn btn-ghost btn-sm rounded-3 view-order" data-id="${order.id}">
              <span class="material-symbols-outlined" style="font-size:1rem">visibility</span>
            </button>
            <button class="btn btn-ember btn-sm rounded-3">
              <span class="material-symbols-outlined" style="font-size:1rem">edit</span>
            </button>
          </div>
        </td>
      </tr>`;
  },

  // actualiza el badge del carrito en la navbar
  updateCartBadge(count) {
    document.querySelectorAll('.cart-badge').forEach(el => {
      el.textContent = count;
      el.style.display = count > 0 ? 'inline-flex' : 'none';
    });
  },
};
