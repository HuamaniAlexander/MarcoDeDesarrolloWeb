# Leña y Sabores — Frontend MVC

## Estructura del proyecto
```
lena-y-sabores/
├── index.html              ← pagina de inicio (root)
├── css/
│   └── estilos.css         ← estilos personalizados (complementa Bootstrap)
├── js/
│   └── main.js             ← interacciones basicas del frontend
├── vista/
│   ├── index.html          ← inicio (version vista/)
│   ├── carta.html          ← pagina de la carta / menu
│   ├── promociones.html    ← pagina de promociones
│   ├── login.html          ← login y registro
│   └── reserva.html        ← reserva de mesa
└── assets/
    └── (imagenes locales si se requieren)
```

## Paginas incluidas
1. **index.html** — Inicio con hero carousel, delivery banner, categorias, promos, banner corporativo, app section
2. **carta.html** — Carta del menu con filtros por categoria y grilla de productos
3. **promociones.html** — Pagina completa de promociones y combos
4. **login.html** — Login + creacion de cuenta en split view
5. **reserva.html** — Formulario multi-paso para reservar mesa

## Tecnologias
- Bootstrap 5.3 via CDN
- Bootstrap Icons
- Google Fonts: Playfair Display + DM Sans
- Vanilla JS (sin dependencias adicionales)

## Paleta de colores
- Rojo: #E30613
- Rojo oscuro: #b5040f
- Amarillo/dorado: #F5A623
- Negro: #1A1A1A
- Blanco: #FFFFFF

## Para integrar al backend
- Los forms usan id para facil seleccion: #login-form, #reserva-form
- Los botones de carrito llaman agregarAlCarrito(nombre, precio)
- Las clases son semanticas y reutilizables
