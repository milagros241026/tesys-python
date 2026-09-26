   package com.tennisapi.seed;

import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import com.tennisapi.entity.Tournament;
import com.tennisapi.repository.TournamentRepository;

@Component
public class TournamentDataLoader implements CommandLineRunner {

    private final TournamentRepository tournamentRepository;

    public TournamentDataLoader(TournamentRepository tournamentRepository) {
        this.tournamentRepository = tournamentRepository;
    }

    @Override
    public void run(String... args) {
        if (tournamentRepository.count() > 0) {
            return; // evita duplicar datos en cada reinicio
        }

        tournamentRepository.save(new Tournament(
                "Australian Open",
                "Melbourne Park, Melbourne",
                "Australia",
                "Dura (Plexicushion)",
                "Grand Slam",
                "Primer Grand Slam del año, se disputa en enero sobre superficie dura. Conocido por las altas temperaturas y su techo retráctil en las canchas principales."
        ));

        tournamentRepository.save(new Tournament(
                "Roland Garros",
                "Stade Roland Garros, París",
                "Francia",
                "Polvo de ladrillo (arcilla)",
                "Grand Slam",
                "Se disputa en mayo-junio sobre polvo de ladrillo, la superficie más lenta y física del circuito. Rafael Nadal ganó el título en 14 ocasiones."
        ));

        tournamentRepository.save(new Tournament(
                "Wimbledon",
                "All England Club, Londres",
                "Reino Unido",
                "Césped (hierba)",
                "Grand Slam",
                "El torneo más antiguo del tenis, disputado desde 1877. Se juega en césped en junio-julio y mantiene el tradicional código de vestimenta blanca."
        ));

        tournamentRepository.save(new Tournament(
                "US Open",
                "USTA Billie Jean King National Tennis Center, Nueva York",
                "Estados Unidos",
                "Dura (DecoTurf)",
                "Grand Slam",
                "Último Grand Slam del año, disputado en agosto-septiembre sobre superficie dura en Flushing Meadows, Nueva York."
        ));
    }
}

