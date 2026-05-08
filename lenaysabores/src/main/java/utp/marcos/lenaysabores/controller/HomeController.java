package utp.marcos.lenaysabores.controller;

import utp.marcos.lenaysabores.model.LoginForm;
import utp.marcos.lenaysabores.model.Reserva;
import utp.marcos.lenaysabores.service.CatalogoService;
import utp.marcos.lenaysabores.service.ReservaService;
import jakarta.validation.Valid;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;

@Controller
public class HomeController {
    private final CatalogoService catalogoService;
    private final ReservaService reservaService;

    public HomeController(CatalogoService catalogoService, ReservaService reservaService) {
        this.catalogoService = catalogoService;
        this.reservaService = reservaService;
    }

    @GetMapping("/")
    public String inicio(Model model) {
        model.addAttribute("promociones", catalogoService.obtenerPromociones());
        return "index";
    }

    @GetMapping("/carta")
    public String carta(Model model) {
        model.addAttribute("productos", catalogoService.obtenerProductos());
        return "carta";
    }

    @GetMapping("/promociones")
    public String promociones(Model model) {
        model.addAttribute("promociones", catalogoService.obtenerPromociones());
        return "promociones";
    }

    @GetMapping("/reserva")
    public String reserva(Model model) {
        model.addAttribute("reserva", new Reserva());
        model.addAttribute("reservas", reservaService.listar());
        return "reserva";
    }

    @PostMapping("/reserva")
    public String guardarReserva(@Valid @ModelAttribute("reserva") Reserva reserva,
                                 BindingResult result,
                                 Model model,
                                 RedirectAttributes redirectAttrs) {
        if (result.hasErrors()) {
            model.addAttribute("reservas", reservaService.listar());
            model.addAttribute("mensaje", "Corrige los errores marcados en el formulario.");
            return "reserva";
        }
        reservaService.registrar(reserva);
        redirectAttrs.addFlashAttribute("mensaje", "Reserva registrada correctamente para " + reserva.getNombre());
        return "redirect:/reserva";
    }

    @GetMapping("/login")
    public String login(Model model) {
        model.addAttribute("loginForm", new LoginForm());
        return "login";
    }

    @PostMapping("/login")
    public String procesarLogin(@Valid @ModelAttribute("loginForm") LoginForm loginForm,
                                BindingResult result,
                                Model model) {
        if (result.hasErrors()) {
            return "login";
        }
        model.addAttribute("mensaje", "Inicio de sesion simulado para " + loginForm.getCorreo());
        return "login";
    }
}
