package utp.marcos.lenaysabores.model;

public class Producto {
    private String nombre;
    private String descripcion;
    private double precio;
    private String categoria;
    private String imagenUrl;

    public Producto(String nombre, String descripcion, double precio, String categoria, String imagenUrl) {
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.precio = precio;
        this.categoria = categoria;
        this.imagenUrl = imagenUrl;
    }

    public String getNombre() { return nombre; }
    public String getDescripcion() { return descripcion; }
    public double getPrecio() { return precio; }
    public String getCategoria() { return categoria; }
    public String getImagenUrl() { return imagenUrl; }
}
