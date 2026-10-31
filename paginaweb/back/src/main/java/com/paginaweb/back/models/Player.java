package com.paginaweb.back.models;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import java.util.UUID;

@Entity
public class Player {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;

    private String name;

    private String country;

    private String description;

    public Player(){
        
    }

    public Player(String name, String country, String description){
        this.name = name;
        this.country = country;
        this.description = description;
    }

    public String getName(){
        return name;
    }

    public String getCountry(){
        return country;
    }

    public String getDescription(){
        return description;
    }
}
