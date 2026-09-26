public class Tournament {
    @Entity


    @UUID
    @GeneratedValue
    private Long id;

    private String name;

    private String country;

    private String description;

    public Player(){
        
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


