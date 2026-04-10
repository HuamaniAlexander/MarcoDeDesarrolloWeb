// modelo cart: maneja el estado del carrito en localStorage
const Cart = {
  STORAGE_KEY: 'corazon_cart',

  // recupera los items del carrito desde localStorage
  getItems() {
    try { return JSON.parse(localStorage.getItem(this.STORAGE_KEY)) || []; }
    catch { return []; }
  },

  save(items) {
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(items));
    // evento custom para que los controllers reaccionen al cambio
    window.dispatchEvent(new CustomEvent('cartUpdated', { detail: { items } }));
  },

  add(product, qty = 1) {
    const items  = this.getItems();
    const exists = items.find(i => i.id === product.id);
    if (exists) {
      exists.qty += qty;
    } else {
      items.push({ id: product.id, name: product.name, price: product.price, image: product.image, qty });
    }
    this.save(items);
  },

  remove(productId) {
    this.save(this.getItems().filter(i => i.id !== productId));
  },

  updateQty(productId, qty) {
    if (qty <= 0) return this.remove(productId);
    const items = this.getItems();
    const item  = items.find(i => i.id === productId);
    if (item) { item.qty = qty; this.save(items); }
  },

  clear() { this.save([]); },

  // totales calculados
  getSubtotal()  { return this.getItems().reduce((sum, i) => sum + i.price * i.qty, 0); },
  getDelivery()  { return this.getSubtotal() > 0 ? 5.00 : 0; },
  getTotal()     { return this.getSubtotal() + this.getDelivery(); },
  getItemCount() { return this.getItems().reduce((sum, i) => sum + i.qty, 0); },
};
