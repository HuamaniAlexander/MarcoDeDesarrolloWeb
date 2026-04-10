// cartcontroller: conecta el modelo cart con las vistas de home y carrito
const CartController = {

  init() {
    this.renderCartCount();

    // delegación de eventos: un solo listener para todos los botones "agregar"
    document.addEventListener('click', e => {
      const btn = e.target.closest('.add-to-cart');
      if (btn) this.addItem(parseInt(btn.dataset.productId));

      const dec = e.target.closest('.qty-decrease');
      if (dec) this.changeQty(parseInt(dec.dataset.id), -1);

      const inc = e.target.closest('.qty-increase');
      if (inc) this.changeQty(parseInt(inc.dataset.id), +1);

      const del = e.target.closest('.remove-item');
      if (del) this.removeItem(parseInt(del.dataset.id));
    });

    // reacciona a cambios del carrito (desde cualquier pestaña)
    window.addEventListener('cartUpdated', () => this.renderCartCount());
  },

  addItem(productId) {
    const product = ProductModel.getById(productId);
    if (!product) return;
    Cart.add(product);
    this.renderCartCount();
    this._showAddedFeedback(productId);
  },

  changeQty(productId, delta) {
    const items = Cart.getItems();
    const item  = items.find(i => i.id === productId);
    if (item) Cart.updateQty(productId, item.qty + delta);
    if (typeof this.renderCartPage === 'function') this.renderCartPage();
  },

  removeItem(productId) {
    Cart.remove(productId);
    if (typeof this.renderCartPage === 'function') this.renderCartPage();
  },

  renderCartCount() {
    Renderer.updateCartBadge(Cart.getItemCount());
  },

  // renderiza la tabla y los totales en cart.html
  renderCartPage() {
    const tbody   = document.getElementById('cart-tbody');
    const empty   = document.getElementById('cart-empty');
    const summary = document.getElementById('cart-summary');
    if (!tbody) return;

    const items = Cart.getItems();

    if (items.length === 0) {
      tbody.innerHTML = '';
      if (empty)   empty.classList.remove('d-none');
      if (summary) summary.classList.add('d-none');
      return;
    }

    if (empty)   empty.classList.add('d-none');
    if (summary) summary.classList.remove('d-none');

    tbody.innerHTML = items.map(Renderer.cartRow).join('');

    // actualiza los totales del resumen
    const setEl = (id, val) => { const el = document.getElementById(id); if (el) el.textContent = val; };
    setEl('cart-subtotal', `S/ ${Cart.getSubtotal().toFixed(2)}`);
    setEl('cart-delivery',  `S/ ${Cart.getDelivery().toFixed(2)}`);
    setEl('cart-total',     `S/ ${Cart.getTotal().toFixed(2)}`);
  },

  _showAddedFeedback(productId) {
    const btn = document.querySelector(`.add-to-cart[data-product-id="${productId}"]`);
    if (!btn) return;
    btn.innerHTML = '<span class="material-symbols-outlined" style="font-size:1rem">check</span>';
    setTimeout(() => { btn.innerHTML = '<span class="material-symbols-outlined" style="font-size:1rem">add</span>'; }, 1000);
  },
};
