package com.paginaweb.back.repositories;

import java.util.UUID;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.paginaweb.back.models.Match;


@Repository
public interface MatchRepository extends JpaRepository<Match, UUID>{
  
} 

