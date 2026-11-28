package com.paginaweb.back.data;

import java.time.LocalDate;
import java.util.List;

import org.springframework.boot.CommandLineRunner;
import org.springframework.core.annotation.Order;
import org.springframework.stereotype.Component;

import com.paginaweb.back.models.Match;
import com.paginaweb.back.models.Match.MatchStatus;
import com.paginaweb.back.models.Player;
import com.paginaweb.back.models.Tournament;
import com.paginaweb.back.repositories.MatchRepository;
import com.paginaweb.back.repositories.PlayerRepository;
import com.paginaweb.back.repositories.TournamentRepository;

@Component
@Order(1)
public class InitialDataLoader implements CommandLineRunner {
    private final PlayerRepository playerRepository;
    private final TournamentRepository tournamentRepository;
    private final MatchRepository matchRepository;

    public InitialDataLoader(PlayerRepository playerRepository,
                             TournamentRepository tournamentRepository,
                             MatchRepository matchRepository) {
        this.playerRepository = playerRepository;
        this.tournamentRepository = tournamentRepository;
        this.matchRepository = matchRepository;
    }

    @Override
    public void run(String... args) {
        seedPlayers();
        seedTournaments();
        seedMatches();
    }

    private void seedPlayers() {
        List<Player> players = List.of(
                new Player("Novak Djokovic", "Serbia", "Ganador de 24 títulos de Grand Slam y ex número 1 del mundo."),
                new Player("Carlos Alcaraz", "España", "Campeón de Grand Slam y uno de los números 1 más jóvenes."),
                new Player("Jannik Sinner", "Italia", "Campeón de Grand Slam y ex número 1 del mundo."),
                new Player("Rafael Nadal", "España", "Ganador de 14 títulos de Roland Garros."),
                new Player("Roger Federer", "Suiza", "Ganador de 20 títulos de Grand Slam."),
                new Player("Daniil Medvedev", "Rusia", "Ex número 1 del mundo y campeón del US Open."),
                new Player("Alexander Zverev", "Alemania", "Campeón del Masters de fin de año."),
                new Player("Iga Swiatek", "Polonia", "Múltiple campeona de Roland Garros."),
                new Player("Aryna Sabalenka", "Bielorrusia", "Número 1 del ranking WTA y campeona de Grand Slam."),
                new Player("Coco Gauff", "Estados Unidos", "Campeona del US Open."),
                new Player("Elena Rybakina", "Kazajistán", "Campeona de Wimbledon."),
                new Player("Jessica Pegula", "Estados Unidos", "Finalista de Grand Slam y jugadora del top 10.")
        );

        for (Player player : players) {
            if (!playerRepository.existsByName(player.getName())) {
                playerRepository.save(player);
            }
        }
    }

    private void seedTournaments() {
        List<Tournament> tournaments = List.of(
                new Tournament("Australian Open", "Australia", "Melbourne; Grand Slam sobre cancha dura, se disputa en enero."),
                new Tournament("Roland Garros", "Francia", "París; Grand Slam sobre polvo de ladrillo, se disputa en mayo y junio."),
                new Tournament("Wimbledon", "Reino Unido", "Londres; el torneo más antiguo, se juega sobre césped."),
                new Tournament("US Open", "Estados Unidos", "Nueva York; último Grand Slam del año, sobre cancha dura.")
        );

        for (Tournament tournament : tournaments) {
            if (!tournamentRepository.existsByName(tournament.getName())) {
                tournamentRepository.save(tournament);
            }
        }
    }

    private void seedMatches() {
        if (matchRepository.count() > 0) {
            return;
        }

        Player alcaraz = playerRepository.findByName("Carlos Alcaraz")
                .orElseThrow(() -> new IllegalStateException("Missing seeded player: Carlos Alcaraz"));
        Player djokovic = playerRepository.findByName("Novak Djokovic")
                .orElseThrow(() -> new IllegalStateException("Missing seeded player: Novak Djokovic"));
        Tournament wimbledon = tournamentRepository.findByName("Wimbledon")
                .orElseThrow(() -> new IllegalStateException("Missing seeded tournament: Wimbledon"));

        matchRepository.save(new Match(
                alcaraz,
                djokovic,
                alcaraz,
                wimbledon,
                "Final",
                "6-2, 6-2, 7-6(4)",
                LocalDate.of(2024, 7, 14),
                MatchStatus.COMPLETED
        ));
    }
}
