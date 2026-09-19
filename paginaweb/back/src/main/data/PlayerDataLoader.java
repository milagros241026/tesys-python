package com.tennisapi.seed;

import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import com.tennisapi.entity.Player;
import com.tennisapi.repository.PlayerRepository;

@Component
public class PlayerDataLoader implements CommandLineRunner {

    private final PlayerRepository playerRepository;

    public PlayerDataLoader(PlayerRepository playerRepository) {
        this.playerRepository = playerRepository;
    }

    @Override
    public void run(String... args) {
        if (playerRepository.count() > 0) {
            return; // evita duplicar datos en cada reinicio
        }

        playerRepository.save(new Player(
                "Novak Djokovic",
                "Serbia",
                "Ganador de 24 títulos de Grand Slam, ex número 1 del mundo durante más semanas que cualquier otro jugador en la historia del tenis."
        ));

        playerRepository.save(new Player(
                "Carlos Alcaraz",
                "España",
                "Campeón de múltiples Grand Slams, se convirtió en el número 1 masculino más joven de la historia del ranking ATP."
        ));

        playerRepository.save(new Player(
                "Jannik Sinner",
                "Italia",
                "Actual número 1 del mundo, ganador de varios títulos de Grand Slam con un estilo de juego agresivo desde el fondo de la cancha."
        ));

        playerRepository.save(new Player(
                "Rafael Nadal",
                "España",
                "Considerado el mejor jugador de la historia sobre polvo de ladrillo, con 14 títulos en Roland Garros. Se retiró en 2024."
        ));

        playerRepository.save(new Player(
                "Roger Federer",
                "Suiza",
                "Ganador de 20 Grand Slams, reconocido por su elegancia en la cancha. Se retiró del circuito profesional en 2022."
        ));

        playerRepository.save(new Player(
                "Daniil Medvedev",
                "Rusia",
                "Ex número 1 del mundo, campeón del US Open, conocido por su estilo defensivo poco convencional y gran alcance en la cancha."
        ));

        playerRepository.save(new Player(
                "Alexander Zverev",
                "Alemania",
                "Multiple finalista de Grand Slam y campeón del Masters de fin de año, uno de los sacadores más potentes del circuito."
        ));

        playerRepository.save(new Player(
                "Iga Swiatek",
                "Polonia",
                "Ex número 1 del mundo en el circuito femenino, múltiple campeona de Roland Garros con un dominio notable sobre polvo de ladrillo."
        ));

        playerRepository.save(new Player(
                "Aryna Sabalenka",
                "Bielorrusia",
                "Número 1 del ranking WTA, campeona de varios Grand Slams, reconocida por la potencia de su servicio y su derecha."
        ));

        playerRepository.save(new Player(
                "Coco Gauff",
                "Estados Unidos",
                "Campeona del US Open, una de las jugadoras jóvenes más destacadas del circuito WTA."
        ));

        playerRepository.save(new Player(
                "Elena Rybakina",
                "Kazajistán",
                "Campeona de Wimbledon, conocida por uno de los saques más potentes y efectivos del circuito femenino."
        ));

        playerRepository.save(new Player(
                "Jessica Pegula",
                "Estados Unidos",
                "Top 10 del ranking WTA de forma constante, finalista de Grand Slam y una de las jugadoras más regulares del circuito."
        ));
    }
}