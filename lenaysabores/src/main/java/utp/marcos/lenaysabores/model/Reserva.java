package utp.marcos.lenaysabores.model;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.FutureOrPresent;
import org.springframework.format.annotation.DateTimeFormat;

import java.time.LocalDate;

public class Reserva {
    @NotNull(message = "Selecciona una fecha")
    @FutureOrPresent(message = "La fecha no puede ser anterior a hoy")
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private LocalDate fecha;

    @NotBlank(message = "Selecciona una hora")
    private String hora = "1:00pm";

    @NotNull(message = "Indica el numero de personas")
    @Min(value = 1, message = "Debe ser minimo 1 persona")
    @Max(value = 20, message = "El maximo es 20 personas")
    private Integer personas = 2;

    @NotBlank(message = "Ingresa tu nombre")
    private String nombre;

    @NotBlank(message = "Ingresa tu correo")
    @Email(message = "Ingresa un correo valido")
    private String correo;

    @NotBlank(message = "Ingresa tu telefono")
    @jakarta.validation.constraints.Pattern(regexp = "^\\+?[0-9]{7,15}$", message = "Ingresa un número de teléfono válido")

    private String telefono;
    private String motivo;
    private String comentario;

    public LocalDate getFecha() { return fecha; }
    public void setFecha(LocalDate fecha) { this.fecha = fecha; }
    public String getHora() { return hora; }
    public void setHora(String hora) { this.hora = hora; }
    public Integer getPersonas() { return personas; }
    public void setPersonas(Integer personas) { this.personas = personas; }
    public String getNombre() { return nombre; }
    public void setNombre(String nombre) { this.nombre = nombre; }
    public String getCorreo() { return correo; }
    public void setCorreo(String correo) { this.correo = correo; }
    public String getTelefono() { return telefono; }
    public void setTelefono(String telefono) { this.telefono = telefono; }
    public String getMotivo() { return motivo; }
    public void setMotivo(String motivo) { this.motivo = motivo; }
    public String getComentario() { return comentario; }
    public void setComentario(String comentario) { this.comentario = comentario; }
}
