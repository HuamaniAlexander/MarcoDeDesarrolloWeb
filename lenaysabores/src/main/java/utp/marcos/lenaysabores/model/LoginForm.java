package utp.marcos.lenaysabores.model;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;

public class LoginForm {
    @NotBlank(message = "Ingresa tu correo")
    @Email(message = "Ingresa un correo valido")
    private String correo;

    @NotBlank(message = "Ingresa tu contraseña")
    private String password;

    public String getCorreo() { return correo; }
    public void setCorreo(String correo) { this.correo = correo; }
    public String getPassword() { return password; }
    public void setPassword(String password) { this.password = password; }
}
