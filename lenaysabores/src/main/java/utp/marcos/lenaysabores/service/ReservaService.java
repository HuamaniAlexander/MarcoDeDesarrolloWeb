package utp.marcos.lenaysabores.service;

import utp.marcos.lenaysabores.model.Reserva;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

@Service
public class ReservaService {
    private final List<Reserva> reservas = new ArrayList<>();

    public void registrar(Reserva reserva) {
        reservas.add(reserva);
    }

    public List<Reserva> listar() {
        return Collections.unmodifiableList(reservas);
    }
}
