// modelo product: representa un producto del menú con sus propiedades
class Product {
  constructor({ id, name, description, price, category, image, available = true, stock = 0 }) {
    this.id          = id;
    this.name        = name;
    this.description = description;
    this.price       = price;
    this.category    = category;
    this.image       = image;
    this.available   = available;
    this.stock       = stock;
  }

  // formatea el precio en soles peruanos
  getFormattedPrice() {
    return `S/ ${this.price.toFixed(2)}`;
  }
}

// datos mock del catálogo
const PRODUCTS_DATA = [
  { id: 1, name: 'Pollo Entero a la Brasa', description: 'Marinado 24h con especias ancestrales', price: 49.90, category: 'pollo', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA648JPjR54DJqUv1GntWyryFaUeknNEnpm28cwoiwe0SR8W89VuD1E0fdE_y-pF_WT2Z6COcq8IMP__dp-OXWjPb_tpUA5eChgQiV7z9BBBcz_Vxp4sABFAJxK9zt-0TDFLZG8Oe_L5K4OVitAJd08mACHD2BnvPkSa_gH5DxxO6G4yDSB7iOdOC5C9xRGbfOsKxuxkigcgP27ggSkFG7kyAKBm7Pfg_JdsLJkzCoFu-pWfReZzSoi90HHjblfYpBMit8xyDKHCdMK', available: true, stock: 30 },
  { id: 2, name: '1/2 Pollo a la Brasa',   description: 'Porción individual con papas y ensalada', price: 29.90, category: 'pollo', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA648JPjR54DJqUv1GntWyryFaUeknNEnpm28cwoiwe0SR8W89VuD1E0fdE_y-pF_WT2Z6COcq8IMP__dp-OXWjPb_tpUA5eChgQiV7z9BBBcz_Vxp4sABFAJxK9zt-0TDFLZG8Oe_L5K4OVitAJd08mACHD2BnvPkSa_gH5DxxO6G4yDSB7iOdOC5C9xRGbfOsKxuxkigcgP27ggSkFG7kyAKBm7Pfg_JdsLJkzCoFu-pWfReZzSoi90HHjblfYpBMit8xyDKHCdMK', available: true, stock: 50 },
  { id: 3, name: 'Combo Familiar Corazón', description: '1 pollo + papas + ensalada + chicha 1.5L', price: 89.90, category: 'combos', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCF66hc7dm8LiMzRTMbtk-n--i7_QzVHJ9Ga-SMOEOmUu42XSjDM9GvXAmstNYaPrCXuD82D8Diqe2NPzgPB9wLMeHjyECYgmIkQHZU2QbCmf0Cjd7WI39Ld-kVfrfdNZNS8TuKBBPVxoOBx0JsWwzr2a456N_-zh938_Kxl0tgB32e_vQkugwZBLwNoy_CgLvmrEx-me3d8BSvwrJAvTZZyXHknBq5KsVPwAqyAn865Yg76GhEZia94pPBCQNR1KQhn2T4O6MXQOg4', available: true, stock: 20 },
  { id: 4, name: 'Combo Personal Brasa',   description: '1/4 pollo + papas + gaseosa personal',   price: 24.90, category: 'combos', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCF66hc7dm8LiMzRTMbtk-n--i7_QzVHJ9Ga-SMOEOmUu42XSjDM9GvXAmstNYaPrCXuD82D8Diqe2NPzgPB9wLMeHjyECYgmIkQHZU2QbCmf0Cjd7WI39Ld-kVfrfdNZNS8TuKBBPVxoOBx0JsWwzr2a456N_-zh938_Kxl0tgB32e_vQkugwZBLwNoy_CgLvmrEx-me3d8BSvwrJAvTZZyXHknBq5KsVPwAqyAn865Yg76GhEZia94pPBCQNR1KQhn2T4O6MXQOg4', available: true, stock: 40 },
  { id: 5, name: 'Chicha Morada 1L',        description: 'Preparada artesanalmente cada día',       price: 12.00, category: 'bebidas', image: '', available: true, stock: 80 },
  { id: 6, name: 'Inca Kola 1.5L',          description: 'La bebida de sabor nacional',             price: 9.00,  category: 'bebidas', image: '', available: true, stock: 60 },
  { id: 7, name: 'Anticuchos de Corazón',   description: 'Brochetas de corazón marinado al carbón', price: 18.00, category: 'brasa',   image: '', available: true, stock: 25 },
  { id: 8, name: 'Chaufa de Arroz',         description: 'Arroz frito con verduras y sillao',       price: 15.00, category: 'brasa',   image: '', available: false, stock: 0  },
];

// repositorio de productos: centraliza el acceso a los datos
const ProductModel = {
  getAll()             { return PRODUCTS_DATA.map(p => new Product(p)); },
  getById(id)          { const p = PRODUCTS_DATA.find(p => p.id === id); return p ? new Product(p) : null; },
  getByCategory(cat)   { return PRODUCTS_DATA.filter(p => p.category === cat).map(p => new Product(p)); },
  getAvailable()       { return PRODUCTS_DATA.filter(p => p.available).map(p => new Product(p)); },
};
