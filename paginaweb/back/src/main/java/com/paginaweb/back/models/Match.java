package com.paginaweb.back.models;

import java.time.LocalDate;
import java.util.UUID;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "matches")
public class Match {
    public enum MatchStatus {
        SCHEDULED,
        COMPLETED
    }

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;

    @ManyToOne(optional = false)
    @JoinColumn(name = "player_one_id", nullable = false)
    private Player playerOne;

    @ManyToOne(optional = false)
    @JoinColumn(name = "player_two_id", nullable = false)
    private Player playerTwo;

    @ManyToOne
    @JoinColumn(name = "winner_id")
    private Player winner;

    @ManyToOne(optional = false)
    @JoinColumn(name = "tournament_id", nullable = false)
    private Tournament tournament;

    @Column(nullable = false)
    private String round;

    @Column(nullable = false)
    private String score;

    @Column(nullable = false)
    private LocalDate matchDate;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private MatchStatus status;

    protected Match() {
    }

    public Match(Player playerOne, Player playerTwo, Player winner, Tournament tournament,
                 String round, String score, LocalDate matchDate, MatchStatus status) {
        this.playerOne = playerOne;
        this.playerTwo = playerTwo;
        this.winner = winner;
        this.tournament = tournament;
        this.round = round;
        this.score = score;
        this.matchDate = matchDate;
        this.status = status;
    }
}
