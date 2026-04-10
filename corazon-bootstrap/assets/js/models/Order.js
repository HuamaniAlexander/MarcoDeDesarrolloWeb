// modelo order: pedidos del usuario y del panel admin
class Order {
  constructor({ id, date, items, total, status, customer, address }) {
    this.id       = id;
    this.date     = date;
    this.items    = items;
    this.total    = total;
    this.status   = status;   // 'pending' | 'delivered' | 'cancelled' | 'active'
    this.customer = customer;
    this.address  = address;
  }

  getFormattedTotal() { return `S/ ${this.total.toFixed(2)}`; }

  // clases de badge según estado — se inyectan directamente en el html
  getStatusBadgeClass() {
    const map = { pending: 'badge-pending', delivered: 'badge-delivered', cancelled: 'badge-cancelled', active: 'badge-active' };
    return map[this.status] || 'badge-secondary';
  }

  getStatusLabel() {
    const map = { pending: 'En preparación', delivered: 'Entregado', cancelled: 'Cancelado', active: 'En camino' };
    return map[this.status] || this.status;
  }
}

// datos mock de pedidos
const ORDERS_DATA = [
  { id: 8821, date: '12 de Octubre, 2023', items: '1x Pollo Familiar, 1x Papas Nativas, 2x Chicha 1L', total: 145.00, status: 'delivered', customer: 'Carlos Mendoza', address: 'Av. La Marina 320, San Isidro' },
  { id: 8754, date: '05 de Octubre, 2023', items: '1x Combo Personal Brasa, 1x Ensalada de la Casa',   total: 68.50,  status: 'delivered', customer: 'María Torres',   address: 'Jr. Moquegua 150, Miraflores' },
  { id: 8901, date: '15 de Octubre, 2023', items: '2x 1/2 Pollo a la Brasa, 2x Chicha Morada 1L',     total: 83.80,  status: 'active',    customer: 'Ana Rivas',      address: 'Calle Las Flores 210, Surco' },
  { id: 8899, date: '14 de Octubre, 2023', items: '1x Combo Familiar Corazón',                         total: 89.90,  status: 'pending',   customer: 'Luis Quispe',    address: 'Av. Brasil 890, Jesús María' },
  { id: 8850, date: '10 de Octubre, 2023', items: '3x Anticuchos, 1x Inca Kola 1.5L',                  total: 63.00,  status: 'cancelled', customer: 'Rosa Flores',    address: 'Av. Arequipa 1100, Lince' },
];

const OrderModel = {
  getAll()       { return ORDERS_DATA.map(o => new Order(o)); },
  getById(id)    { const o = ORDERS_DATA.find(o => o.id === id); return o ? new Order(o) : null; },
  getByStatus(s) { return ORDERS_DATA.filter(o => o.status === s).map(o => new Order(o)); },
};
