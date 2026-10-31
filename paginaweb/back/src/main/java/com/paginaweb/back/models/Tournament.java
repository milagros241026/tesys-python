package com.paginaweb.back.models;

import java.util.UUID;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Tournament {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;

    private String name;

    private String country;

    private String description;

    public Tournament(){
        
    }

    public Tournament(String name, String country, String description){
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


