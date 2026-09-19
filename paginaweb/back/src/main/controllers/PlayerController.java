package com.tennisapi.controller;

import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.tennisapi.dto.PlayerDto;
import com.tennisapi.exception.PlayerNotFoundException;
import com.tennisapi.mapper.PlayerMapper;
import com.tennisapi.repository.PlayerRepository;

@RestController
@RequestMapping("/api/players")
public class PlayerController {

    private final PlayerRepository playerRepository;
    private final PlayerMapper playerMapper;

    public PlayerController(PlayerRepository playerRepository, PlayerMapper playerMapper) {
        this.playerRepository = playerRepository;
        this.playerMapper = playerMapper;
    }

    @GetMapping
    public ResponseEntity<List<PlayerDto>> getAllPlayers() {
        List<PlayerDto> players = playerRepository.findAll()
                .stream()
                .map(playerMapper::toDto)
                .collect(Collectors.toList());

        return ResponseEntity.ok(players);
    }

    @GetMapping("/{id}")
    public ResponseEntity<PlayerDto> getPlayerById(@PathVariable UUID id) {
        PlayerDto player = playerRepository.findById(id)
                .map(playerMapper::toDto)
                .orElseThrow(() -> new PlayerNotFoundException(id));

        return ResponseEntity.ok(player);
    }
}