import org.hibernate.validator.constraints.UUID;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;

@Entity
public class Player {

    @UUID
    @GeneratedValue
    private Long id;

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
