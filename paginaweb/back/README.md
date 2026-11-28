# Tesys - Backend

Backend del proyecto en **Spring Boot 4.1** (Java 25) con **Spring Data JPA** + **PostgreSQL**.

## Requisitos

- **Java 25** (JDK)
- **Docker** (Docker Desktop en Windows/Mac, Docker Engine en Linux) — para levantar la base de datos
- No hace falta instalar Maven: el proyecto trae el wrapper (`mvnw` / `mvnw.cmd`)

## Estructura relevante

```
back/
├── mvnw / mvnw.cmd          # Maven Wrapper (Linux/Mac / Windows)
├── pom.xml                  # Dependencias del proyecto
├── Dockerfile               # Imagen de runtime Java 25
├── docker-compose.yml       # Levanta Postgres para desarrollo local
└── src/main/
    ├── java/com/paginaweb/back/
    │   ├── BackApplication.java
    │   └── models/           # Entidades JPA
    └── resources/
        └── application.properties
```

## 1. Levantar la base de datos (Postgres con Docker)

El `docker-compose.yml` de esta carpeta define un Postgres local con estas credenciales de desarrollo:

| Variable | Valor |
|---|---|
| DB | `tesys` |
| Usuario | `tesys` |
| Password | Configurala en `.env` con una clave segura |
| Puerto | `5432` |

### Linux (Docker Engine, sin Docker Desktop)

Si `docker` te tira `permission denied`, es porque tu usuario no está en el grupo `docker` (esto es específico de una instalación "nativa" de Docker Engine en Linux, no aplica a Docker Desktop):

```bash
sudo usermod -aG docker $USER
newgrp docker   # o cerrá sesión y volvé a entrar
```

Después, para levantar la base:

```bash
cd paginaweb/back
docker compose up -d
```

Si no querés tocar el grupo `docker`, alternativa sin ese paso:

```bash
sudo docker compose up -d
```

### Windows 11 (Docker Desktop)

No existe el concepto de `sudo` / grupo `docker` en Windows — Docker Desktop le da acceso a tu usuario automáticamente al instalarlo.

1. Instalá **Docker Desktop** (backend WSL2 recomendado, es el default).
2. Abrilo una vez y dejalo corriendo (ícono en la bandeja del sistema).
3. Desde **PowerShell**, **cmd** o una terminal **WSL2**:

```powershell
cd paginaweb\back
docker compose up -d
```

### Mac (Docker Desktop)

Igual que Windows: instalar Docker Desktop, dejarlo corriendo, y:

```bash
cd paginaweb/back
docker compose up -d
```

## 2. Correr el backend

La configuración de conexión a la base (`src/main/resources/application.properties`) usa variables de entorno con defaults que ya matchean el `docker-compose.yml`, así que con Postgres levantado no hace falta configurar nada más.

**Linux / Mac:**

```bash
cd paginaweb/back
./mvnw spring-boot:run
```

> Si `./mvnw` da `permission denied`, dale permiso de ejecución una sola vez: `chmod +x mvnw`.

**Windows (PowerShell / cmd):**

```powershell
cd paginaweb\back
.\mvnw.cmd spring-boot:run
```

El backend queda arriba en `http://localhost:8080`.

También podés levantar el backend y PostgreSQL juntos desde esta carpeta:

```bash
docker compose up --build
```

## Configuración de la base de datos

Si necesitás apuntar a una base distinta (otro host, otra password, etc.), podés sobreescribir sin tocar código seteando estas variables de entorno antes de correr `mvnw spring-boot:run`:

- `DB_URL` (default: `jdbc:postgresql://localhost:5432/tesys`)
- `DB_USER` (default: `tesys`)
- `DB_PASSWORD` (obligatoria; definila en `.env`)

## Credenciales y secretos

Copiá `.env.example` a `.env` y reemplazá los valores de ejemplo antes de iniciar la aplicación. `.env` está excluido de Git; no guardes credenciales reales en `.env.example` ni en archivos versionados.

- `APP_USER` y `APP_PASSWORD` definen la única cuenta habilitada para iniciar sesión. La contraseña se codifica con BCrypt y el backend rechaza cualquier otra combinación.
- `JWT_SECRET` debe ser una clave aleatoria codificada en Base64 de al menos 32 bytes. Podés generarla con `openssl rand -base64 32`.

El backend no inicia si faltan las credenciales o la clave JWT, para evitar usar valores públicos por defecto.

Al iniciar con una base vacía, el backend carga automáticamente jugadores, torneos y un partido de ejemplo. La carga es idempotente para no duplicar los datos existentes al reiniciar.

## Comandos útiles de Maven

```bash
./mvnw clean compile   # compilar
./mvnw test             # correr tests (necesita la DB levantada)
./mvnw spring-boot:run  # levantar el backend
```
