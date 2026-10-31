package com.paginaweb.back.controllers;

import java.util.List;
import java.util.UUID;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.paginaweb.back.models.Player;
import com.paginaweb.back.repositories.PlayerRepository;

@RestController
@RequestMapping("/api/players")
public class PlayerController {

    private final PlayerRepository playerRepository;

    public PlayerController(PlayerRepository playerRepository) {
        this.playerRepository = playerRepository;
    }

    @GetMapping
    public ResponseEntity<List<Player>> getAllPlayers() {
        return ResponseEntity.ok(playerRepository.findAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Player> getPlayerById(@PathVariable UUID id) {
        return playerRepository.findById(id)
                .map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.notFound().build());
    }
}
