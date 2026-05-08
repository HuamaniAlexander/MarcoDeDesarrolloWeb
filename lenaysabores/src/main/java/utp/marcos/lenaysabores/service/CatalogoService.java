package utp.marcos.lenaysabores.service;

import utp.marcos.lenaysabores.model.Producto;
import utp.marcos.lenaysabores.model.Promocion;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CatalogoService {

    public List<Producto> obtenerProductos() {
        return List.of(
            new Producto("1/4 Pollo a la brasa", "Con papas crocantes, ensalada y cremas de la casa.", 18.90, "Pollos", "https://delishglobe.com/wp-content/uploads/2025/07/Pollo-a-la-Brasa-Peruvian-Roasted-Chicken-.png"),
            new Producto("1/2 Pollo a la brasa", "Ideal para compartir, servido con papas y ensalada fresca.", 32.90, "Pollos", "https://emofly.b-cdn.net/hbd_exvhac6ayb3ZKT/width:2048/plain/https://storage.googleapis.com/takeapp/media/cm33nnufy00080cmj0hq48xsz.jpg"),
            new Producto("Parrilla personal", "Carne, chorizo, papas doradas y ensalada.", 29.90, "Parrillas", "https://images.unsplash.com/photo-1544025162-d76694265947?w=900&q=85"),
            new Producto("Anticuchos clasicos", "Brochetas tradicionales con papa y choclo.", 22.90, "Piqueos", "https://cdn0.recetasgratis.net/es/posts/3/8/8/anticuchos_peruanos_77883_orig.jpg"),
            new Producto("Combo familiar", "Pollo entero, papas familiares, ensalada y gaseosa.", 69.90, "Combos", "https://www.losgallos.pe/_astro/66da6cfc-0c7c-4362-9f0b-3456d716ac35.CIbmcZ92_Z18xRFC.webp"),
            new Producto("Mostrito clasico", "1/8 de pollo a la brasa con arroz chaufa, papas fritas, ensalada y cremas.", 13.90, "Combos", "https://comedera.com/wp-content/uploads/sites/9/2023/05/mostrito-peruano.jpg?resize=1200,675&quality=80")
        );
    }

    public List<Promocion> obtenerPromociones() {
        return List.of(
            new Promocion("Combo Leñador", "1 pollo entero, papas familiares, ensalada y gaseosa de 1.5L.", 84.90, 69.90, "Mas vendido", "https://imgmedia.buenazo.pe/1200x660/buenazo/original/2023/07/14/64ac3e8c599470217672a906.jpg"),
            new Promocion("Parrilla Duo", "Dos porciones de parrilla con papas, ensalada y cremas.", 74.90, 59.90, "Para compartir", "https://images.unsplash.com/photo-1544025162-d76694265947?w=900&q=85"),
            new Promocion("Almuerzo Familiar", "1/2 pollo, anticuchos, papas, ensalada y bebida.", 62.90, 49.90, "Solo mediodia", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCGkzFwZSl-w8x51n9hqyj1VLYTWxnyB9ofQ&s"),
            new Promocion("Mostro Clasico", "1/4 de pollo a la brasa, arroz chaufa, papas fritas, ensalada y cremas.", 20.90, 14.90, "Nuevo", "https://comedera.com/wp-content/uploads/sites/9/2023/05/mostrito-peruano.jpg?resize=1200,675&quality=80"),
            new Promocion("Combo Anticuchero", "Porcion de anticuchos, papas doradas, choclo, ensalada y salsa especial.", 39.90, 31.90, "Sabor peruano", "https://images.rappi.pe/restaurants_background/peanticucheriadonapochita-1667584613976.jpg"),
            new Promocion("Pack Familiar Parrillero", "Parrilla mixta para 4 personas con papas familiares, ensalada, cremas y gaseosa.", 119.90, 99.90, "Ideal para 4", "https://tofuu.getjusto.com/orioneat-local/resized2/pvQMda4dXLMMq2qy2-x-2400.webp")
        );
    }
}
