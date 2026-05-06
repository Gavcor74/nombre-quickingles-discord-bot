# Quickingles Discord Bot

Bot sencillo en Python para el servidor **Quickingles Lab for SLP**.

Cuando entra un nuevo miembro:

- Le envía un DM de bienvenida.
- Le asigna el rol `Alumno SLP`.
- Publica un aviso en el canal `#nuevos-alumnos`.

## Requisitos

- Python 3.10 o superior.
- Un bot creado en Discord Developer Portal.
- Permiso del bot para gestionar roles y enviar mensajes.
- Intent privilegiado **Server Members Intent** activado.

## Instalación

1. Clona o descarga este repositorio.

2. Crea un entorno virtual:

```powershell
py -3 -m venv .venv
```

3. Activa el entorno virtual:

```powershell
.\.venv\Scripts\Activate.ps1
```

4. Instala dependencias:

```powershell
pip install -r requirements.txt
```

5. Copia el archivo de ejemplo:

```powershell
copy .env.example .env
```

6. Rellena `.env`:

```env
TOKEN=token_del_bot
GUILD_ID=id_del_servidor
CANAL_BIENVENIDA_ID=id_del_canal_nuevos_alumnos
ROL_ID=id_del_rol_alumno_slp
```

## Cómo conseguir los IDs

En Discord:

1. Ve a **Ajustes de usuario > Avanzado**.
2. Activa **Modo desarrollador**.
3. Clic derecho sobre el servidor, canal o rol.
4. Pulsa **Copiar ID**.

Variables:

- `GUILD_ID`: ID del servidor Quickingles Lab for SLP.
- `CANAL_BIENVENIDA_ID`: ID del canal `#nuevos-alumnos`.
- `ROL_ID`: ID del rol `Alumno SLP`.

## Configuración importante en Discord

En Discord Developer Portal:

1. Abre tu aplicación.
2. Ve a **Bot**.
3. Activa **Server Members Intent**.
4. Guarda cambios.

En el servidor:

- El rol del bot debe estar por encima del rol `Alumno SLP`.
- El bot necesita permiso **Gestionar roles**.
- El bot necesita permiso para ver y escribir en `#nuevos-alumnos`.

## Ejecutar el bot

```powershell
python main.py
```

Si todo está correcto verás en consola algo parecido a:

```text
Bot conectado como NombreDelBot
Servidor detectado: Quickingles Lab for SLP
```

## Seguridad

No subas nunca el archivo `.env` a GitHub. Contiene el token privado del bot.

