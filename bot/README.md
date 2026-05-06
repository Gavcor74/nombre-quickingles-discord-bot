# Bot Discord SLP Funcional

Bot para gestionar el servidor de Discord del programa SLP 2 Funcional, usando Claude mediante la API de Anthropic.

## Funciones MVP

- `/semana`: muestra la semana actual del programa.
- `/notion`: devuelve enlaces principales del programa.
- `/pregunta`: consulta a Claude con contexto academico del programa.
- `/entrega`: crea una entrega estructurada para writing o speaking y abre hilo.
- `/anuncio-semana`: genera un anuncio semanal para profesores/admins.

## Variables necesarias

Copia `.env.example` a `.env` y rellena:

- `DISCORD_TOKEN`
- `DISCORD_CLIENT_ID`
- `DISCORD_GUILD_ID`
- `ANTHROPIC_API_KEY`
- `ANTHROPIC_MODEL`
- `PROGRAM_START_DATE`

## Instalacion

```powershell
npm.cmd install
```

## Registrar comandos

```powershell
npm.cmd run deploy:commands
```

## Ejecutar bot

```powershell
npm.cmd start
```

## Nota de seguridad

Nunca subas `.env` a GitHub ni pegues tokens en canales de Discord.

