# Quickingles SLP Bot

Bot operativo del servidor **Quickingles Lab for SLP**.

## Estado

MVP validado en local.

El bot:

- Detecta cuando Carl-bot asigna el rol `Alumno SLP Funcional`.
- Crea automaticamente un canal privado `#writing-nombre`.
- Da acceso al alumno concreto y al rol `Profesor`.
- Publica instrucciones dentro del canal writing.
- Avisa internamente en `#admin-bot`.
- No envia DM privado al alumno.

## Flujo

```text
Alumno entra al servidor
-> solo ve #bienvenida
-> pulsa la reaccion de Carl-bot
-> Carl-bot asigna Alumno SLP Funcional
-> Quickingles SLP Bot detecta el rol
-> crea #writing-nombre
-> publica instrucciones
-> avisa en #admin-bot
```

## Archivos

```text
bot.py
requirements.txt
.env.example
assets/logo-bot.png
```

El archivo `.env` real existe solo en local y no debe subirse a GitHub.

## Variables de entorno

Copia `.env.example` a `.env` y rellena:

```env
DISCORD_TOKEN=
GUILD_ID=
ROL_ALUMNO_ID=
ROL_PROFESOR_ID=
CAT_ENTREGAS_FEEDBACK_ID=
ADMIN_BOT_CHANNEL_ID=
```

## Instalacion local

Desde esta carpeta:

```powershell
py -3 -m venv .venv
.\.venv\Scripts\Activate.ps1
pip install -r requirements.txt
```

## Ejecutar

```powershell
python bot.py
```

## Configuracion necesaria en Discord

En Discord Developer Portal:

- Activar `Server Members Intent`.
- Activar `Message Content Intent`.
- No hace falta `Presence Intent`.

En el servidor:

- El rol `Quickingles SLP Bot` debe estar por encima de `Alumno SLP Funcional`.
- Carl-bot debe poder asignar `Alumno SLP Funcional`.
- La categoria `ENTREGAS Y FEEDBACK` debe permitir al bot ver y gestionar canales.
- `#admin-bot` debe ser privado para profesor/bot.

## Proxima fase

Writing Feedback Assistant v1:

- Anadir `on_message`.
- Detectar mensajes largos en canales `writing-`.
- Ignorar bots.
- Ignorar mensajes de menos de 40 palabras.
- Avisar en `#admin-bot`.
- No responder todavia al alumno.
- No usar todavia IA.

