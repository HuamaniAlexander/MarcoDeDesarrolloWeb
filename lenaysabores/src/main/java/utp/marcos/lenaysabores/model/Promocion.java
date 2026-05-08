package utp.marcos.lenaysabores.model;

public class Promocion {
    private String titulo;
    private String descripcion;
    private double precioAntes;
    private double precioAhora;
    private String etiqueta;
    private String imagenUrl;

    public Promocion(String titulo, String descripcion, double precioAntes, double precioAhora, String etiqueta, String imagenUrl) {
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.precioAntes = precioAntes;
        this.precioAhora = precioAhora;
        this.etiqueta = etiqueta;
        this.imagenUrl = imagenUrl;
    }

    public String getTitulo() { return titulo; }
    public String getDescripcion() { return descripcion; }
    public double getPrecioAntes() { return precioAntes; }
    public double getPrecioAhora() { return precioAhora; }
    public String getEtiqueta() { return etiqueta; }
    public String getImagenUrl() { return imagenUrl; }
}
