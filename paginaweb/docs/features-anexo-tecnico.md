# Anexo técnico: features de TenisClub

Este anexo acompaña a [features.md](features.md). Cada punto tiene el mismo número que el feature y explica qué archivos tocar, qué crear y qué cuidar. Son guías, no recetas cerradas: si aparece una forma mejor de hacerlo, adelante.

Todas las rutas son relativas a `paginaweb/`.

- **Front:** `front/vite-project-tenis/` (React 19 + TypeScript + Vite; Tailwind y MUI instalados). Se levanta con `npm run dev`.
- **Back:** `back/` (Spring Boot 4.1, Java 25, JPA + PostgreSQL, JWT). Ver `back/README.md` para levantarlo.

**Sobre estilos:** hoy conviven Tailwind (login), MUI (curiosidades, reglas), bloques `<style>` dentro de los componentes y archivos `.css` sueltos. Para lo nuevo conviene elegir un solo enfoque y mantenerlo; `src/leer-mili.md` sugiere Tailwind.

---

## 0. Puesta a punto

### 0.1 El login no valida la contraseña

`back/src/main/java/com/paginaweb/back/Auth/AuthController.java` arma un `User` nuevo con el nombre recibido y le genera un token, sin mirar la contraseña. Además, si el nombre no es `admin`, el token falla en las llamadas siguientes: `JwtAuthFilter` busca ese usuario en el `UserDetailsService` en memoria y no lo encuentra.

**Qué hacer:**
- Inyectar el `AuthenticationManager` (ya hay un bean en `SecurityConfig`) y autenticar con `new UsernamePasswordAuthenticationToken(username, password)`.
- Si lanza `BadCredentialsException` (o cualquier `AuthenticationException`), responder `401` con `{"message": "Usuario o contraseña incorrectos"}`.
- Generar el token con el `UserDetails` que devuelve la autenticación (`(UserDetails) auth.getPrincipal()`).
- En `LoginForm.tsx`, agregar `required` al campo de contraseña.

**Cómo probarlo:** `admin` / `admin` entra; `admin` / `otra` da 401 y el front muestra "Usuario o contraseña incorrectos".

### 0.2 Los datos de ejemplo nunca se cargan

Los seeds en `back/src/data/*.java` están fuera de `src/main/java`, así que Maven no los compila. Además usan el paquete `com.tennisapi.*`, que no existe, y métodos que tampoco existen (`findByName`, la entidad `Match`).

**Qué hacer:**
- Moverlos a `back/src/main/java/com/paginaweb/back/data/` con `package com.paginaweb.back.data;`.
- Corregir los imports a `com.paginaweb.back.models.*` y `com.paginaweb.back.repositories.*`.
- Agregar `Optional<Player> findByName(String name);` en `PlayerRepository` y lo mismo en `TournamentRepository`.
- `TournamentDataLoader` llama a un constructor de 6 parámetros (nombre, sede, país, superficie, categoría, descripción), pero `Tournament` tiene 3. Ampliar la entidad (ver punto 10) o recortar el seed por ahora.
- `MatchDataLoader` depende de la entidad `Match`. Dejarlo afuera hasta el punto 11.
- Poner `@Order(1)` en `PlayerDataLoader` y `@Order(2)` en `TournamentDataLoader`, porque `MatchDataLoader` (`@Order(3)`) necesita que ambos hayan corrido.

### 0.3 El JSON de jugadores no trae el id

`Player` (y `Tournament`) no tienen `getId()`. Jackson serializa por getters, así que `GET /api/players` devuelve los jugadores sin id y el front no puede pedir `/api/players/{id}`. Alcanza con agregar `public UUID getId()` en las dos entidades.

### 0.4 `MatchRepository` está mal armado

`back/src/main/java/com/paginaweb/back/repositories/MatchRepository.java` no declara `package` y extiende `JpaRepository<Player, UUID>`. Conviene borrarlo y recrearlo bien en el punto 11.

### 0.5 Archivo de clave fuera del `.gitignore`

`back/.envtennis-api-key` está commiteado y ninguno de los `.gitignore` lo cubre: el patrón `.env.*` necesita un punto después de `.env`. Está vacío, pero si alguien pega una clave, se sube.

**Qué hacer:**
```bash
git rm --cached paginaweb/back/.envtennis-api-key
```
Borrar el archivo y, para el punto 14, usar una variable de entorno (`TENNIS_API_KEY`) cargada desde un `back/.env`, que ya está ignorado. Agregar un `back/.env.example` con la variable sin valor, como ya hace el front.

### 0.6 (Opcional) Un test que valga

El CI (`.github/workflows/java-25.yml`) solo compila. Un primer test útil: login con contraseña incorrecta → 401 y con la correcta → 200 con token. H2 ya está en el `pom.xml` (scope `runtime`) y puede usarse con un `application.properties` de test, para no depender de Postgres.

---

## 1. Reglas del tenis

El componente ya existe: `src/components/rules.tsx` (export default `Reglas`), con 6 reglas en `src/data/rules.ts`.

- En `App.tsx`, importarlo y envolverlo en `<section id="reglas" className="content-section">` con el mismo `section-heading` que usan las demás secciones.
- Agregar `<a href="#reglas">Reglas</a>` en el `<nav>`.
- `rules.tsx` trae su propio título `h4` con estilos MUI. Sacarlo y usar el encabezado común, así queda igual al resto.

## 2. Cerrar sesión

- La función ya existe: `logout` en `src/login/AuthFetch.ts`. El estilo también: `.logout-button` en `App.css`.
- En `App.tsx`, dentro de `.profile-menu`, agregar un `<button className="logout-button" aria-label="Cerrar sesión">` con el ícono `LogOut` de `lucide-react`.
- `onClick`: `logout()`, `setLoggedIn(false)`, `setUsername('Invitado')`.

**Sesión vencida:** el token dura 1 hora (`expiresInMs` en la respuesta del login), pero `isLoggedIn()` solo mira si hay token.
- En `LoginForm.tsx`, guardar `localStorage.setItem('expiresAt', String(Date.now() + data.expiresInMs))`.
- En `isLoggedIn()`, considerar vencido si `Date.now() > expiresAt` (y limpiar la sesión).
- Cuando `authFetch` recibe un 401 limpia el `localStorage`, pero `App` no se entera. Una opción simple es emitir un evento (`window.dispatchEvent(new Event('sesion-cerrada'))`) y escucharlo en `App` con `useEffect` para hacer `setLoggedIn(false)`.

## 3. Filtrar y ordenar jugadores

En `src/data/players_list.tsx`:
- Estados nuevos: `circuito: 'Todos' | 'ATP' | 'WTA'` y `orden: 'ranking' | 'edad' | 'nombre'`.
- Calcular la lista con `useMemo`: filtrar por nombre y circuito, y después ordenar sobre una copia (`[...lista].sort(...)`, porque `sort` modifica el array original).
- Ojo: con "Todos", ordenar por ranking mezcla el #1 ATP con el #1 WTA. Ordenar primero por circuito y después por ranking, o mostrar el circuito junto al número.
- `calcularEdad` está duplicada en `players_list.tsx` y `PlayerProfile.tsx`. Buen momento para moverla a `src/utils/fechas.ts` y usarla desde los dos.

## 4. Buscador en el glosario

En `src/components/Glossary.tsx` (datos en `src/data/glosario.ts`: `id`, `palabra`, `significado`):
- Estado `busqueda` y filtro sobre `palabra` y `significado`.
- Para ignorar tildes y mayúsculas:
  ```ts
  const normalizar = (s: string) => s.normalize('NFD').replace(/\p{Diacritic}/gu, '').toLowerCase()
  ```
- Mensaje cuando no hay resultados.
- Opcional: botones A–Z con las letras que tienen términos.

## 5. Jugadores favoritos

- Crear un hook `src/hooks/useFavoritos.ts` que devuelva `{ favoritos, esFavorito(id), alternar(id) }` y sincronice con `localStorage` (clave `favoritos`, array de ids en JSON).
- En cada tarjeta, un botón con el ícono `Star` de `lucide-react`, con `aria-pressed={esFavorito(id)}` y `aria-label` "Marcar como favorito".
- Checkbox o toggle "Ver solo favoritos" junto al buscador.
- Guardar los ids como **string**: hoy son números (1, 2, 3...), pero con el punto 9 pasan a ser UUID.
- En el punto 13 esto pasa al servidor; el hook es el único lugar a cambiar.

## 6. Marcador de partido

Lo importante es separar **la lógica** de **la pantalla**.

- `src/utils/marcador.ts`: tipos y una función pura `sumarPunto(estado, jugador): Estado` que devuelve un estado nuevo, sin modificar el anterior.
- Estado sugerido:
  ```ts
  interface EstadoPartido {
    mejorDe: 3 | 5
    puntos: [number, number]        // 0,1,2,3... (se muestran como 0/15/30/40/Ad)
    games: [number, number]         // games del set actual
    sets: Array<[number, number]>   // sets terminados
    enTiebreak: boolean
    saca: 0 | 1
    ganador: 0 | 1 | null
  }
  ```
- Reglas a cubrir:
  - El game se gana con 4 o más puntos y 2 de diferencia. Con 3 a 3 son "iguales"; con un punto más, "ventaja".
  - El set se gana con 6 o más games y 2 de diferencia. Con 6 a 6, tie-break.
  - El tie-break se gana con 7 o más puntos y 2 de diferencia. El set queda 7-6.
  - El saque cambia cada game. En el tie-break cambia después del primer punto y después cada 2.
  - El partido termina cuando alguien gana 2 sets (mejor de 3) o 3 (mejor de 5).
- **Deshacer:** guardar un historial de estados (`EstadoPartido[]`). Deshacer es sacar el último.
- `src/components/Marcador.tsx`: inputs para los nombres, selector de mejor de 3 o de 5, botones de punto, deshacer y reiniciar.
- Muy recomendable: instalar `vitest` (`npm i -D vitest`) y testear `sumarPunto` con casos como "40-40 → ventaja → iguales → game" o "6-6 → tie-break 7-5 → set". Al ser una función pura, se testea sin pantalla.

## 7. Trivia de tenis

- `src/data/trivia.ts`:
  ```ts
  interface Pregunta { pregunta: string; opciones: string[]; correcta: number; explicacion: string }
  ```
  Escribir unas 20 preguntas, con datos verificados (sitios oficiales de ATP, WTA, ITF y los torneos). Las curiosidades, las reglas y el glosario son buena fuente de ideas.
- `src/components/Trivia.tsx` con tres pantallas: inicio → pregunta *n* de 10 → resultado.
- Mezclar las preguntas con Fisher-Yates (no con `sort(() => Math.random() - 0.5)`, que no mezcla parejo) y tomar 10.
- Récord en `localStorage` (clave `trivia-record`). En el punto 13 puede pasar al servidor.

## 8. Calendario y cuenta regresiva

- `src/data/calendario.ts`:
  ```ts
  interface TorneoCalendario { nombre: string; categoria: string; ciudad: string; superficie: string; inicio: string; fin: string } // fechas 'YYYY-MM-DD'
  ```
  Cargar las fechas de la temporada desde los calendarios oficiales de ATP y WTA.
- Días que faltan: `Math.ceil((new Date(inicio).getTime() - Date.now()) / 86_400_000)`.
- Estados: "Próximo" (inicio en el futuro), "En curso" (hoy entre inicio y fin) y "Terminado".
- Cuando esté el punto 10, estos datos pueden venir de `/api/tournaments` (sumando `startDate` y `endDate` a la entidad).

---

## 9. Jugadores desde la base de datos

Requiere la puesta a punto (0.2 y 0.3).

**Back:**
- Ampliar `Player` con lo que hoy tiene el front:
  - `birthDate` (`LocalDate`)
  - `hand` (`String` o enum)
  - `ranking` (`Integer`)
  - `circuit` (enum `ATP` / `WTA`, con `@Enumerated(EnumType.STRING)`)
  - `imageUrl`
  - `photoAuthor`, `photoLicense`, `photoSource` (o un `@Embeddable Photo`)

  Agregar getters para todos.
- Actualizar `PlayerDataLoader` con los 6 jugadores del front y sus datos.
- Como `ddl-auto=update` no siempre adapta bien columnas existentes, lo más simple en desarrollo es resetear la base: `docker compose down -v` y `docker compose up -d`. **Borra todos los datos de la base local.**
- `GET /api/players` ya existe y requiere token.

**Front:**
- `src/services/players.ts` con `getPlayers()`, que use `authFetch('/players')`.
- Una función `aJugador(dto)` que traduzca los campos del back (inglés) al tipo `Jugador` del front (español). Así el resto del componente casi no cambia.
- En `Jugadores`: estados `cargando`, `error` y `jugadores`, con un `useEffect` que llame a `getPlayers()`.
- Los ids pasan a ser UUID (`string`): cambiar el tipo de `jugadorAId` y `jugadorBId` y sacar los `Number(...)` de los `<select>`.
- Indicador de carga: `components/buttons/loading.tsx` es una demo de MUI (un botón de carrito), no sirve para esto. Usar `CircularProgress` o `Skeleton` de MUI.
- Las imágenes pueden seguir en `public/jugadores/`; en la base se guarda la ruta (`/jugadores/alcaraz.jpg`).
- CORS ya permite `http://localhost:5173` (`config/CorsConfig.java`).

## 10. Torneos desde la base de datos

**Back:**
- Ampliar `Tournament` con `venue`, `surface` y `category` (enum: `GRAND_SLAM`, `MASTERS_1000`, `ATP_500`, …), además de `city` y `months` (o `startDate`/`endDate` si se encara el punto 8). Con eso, el constructor de 6 parámetros que ya usa `TournamentDataLoader` funciona.
- `TournamentController` con:
  - `GET /api/tournaments`
  - `GET /api/tournaments?category=GRAND_SLAM` (con `List<Tournament> findByCategory(Category c)` en el repositorio).

**Front:**
- En `src/components/TournamentGuide.tsx`, reemplazar el array `grandSlams` por la respuesta de la API, con el mismo patrón que el punto 9.
- Los colores de cada torneo (`accents`) son de presentación: se quedan en el front.

## 11. Cara a cara con partidos reales

Requiere los puntos 9 y 10.

**Entidad `Match`** (`models/Match.java`), que coincide con lo que ya espera `MatchDataLoader`:
```java
@Entity
@Table(name = "matches")   // evita conflictos con la palabra MATCH en SQL
public class Match {
    @Id @GeneratedValue(strategy = GenerationType.UUID) private UUID id;
    @ManyToOne(optional = false) private Player player1;
    @ManyToOne(optional = false) private Player player2;
    @ManyToOne private Player winner;
    @ManyToOne(optional = false) private Tournament tournament;
    private String round;       // "Final", "Semifinal", ...
    private String score;       // "6-2, 6-2, 7-6(4)"
    private LocalDate date;
    @Enumerated(EnumType.STRING) private MatchStatus status;
    public enum MatchStatus { SCHEDULED, IN_PROGRESS, COMPLETED, RETIRED, WALKOVER }
    // constructor (player1, player2, winner, tournament, round, score, date, status) + getters
}
```

**Repositorio:**
```java
public interface MatchRepository extends JpaRepository<Match, UUID> {
    @Query("""
        select m from Match m
        where (m.player1.id = :a and m.player2.id = :b)
           or (m.player1.id = :b and m.player2.id = :a)
        order by m.date desc""")
    List<Match> findHeadToHead(UUID a, UUID b);
}
```

**Endpoint:** `GET /api/matches/h2h?playerA={uuid}&playerB={uuid}` devuelve:
```json
{ "winsA": 3, "winsB": 2, "matches": [ { "date": "2024-07-14", "tournament": "Wimbledon", "round": "Final", "surface": "Césped", "winner": "Carlos Alcaraz", "score": "6-2, 6-2, 7-6(4)" } ] }
```
Devolver un DTO (`record`) y no la entidad: así no se serializan jugadores y torneos enteros anidados.

**Seed:** mover `MatchDataLoader` a `src/main/java/.../data/` y sumar partidos reales entre los jugadores cargados, verificados en los sitios de ATP y WTA.

**Front:**
- En `players_list.tsx`, reemplazar el `useMemo` de `enfrentamientos` (que hoy inventa resultados con una "semilla") por un `fetch` que se dispara al cambiar `jugadorAId` o `jugadorBId`.
- Estado vacío: "Todavía no se enfrentaron".
- Sacar el párrafo `.h2h-note` que dice que son resultados de ejemplo.

## 12. Panel de administración

Requiere el punto 9.

**Back:**
- Roles: en `SecurityConfig`, darle al usuario `admin` el rol `ADMIN` (`.roles("ADMIN")`).
- En `PlayerController`:
  - `POST /api/players` → `201 Created` con header `Location`
  - `PUT /api/players/{id}` → `200` o `404`
  - `DELETE /api/players/{id}` → `204` o `404`
- Proteger con `@PreAuthorize("hasRole('ADMIN')")` (y `@EnableMethodSecurity` en `SecurityConfig`) o con reglas en el `filterChain`, por ejemplo `.requestMatchers(HttpMethod.POST, "/api/players/**").hasRole("ADMIN")`.
- Validación: `spring-boot-starter-validation` ya está. Usar un `record PlayerRequest(@NotBlank String name, @Min(1) Integer ranking, ...)` con `@Valid` en el controller y un `@RestControllerAdvice` que devuelva los errores como `400` con mensajes claros.

**Front:**
- Sumar `roles` a la respuesta del login (o leerlo del token) y guardarlo junto al `username`.
- Mostrar "Administrar" en el menú solo si el usuario es `ADMIN`. Esto es solo comodidad: la seguridad real está en el back.
- Para la tabla, `@mui/x-data-grid` ya está instalado y no se usa: es ideal para listar jugadores con editar y borrar.
- Formulario con validación en el cliente (campos obligatorios, ranking positivo), pero mostrar también los errores que devuelva el back.
- Confirmar antes de borrar con un diálogo propio (`Dialog` de MUI), no con `window.confirm`.

## 13. Cuentas de usuario

Requiere 0.1. Conviene tener el punto 5 hecho.

**Back:**
- Entidad `AppUser` con `@Table(name = "app_users")`, porque `user` es palabra reservada en PostgreSQL: `id`, `username` (único), `passwordHash`, `role` y `createdAt`.
- `UserRepository.findByUsername(String)`.
- Un `UserDetailsService` propio que lea de la base y reemplace el `InMemoryUserDetailsManager` de `SecurityConfig`.
- `POST /api/auth/register`:
  - Validar usuario y contraseña (largo mínimo).
  - `409 Conflict` si el usuario ya existe.
  - Guardar `passwordEncoder.encode(password)` (el `BCryptPasswordEncoder` ya está configurado).
- Seed del admin desde `APP_USER` / `APP_PASSWORD`, como hoy.
- Favoritos: `@ManyToMany Set<Player> favorites` en `AppUser` (o una entidad `Favorite`), con:
  - `GET /api/me/favorites`
  - `PUT /api/me/favorites/{playerId}`
  - `DELETE /api/me/favorites/{playerId}`

  El usuario se obtiene del token, nunca de un parámetro.
- Nunca devolver `passwordHash`: usar DTOs.

**Front:**
- `RegisterForm.tsx` y un link "Crear cuenta" en la pantalla de login.
- Cambiar `useFavoritos` (punto 5) para que use la API. En el primer login, subir los favoritos que estaban en `localStorage`.

## 14. Rankings que se actualizan solos

Requiere el punto 9 y el 0.5.

**Proveedor:** hay varias APIs de datos de tenis, la mayoría con plan gratuito limitado. Revisar condiciones de uso, límite de pedidos y si permiten mostrar los datos públicamente.

**La clave nunca va al front.** Cualquier variable `VITE_*` termina dentro del JavaScript que descarga el navegador, o sea que es pública. La clave vive solo en el back:
```properties
tennis.api.key=${TENNIS_API_KEY:}
```

**Back:**
- `RankingService` que llame al proveedor con `RestClient` y mapee la respuesta a un DTO propio.
- Guardar los rankings en la base (tabla con `updatedAt`) y refrescarlos con `@Scheduled(cron = "0 0 6 * * *")` (requiere `@EnableScheduling`). Así no se llama al proveedor en cada visita y, si falla, quedan los últimos datos.
- Actualizar `Player.ranking` con los datos nuevos.
- `GET /api/rankings?circuit=ATP&limit=20` devuelve `{ "updatedAt": "...", "entries": [...] }`.

**Front:**
- Reemplazar el texto fijo "actualización: 9 de noviembre de 2026" de `players_list.tsx` por la fecha `updatedAt` que devuelve la API.
- Hacer lo mismo con la nota del cara a cara, que también menciona esa fecha.
