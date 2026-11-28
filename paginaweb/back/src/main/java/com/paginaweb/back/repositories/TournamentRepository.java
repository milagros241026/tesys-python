package com.paginaweb.back.repositories;

import java.util.UUID;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.paginaweb.back.models.Tournament;


    @Repository
    public interface TournamentRepository extends JpaRepository<Tournament, UUID>{
        boolean existsByName(String name);

        java.util.Optional<Tournament> findByName(String name);
    } 
