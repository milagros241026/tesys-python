   import java.util.UUID;
    import org.springframework.data.jpa.repository.JpaRepository;
    import org.springframework.stereotype.Repository;
    import com.paginaweb.back.models.Player;


    @Repository
    public interface TournamentRepository extends JpaRepository<Player, UUID>{
    
    } 