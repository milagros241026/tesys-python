package com.tennisapi.seed;

import java.time.LocalDate;
import java.util.NoSuchElementException;

import org.springframework.boot.CommandLineRunner;
import org.springframework.core.annotation.Order;
import org.springframework.stereotype.Component;

import com.tennisapi.entity.Match;
import com.tennisapi.entity.Match.MatchStatus;
import com.tennisapi.entity.Player;
import com.tennisapi.entity.Tournament;
import com.tennisapi.repository.MatchRepository;
import com.tennisapi.repository.PlayerRepository;
import com.tennisapi.repository.TournamentRepository;

// @Order(3): corre después de PlayerDataLoader y TournamentDataLoader,
// que deben ejecutarse primero para que existan Alcaraz, Djokovic y Wimbledon.
@Component
@Order(3)
public class MatchDataLoader implements CommandLineRunner {

    private final MatchRepository matchRepository;
    private final PlayerRepository playerRepository;
    private final TournamentRepository tournamentRepository;

    public MatchDataLoader(MatchRepository matchRepository,
                            PlayerRepository playerRepository,
                            TournamentRepository tournamentRepository) {
        this.matchRepository = matchRepository;
        this.playerRepository = playerRepository;
        this.tournamentRepository = tournamentRepository;
    }

    @Override
    public void run(String... args) {
        if (matchRepository.count() > 0) {
            return; // evita duplicar datos en cada reinicio
        }

        Player alcaraz = playerRepository.findByName("Carlos Alcaraz")
                .orElseThrow(() -> new NoSuchElementException("Player not seeded: Carlos Alcaraz"));

        Player djokovic = playerRepository.findByName("Novak Djokovic")
                .orElseThrow(() -> new NoSuchElementException("Player not seeded: Novak Djokovic"));

        Tournament wimbledon = tournamentRepository.findByName("Wimbledon")
                .orElseThrow(() -> new NoSuchElementException("Tournament not seeded: Wimbledon"));

        Match match = new Match(
                alcaraz,
                djokovic,
                alcaraz, // ganador
                wimbledon,
                "Final",
                "6-2, 6-2, 7-6(4)",
                LocalDate.of(2024, 7, 14),
                MatchStatus.COMPLETED
        );

        matchRepository.save(match);
    }
}

