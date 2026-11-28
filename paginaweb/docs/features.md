# Ideas de features para TenisClub

Acá hay 14 ideas para que TenisClub siga creciendo, ordenadas de más simples a más ambiciosas. Cada una explica qué es, por qué mejora la página y cómo se ve cuando está terminada. No hace falta hacerlas todas ni en este orden: al final hay un camino sugerido.

Los detalles de cómo programar cada una están en el **[anexo técnico](features-anexo-tecnico.md)**, con la misma numeración.

**Dificultad:** 🟢 baja · 🟡 media · 🔴 alta

---

## Cómo está la página hoy

TenisClub ya tiene bastante contenido: curiosidades, guía de torneos, copas internacionales, tenis argentino, promesas, glosario y una sección de jugadores con buscador, perfil y comparación cara a cara. Para entrar hay que iniciar sesión.

Casi toda esa información está **escrita adentro de la página**. El servidor y la base de datos existen, pero hoy solo se usan para el login. Varias de las ideas de abajo apuntan a que la información venga del servidor, así se puede actualizar sin tocar la página.

## Antes de empezar: puesta a punto

Hay tres cosas para arreglar antes de sumar features (o como primeras tareas):

- **El login deja entrar con cualquier usuario y contraseña.** Nunca se verifica la clave.
- **La base de datos arranca vacía.** Hay datos de ejemplo (jugadores, torneos y un partido) preparados para cargarse solos, pero nunca se cargan.
- **Un archivo pensado para guardar una clave secreta se subiría al repositorio.** Hoy está vacío, pero si alguien pega una clave ahí, queda pública en el repo.

Detalle en el anexo técnico, punto 0.

---

## Resumen

| # | Feature | Dificultad | Conviene tener antes |
|---|---|---|---|
| 1 | Reglas del tenis | 🟢 | — |
| 2 | Cerrar sesión | 🟢 | — |
| 3 | Filtrar y ordenar jugadores | 🟢 | — |
| 4 | Buscador en el glosario | 🟢 | — |
| 5 | Jugadores favoritos | 🟢 | — |
| 6 | Marcador de partido | 🟡 | 1 (ayuda conocer las reglas) |
| 7 | Trivia de tenis | 🟡 | — |
| 8 | Calendario y cuenta regresiva | 🟡 | — |
| 9 | Jugadores desde la base de datos | 🟡 | Puesta a punto |
| 10 | Torneos desde la base de datos | 🟡 | 9 |
| 11 | Cara a cara con partidos reales | 🔴 | 9, 10 |
| 12 | Panel de administración | 🔴 | 9 |
| 13 | Cuentas de usuario | 🔴 | Puesta a punto, 5 |
| 14 | Rankings que se actualizan solos | 🔴 | 9 |

---

## Para arrancar

### 1. Reglas del tenis 🟢

**Qué es:** una sección que explica las reglas básicas: puntuación, sets, saque, tie-break, etc.

**Por qué suma:** la página tiene glosario y curiosidades, pero no explica cómo se juega. Es lo primero que busca alguien que recién se interesa por el tenis.

**Buena noticia:** la sección ya está hecha, solo que no aparece en la página. Hay que sumarla y agregarla al menú.

**Terminado cuando:**
- En el menú de arriba aparece "Reglas" y lleva a la sección.
- Cada regla se puede abrir para leer la explicación.
- Se ve con el mismo estilo que el resto de las secciones.

### 2. Cerrar sesión 🟢

**Qué es:** un botón en la barra de arriba, junto a la inicial del usuario, para salir de la cuenta.

**Por qué suma:** hoy, una vez que entrás, no hay forma de salir. Además, la sesión vence a la hora pero la página no se da cuenta.

**Terminado cuando:**
- Al tocar el botón, vuelve la pantalla de login.
- Al recargar la página después de salir, sigue pidiendo login.
- Si la sesión venció, la página vuelve al login sola en lugar de quedar a medias.

### 3. Filtrar y ordenar jugadores 🟢

**Qué es:** además de buscar por nombre, poder ver solo ATP o solo WTA y ordenar por ranking, edad o nombre.

**Por qué suma:** con 6 jugadores alcanza con buscar, pero cuando haya más va a hacer falta. También permite responder preguntas rápidas como "¿quién es el más joven?".

**Terminado cuando:**
- Hay un selector "Todos / ATP / WTA".
- Hay un selector "Ordenar por: ranking / edad / nombre".
- El buscador, el filtro y el orden funcionan juntos.
- Si nada coincide, aparece el mensaje "No se encontraron jugadores".

### 4. Buscador en el glosario 🟢

**Qué es:** un campo para buscar términos del glosario ("deuce", "break", "ace"...).

**Por qué suma:** el glosario va a crecer y nadie quiere recorrer todas las tarjetas para encontrar una palabra.

**Terminado cuando:**
- Al escribir, solo quedan las tarjetas que coinciden con la palabra o con su explicación.
- Busca igual con o sin tildes y con mayúsculas o minúsculas.
- Si no hay resultados, lo dice.

### 5. Jugadores favoritos ⭐ 🟢

**Qué es:** una estrella en cada tarjeta de jugador para marcarlo como favorito.

**Por qué suma:** hace la página más personal y es la base para cosas futuras, como mostrar primero a tus jugadores o avisarte sobre ellos.

**Terminado cuando:**
- Tocar la estrella marca o desmarca al jugador.
- Al recargar la página, los favoritos siguen marcados.
- Hay una opción "Ver solo favoritos".

---

## Para pensar un poco más

### 6. Marcador de partido 🎾 🟡

**Qué es:** un marcador interactivo para llevar el resultado de un partido: un botón "punto para A" y otro "punto para B", y el marcador avanza siguiendo las reglas reales (15, 30, 40, iguales, ventaja, games, sets y tie-break).

**Por qué suma:** es la mejor forma de entender cómo se cuenta en tenis, y sirve de verdad para anotar un partido entre amigos. Es el feature más entretenido de programar porque las reglas tienen muchos casos especiales.

**Terminado cuando:**
- Se pueden escribir los nombres de los dos jugadores.
- Se puede elegir partido al mejor de 3 o de 5 sets.
- El marcador muestra puntos, games y sets, y marca quién saca.
- Funcionan bien los iguales, la ventaja y el tie-break al llegar a 6-6.
- Hay un botón "deshacer" por si se anotó mal un punto.
- Al terminar, muestra al ganador con el resultado completo (por ejemplo "6-4, 3-6, 7-6").

### 7. Trivia de tenis 🧠 🟡

**Qué es:** un juego de 10 preguntas de opción múltiple sobre historia, reglas y jugadores.

**Por qué suma:** convierte el contenido de la página en algo para jugar y compartir. Las curiosidades, las reglas y el glosario ya dan material para muchas preguntas.

**Terminado cuando:**
- Se muestra una pregunta por vez, con 4 opciones.
- Al responder, indica si estuvo bien y da una explicación corta.
- Al final muestra el puntaje y el récord personal.
- Las preguntas salen en distinto orden cada vez.

### 8. Calendario y cuenta regresiva 📅 🟡

**Qué es:** una sección con los próximos torneos importantes y una cuenta regresiva al próximo Grand Slam ("Faltan 45 días para el Australian Open").

**Por qué suma:** hoy la página cuenta cuándo se juega cada torneo de forma general ("Enero", "Mayo - Junio"), pero no qué viene ahora. Tener fechas da un motivo para volver a entrar.

**Terminado cuando:**
- Se ven los próximos torneos ordenados por fecha, con ciudad y superficie.
- Arriba hay una cuenta regresiva al próximo Grand Slam.
- Si un torneo se está jugando, aparece como "En curso".
- Los torneos que ya pasaron no aparecen (o aparecen aparte).

---

## Conectar la página con el servidor

### 9. Jugadores desde la base de datos 🟡

**Qué es:** que la lista de jugadores venga del servidor en lugar de estar escrita dentro de la página.

**Por qué suma:** es el cambio que más destraba. Permite actualizar rankings o sumar jugadores sin cambiar la página, y es necesario para el cara a cara real, el panel de administración y las cuentas de usuario. Desde afuera la página se ve igual, pero por dentro queda mucho mejor armada.

**Terminado cuando:**
- Los jugadores que se ven salen de la base de datos.
- Mientras cargan, aparece un indicador de carga.
- Si el servidor no responde, aparece un mensaje amable en vez de una página rota.
- El buscador, el perfil y el cara a cara siguen funcionando igual.

### 10. Torneos desde la base de datos 🟡

**Qué es:** lo mismo que el punto 9, pero para los Grand Slams y los torneos.

**Por qué suma:** deja lista la información de torneos para el calendario (8) y para los partidos del cara a cara (11).

**Terminado cuando:**
- Las tarjetas de los Grand Slams salen del servidor, con sede, superficie y época del año.
- Se ven igual que ahora, con su color de cada torneo.

### 11. Cara a cara con partidos reales 🆚 🔴

**Qué es:** que la comparación "Head to Head" muestre los partidos que esos dos jugadores jugaron de verdad.

**Por qué suma:** hoy los resultados de esa tabla son inventados (la propia página lo aclara abajo). Con datos reales se convierte en una herramienta útil y en una de las secciones más atractivas.

**Terminado cuando:**
- Al elegir dos jugadores, se ven sus partidos reales: fecha, torneo, ronda, superficie, ganador y resultado.
- El contador de victorias coincide con la tabla.
- Si nunca se enfrentaron, lo dice ("Todavía no se enfrentaron").
- Desaparece el aviso de "resultados de ejemplo".

### 12. Panel de administración 🛠️ 🔴

**Qué es:** una pantalla, visible solo para quien administra la página, para agregar, editar y borrar jugadores con un formulario.

**Por qué suma:** con esto, actualizar la página deja de requerir programar. Cambiar un ranking o sumar una promesa nueva lleva un minuto.

**Terminado cuando:**
- Solo la cuenta de administración ve el acceso al panel.
- Se pueden crear, editar y borrar jugadores.
- El formulario avisa si falta un dato obligatorio o si hay un error (por ejemplo, un ranking negativo).
- Antes de borrar pide confirmación.
- Un usuario común no puede hacer cambios ni entrando por otro lado.

---

## Proyectos grandes

### 13. Cuentas de usuario 👤 🔴

**Qué es:** que cualquiera pueda crearse una cuenta con usuario y contraseña, en lugar de existir un único usuario.

**Por qué suma:** convierte TenisClub en una comunidad. Los favoritos (5) y el récord de la trivia (7) quedan guardados en la cuenta y se ven desde cualquier computadora o celular.

**Terminado cuando:**
- La pantalla de login tiene la opción "Crear cuenta".
- No se pueden repetir nombres de usuario y la contraseña tiene un largo mínimo.
- Cada usuario ve sus propios favoritos, aunque entre desde otro dispositivo.
- Las contraseñas se guardan de forma segura (nunca como texto legible).

### 14. Rankings que se actualizan solos 📈 🔴

**Qué es:** que los rankings ATP y WTA se actualicen automáticamente con datos de un servicio externo de tenis.

**Por qué suma:** hoy los rankings dicen "actualización: 9 de noviembre de 2026" y van a quedar viejos enseguida. Con esto la página siempre muestra datos al día.

**Terminado cuando:**
- Los rankings se actualizan solos (por ejemplo, una vez por día).
- La página muestra la fecha real de la última actualización.
- Si el servicio externo falla, se siguen mostrando los últimos datos conocidos.
- La clave del servicio externo no aparece en ningún lugar visible ni en el repositorio.

---

## Camino sugerido

1. **Para entrar en calor:** 1 (Reglas) y 2 (Cerrar sesión). Son cortas y se ven enseguida.
2. **Puesta a punto:** los tres arreglos del principio.
3. **El cambio que destraba todo:** 9 (Jugadores desde la base de datos).
4. **A partir de ahí, a elección:** 6 (Marcador) si da ganas de algo divertido y que no depende de nada más, o 10 → 11 si atrapa la parte de datos reales.

Los puntos 3, 4, 5, 7 y 8 se pueden intercalar en cualquier momento, cuando haga falta algo corto entre tareas grandes.
