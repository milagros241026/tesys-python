package com.paginaweb.back.repositories;

import java.util.UUID;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.paginaweb.back.models.Player;


@Repository
public interface PlayerRepository extends JpaRepository<Player, UUID>{
    boolean existsByName(String name);

    java.util.Optional<Player> findByName(String name);
} 
