package com.paginaweb.back;

import com.paginaweb.back.repositories.MatchRepository;
import com.paginaweb.back.repositories.PlayerRepository;
import com.paginaweb.back.repositories.TournamentRepository;
import com.paginaweb.back.Auth.AuthController;
import com.paginaweb.back.Auth.AuthController.LoginRequest;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest(properties = {
	"spring.datasource.url=jdbc:h2:mem:tesys-test;DB_CLOSE_DELAY=-1",
	"spring.datasource.username=sa",
	"spring.datasource.password=",
	"spring.datasource.driver-class-name=org.h2.Driver",
	"spring.jpa.database-platform=org.hibernate.dialect.H2Dialect",
	"spring.jpa.hibernate.ddl-auto=create-drop",
	"app.auth.username=admin",
	"app.auth.password=test-password",
	"app.jwt.secret=dGVzdC1zZWNyZXQtdGhhdC1pcy1sb25nLWVub3VnaC1mb3ItaHMyNTY="
})
class BackApplicationTests {
	@Autowired
	private AuthController authController;

	@Autowired
	private PlayerRepository playerRepository;

	@Autowired
	private TournamentRepository tournamentRepository;

	@Autowired
	private MatchRepository matchRepository;

	@Test
	void contextLoads() {
	}

	@Test
	void loginRequiresConfiguredCredentials() throws Exception {
		var wrongPassword = authController.login(new LoginRequest("admin", "wrong-password"));
		org.assertj.core.api.Assertions.assertThat(wrongPassword.getStatusCode().value()).isEqualTo(401);

		var unknownUser = authController.login(new LoginRequest("other-user", "wrong-password"));
		org.assertj.core.api.Assertions.assertThat(unknownUser.getStatusCode().value()).isEqualTo(401);

		var validCredentials = authController.login(new LoginRequest("admin", "test-password"));
		org.assertj.core.api.Assertions.assertThat(validCredentials.getStatusCode().value()).isEqualTo(200);
		org.assertj.core.api.Assertions.assertThat(validCredentials.getBody()).isInstanceOf(java.util.Map.class);
		var responseBody = (java.util.Map<?, ?>) validCredentials.getBody();
		org.assertj.core.api.Assertions.assertThat(responseBody.get("token")).isInstanceOf(String.class);
		org.assertj.core.api.Assertions.assertThat(responseBody.get("username")).isEqualTo("admin");
	}

	@Test
	void seedsPlayersTournamentsAndMatch() {
		org.assertj.core.api.Assertions.assertThat(playerRepository.count()).isGreaterThanOrEqualTo(12);
		org.assertj.core.api.Assertions.assertThat(tournamentRepository.count()).isGreaterThanOrEqualTo(4);
		org.assertj.core.api.Assertions.assertThat(matchRepository.count()).isGreaterThanOrEqualTo(1);
	}
}
