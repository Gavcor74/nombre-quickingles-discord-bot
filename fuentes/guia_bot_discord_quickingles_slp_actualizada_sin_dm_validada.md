# Guía viva — Bot de Discord Quickinglés SLP

**Proyecto:** Quickinglés Lab for SLP  
**Objetivo del bot:** automatizar el entorno individual del alumno dentro del servidor Discord de preparación STANAG 6001 / SLP Funcional.  
**Estado actual:** el bot ya está creado en Discord Developer Portal e invitado al servidor.  
**Última actualización:** 09/05/2026

---

## 1. Contexto real del servidor

Este servidor no es Quicktwist ni Skool.  
Este servidor Discord pertenece al ecosistema **Quickinglés SLP Militar**, orientado a preparación STANAG 6001 / SLP Funcional.

La comunidad Skool y Quicktwist van por otro lado. No mezclar ambos sistemas.

---

## 2. Estructura actual del servidor Discord

Nombre del servidor:

```text
Quickinglés Lab for SLP
```

### Categoría: Comunidad

Canales actuales:

```text
#general
#dudas-del-examen
#comparte-tu-progreso
```

Uso previsto:

- `#general`: conversación general, dudas rápidas, contacto diario. Funciona como “cafetería” del servidor.
- `#dudas-del-examen`: preguntas concretas sobre STANAG / SLP.
- `#comparte-tu-progreso`: avances, sensaciones, resultados, evolución del alumno.

---

### Categoría: RECURSOS

```text
#recursos-examen
```

Uso previsto:

- Enlaces útiles.
- Recursos STANAG.
- Documentos de apoyo.
- Materiales oficiales o de referencia.

---

### Categoría: INICIO

```text
#bienvenida
#anuncios
#normas
```

Uso previsto:

- `#bienvenida`: puerta de entrada. Actualmente gestionada con Carl-bot.
- `#anuncios`: canal oficial de avisos del curso.
- `#normas`: normas del servidor. Solo lectura.

---

### Categoría: MATERIAL DEL CURSO FUNCIONAL

```text
practica-slp
#acceso-notion-slp-funcional
#semana-actual
```

Uso previsto:

- `practica-slp`: canal tipo foro para práctica grupal.
- `#acceso-notion-slp-funcional`: enlace o instrucciones de acceso al material Notion.
- `#semana-actual`: orientación semanal del curso.

---

### Canal foro: practica-slp

El foro `practica-slp` tiene etiquetas útiles para organizar la práctica.

Etiquetas actuales:

```text
Listening
Reading
Speaking
Writing
Semana 1
Semana 2
Semana 3
Semana 4
Semana 5
Semana 6
Semana 7
Semana 8
Semana 9
Semana 10
Semana 11
Semana 12
Corregido
Pendiente
```

Uso recomendado:

- Práctica grupal.
- Mini ejercicios.
- Retos por semana.
- Entregas no sensibles.
- Correcciones visibles si interesa que otros aprendan.

Ejemplo de uso:

```text
Título: Writing Semana 1 — Oliver
Etiquetas: Writing + Semana 1 + Pendiente
```

Una vez corregido:

```text
Etiquetas: Writing + Semana 1 + Corregido
```

---

### Categoría: ENTREGAS Y FEEDBACK

Canales actuales:

```text
#writing-oliver
#writing-alumno2
```

Uso previsto:

- Canales privados individuales para entregas serias de Writing.
- Cada alumno solo ve su canal.
- El profesor ve todos.
- El bot creará automáticamente nuevos canales `#writing-nombre`.

Importante:

No abrir toda la categoría `ENTREGAS Y FEEDBACK` al rol `Alumno SLP Funcional`.

La lógica correcta es:

```text
ENTREGAS Y FEEDBACK
   #writing-oliver       visible solo Oliver + Profesor
   #writing-alumno2      visible solo Alumno2 + Profesor
   #writing-nuevo        visible solo NuevoAlumno + Profesor
```

---

### Categoría: CLASES EN DIRECTO

```text
#calendario-clases
Aula grupal
Sala individual
```

Uso previsto:

- `#calendario-clases`: agenda de sesiones.
- `Aula grupal`: canal de voz para clases grupales.
- `Sala individual`: canal de voz para sesiones 1:1.

---

## 3. Roles actuales importantes

Roles relevantes:

```text
Alumno SLP Funcional
Alumno SLP Profesional
Profesor
carl-bot
@everyone
```

### Rol principal del alumno

```text
Alumno SLP Funcional
```

Este es el rol que Carl-bot asigna cuando el alumno pulsa la reacción verde ✅ en `#bienvenida`.

El bot propio de Quickinglés detectará cuándo un usuario recibe este rol.

---

### Rol Profesor

El rol `Profesor` se ha creado aunque Jesús sea propietario del servidor.

Motivo:

El bot necesita una referencia estable para dar acceso a los canales privados.

La lógica es:

```text
#writing-nombre
Visible para:
✅ alumno concreto
✅ rol Profesor
❌ resto de alumnos
```

No conviene meter el ID personal de Jesús directamente en el código. Es mejor usar un rol.

Si en el futuro entra otro profesor, corrector o asistente, solo se le asigna el rol `Profesor` y podrá ver los canales privados creados correctamente.

---

## 4. Permisos recomendados por canal

### `#bienvenida`

Debe ser visible antes de la verificación.

Configuración recomendada:

```text
@everyone
✅ Ver canal
✅ Leer historial de mensajes
✅ Añadir reacciones
❌ Enviar mensajes
❌ Crear hilos
```

Motivo:

El alumno entra sin rol y necesita ver este canal para activar su acceso.

---

### `#normas`

Puede ser privado o no, siempre que el alumno lo vea en el momento adecuado.

Recomendación práctica actual:

- Se puede dejar como canal privado si el comportamiento es correcto.
- Debe verse cuando el usuario tenga el rol adecuado.
- No debe permitir escritura a alumnos.

Configuración para alumnos:

```text
Alumno SLP Funcional
✅ Ver canal
✅ Leer historial de mensajes
✅ Añadir reacciones
❌ Enviar mensajes
❌ Crear hilos
```

---

### `#anuncios`

Este canal dio problemas cuando estaba marcado como “privado”.  
Al quitar privado, el usuario con rol `Alumno SLP Funcional` pudo ver correctamente el historial.

Luego se volvió a probar con privado y ya funcionó correctamente.

Conclusión:

- El problema no era Carl-bot.
- El problema era configuración de permisos / sincronización del canal.
- Si se usa canal privado, revisar bien los roles con acceso.

Configuración recomendada:

```text
Alumno SLP Funcional
✅ Ver canal
✅ Leer historial de mensajes
✅ Añadir reacciones
❌ Enviar mensajes
❌ Crear hilos
```

---

### `ENTREGAS Y FEEDBACK`

No debe estar abierto a todos los alumnos.

Configuración base recomendada:

```text
@everyone
❌ Ver canal

Alumno SLP Funcional
❌ Ver canal

Profesor
✅ Ver canal
✅ Leer historial
✅ Enviar mensajes
✅ Adjuntar archivos
✅ Gestionar mensajes
```

Luego, cada canal privado individual tendrá permisos específicos:

```text
#writing-nombre
✅ alumno concreto
✅ Profesor
❌ @everyone
❌ resto de alumnos
```

---

## 5. Carl-bot: función actual

Carl-bot se mantiene como sistema de acceso inicial.

Flujo actual:

```text
Alumno entra al servidor
↓
Solo ve #bienvenida
↓
Lee el mensaje de Carl-bot
↓
Pulsa reacción verde ✅
↓
Carl-bot asigna rol Alumno SLP Funcional
↓
El alumno accede a los canales del curso
```

Mensaje actual de bienvenida gestionado por Carl-bot:

```text
👋 Bienvenido a Quickinglés Lab for SLP.

Este es tu espacio de preparación para el examen
STANAG 6001 — Nivel 2 Funcional.

Para acceder al contenido del curso reacciona
con ✅ aquí abajo.

✅ SLP 2 — Funcional

Una vez reacciones recibirás acceso automático
a todos los canales del programa.
Si tienes cualquier problema avisa al profesor.
```

Decisión tomada:

No sustituir todavía Carl-bot.  
Carl-bot abre la puerta.  
El bot propio de Quickinglés prepara el espacio individual del alumno.

---

## 6. Función inicial del bot propio

El bot propio se llamará:

```text
Quickinglés SLP Bot
```

Función inicial, versión MVP:

```text
Detectar cuándo un usuario recibe el rol Alumno SLP Funcional
↓
Crear automáticamente un canal privado #writing-nombre
↓
Dar acceso al alumno concreto
↓
Dar acceso al rol Profesor
↓
Publicar instrucciones dentro del canal
↓
Avisar en #admin-bot
```

No se va a crear todavía:

```text
#progreso-nombre
```

Motivo:

Para 2 alumnos actuales y objetivo de 8-10 alumnos, primero interesa validar el flujo de Writing.  
El progreso se puede añadir después con Notion, Supabase o un comando `/miprogreso`.

---

## 7. Canal interno del bot

Se creó o se está usando el canal:

```text
#admin-bot
```

Uso:

- Logs internos del bot.
- Avisos de alumnos provisionados.
- Errores de permisos.
- Avisos si el bot no puede enviar DM.
- Confirmación de canales creados.

Este canal NO debe verlo el rol `Alumno SLP Funcional`.

Configuración recomendada:

```text
@everyone
❌ Ver canal

Alumno SLP Funcional
❌ Ver canal

Profesor / Jesús
✅ Ver canal
✅ Leer historial
✅ Enviar mensajes

Quickinglés SLP Bot
✅ Ver canal
✅ Enviar mensajes
✅ Leer historial
```

---

## 8. Creación del bot en Discord Developer Portal

URL del portal:

```text
https://discord.com/developers/applications
```

### Paso 1 — Crear aplicación

En Developer Portal:

```text
New Application
```

Nombre elegido:

```text
Quickinglés SLP Bot
```

Después de crearla, se accede a la pantalla de información general.

---

### Menú lateral principal del Developer Portal

Dentro de la aplicación se ven pestañas como:

```text
Información general
Instalaciones
OAuth2
Bot
Emojis
Webhooks
Rich Presence
Testers de la aplicación
Verificación de la aplicación
```

Las pestañas importantes para este proyecto son:

```text
Información general
Bot
OAuth2
```

---

## 9. Pestaña Información general

Aquí aparecen:

```text
Nombre de la aplicación
Icono de la aplicación
Descripción
Etiquetas
Identificador de la aplicación
Llave pública
```

Importante:

- El **Identificador de la aplicación** no es el token.
- La **Llave pública** no es el token.
- No usamos la llave pública ahora mismo.

---

## 10. Pestaña Bot

En la pestaña **Bot** se configura el usuario bot real.

Elementos vistos:

```text
Icono
Cartel
Nombre de usuario
Token
Proceso de autorización
Privileged Gateway Intents
Permisos del bot
```

### Token

El token es la llave real del bot.

Regla:

```text
Nunca pegar el token en ChatGPT.
Nunca compartirlo.
Nunca subirlo a GitHub.
```

El token irá en el archivo `.env` local:

```env
DISCORD_TOKEN=tu_token_aqui
```

---

## 11. Privileged Gateway Intents

En la pestaña **Bot**, dentro de **Privileged Gateway Intents**, se deben activar:

```text
Presence Intent ❌
Server Members Intent ✅
Message Content Intent ✅
```

Motivo:

### Server Members Intent

Necesario para detectar eventos de miembros, por ejemplo:

```text
cuando Carl-bot asigna el rol Alumno SLP Funcional
```

### Message Content Intent

Necesario si usamos comandos clásicos tipo:

```text
!crearwriting @usuario
```

No hace falta `Presence Intent`.

---

## 12. Permisos del bot en la pestaña Bot

En la sección **Permisos del bot**, marcar solo los permisos necesarios.

Permisos recomendados:

### Permisos generales

```text
✅ Gestionar roles
✅ Gestionar canales
✅ Ver canales
```

### Permisos de texto

```text
✅ Enviar mensajes
✅ Insertar enlaces
✅ Adjuntar archivos
✅ Leer el historial de mensajes
✅ Añadir reacciones
✅ Usar comandos de barra diagonal
```

No marcar:

```text
❌ Administrador
❌ Gestionar servidor
❌ Expulsar miembros
❌ Banear miembros
❌ Mencionar a todos
```

Criterio:

El bot necesita crear canales y asignar permisos, pero no necesita control total del servidor.

---

## 13. Pestaña OAuth2

La pestaña **OAuth2** se usa para generar la URL de invitación del bot.

Dentro aparece:

```text
Información del cliente
Redirecciones
Generador de URL para OAuth2
```

En español, Discord llama **Ámbitos** a lo que en inglés son **Scopes**.

La sección de ámbitos muestra casillas como:

```text
identify
connections
guilds
bot
applications.commands
...
```

Para invitar el bot, marcar solo:

```text
✅ bot
✅ applications.commands
```

Al marcar `bot`, aparece debajo la sección **Permisos del bot**.

---

## 14. Permisos en OAuth2 para generar la URL

En OAuth2 → Generador de URL → Permisos del bot, marcar:

```text
✅ Gestionar roles
✅ Gestionar canales
✅ Ver canales
✅ Enviar mensajes
✅ Insertar enlaces
✅ Adjuntar archivos
✅ Leer el historial de mensajes
✅ Añadir reacciones
✅ Usar comandos de barra diagonal
```

No marcar:

```text
❌ Administrador
❌ Gestionar servidor
❌ Expulsar miembros
❌ Banear miembros
❌ Mencionar a todos
```

Después Discord genera una URL abajo.

Esa URL se abre en el navegador para invitar el bot al servidor.

---

## 15. Invitación del bot al servidor

Flujo:

```text
OAuth2
↓
Generador de URL
↓
Marcar bot + applications.commands
↓
Marcar permisos
↓
Copiar URL generada
↓
Abrir URL en navegador
↓
Elegir servidor Quickinglés Lab for SLP
↓
Autorizar
```

Estado actual:

```text
Quickinglés SLP Bot ya está dentro del servidor.
```

---

## 16. Jerarquía de roles

Muy importante.

Después de invitar el bot, Discord crea un rol para él, por ejemplo:

```text
Quickinglés SLP Bot
```

Ese rol debe colocarse por encima de los roles que necesita gestionar.

Recomendado:

```text
Quickinglés SLP Bot
Profesor
Alumno SLP Funcional
Alumno SLP Profesional
@everyone
```

Si el rol del bot queda por debajo, puede fallar al:

- crear canales con permisos;
- asignar permisos por rol;
- gestionar roles;
- interactuar con ciertos usuarios o canales.

---

## 17. IDs necesarios para el archivo `.env`

Para el bot necesitaremos estos IDs:

```env
GUILD_ID=
ROL_ALUMNO_ID=
ROL_PROFESOR_ID=
CAT_ENTREGAS_FEEDBACK_ID=
ADMIN_BOT_CHANNEL_ID=
```

### Cómo sacar IDs

Primero activar Modo desarrollador:

```text
Ajustes de usuario
↓
Avanzado
↓
Modo desarrollador ✅
```

Después se puede hacer clic derecho sobre servidor, roles, canales o categorías y usar:

```text
Copiar ID
```

---

### ID del servidor

Clic derecho en el icono del servidor:

```text
Quickinglés Lab for SLP
↓
Copiar ID
```

Se guarda como:

```env
GUILD_ID=
```

---

### ID del rol Alumno SLP Funcional

Ruta:

```text
Ajustes del servidor
↓
Roles
↓
Alumno SLP Funcional
↓
Copiar ID
```

Se guarda como:

```env
ROL_ALUMNO_ID=
```

---

### ID del rol Profesor

Ruta:

```text
Ajustes del servidor
↓
Roles
↓
Profesor
↓
Copiar ID
```

Se guarda como:

```env
ROL_PROFESOR_ID=
```

---

### ID de la categoría ENTREGAS Y FEEDBACK

Clic derecho sobre la categoría, no sobre un canal:

```text
ENTREGAS Y FEEDBACK
↓
Copiar ID
```

Se guarda como:

```env
CAT_ENTREGAS_FEEDBACK_ID=
```

---

### ID del canal admin-bot

Clic derecho sobre:

```text
#admin-bot
↓
Copiar ID
```

Se guarda como:

```env
ADMIN_BOT_CHANNEL_ID=
```

---

## 18. Archivos que tendrá el bot en local

Cuando pasemos a código, la carpeta local será:

```text
quickingles-slp-bot/
├── bot.py
├── .env
└── requirements.txt
```

### `.env`

```env
DISCORD_TOKEN=tu_token_aqui

GUILD_ID=
ROL_ALUMNO_ID=
ROL_PROFESOR_ID=
CAT_ENTREGAS_FEEDBACK_ID=
ADMIN_BOT_CHANNEL_ID=
```

Nunca compartir el token.

---

### `requirements.txt`

```txt
discord.py
python-dotenv
```

---

## 19. Código previsto del MVP

Este código queda como base inicial. Puede ajustarse antes de ejecutarlo.

```python
import os
import re
import unicodedata
import discord
from discord.ext import commands
from dotenv import load_dotenv

load_dotenv()

DISCORD_TOKEN = os.getenv("DISCORD_TOKEN")
GUILD_ID = int(os.getenv("GUILD_ID"))
ROL_ALUMNO_ID = int(os.getenv("ROL_ALUMNO_ID"))
ROL_PROFESOR_ID = int(os.getenv("ROL_PROFESOR_ID"))
CAT_ENTREGAS_FEEDBACK_ID = int(os.getenv("CAT_ENTREGAS_FEEDBACK_ID"))
ADMIN_BOT_CHANNEL_ID = int(os.getenv("ADMIN_BOT_CHANNEL_ID"))

intents = discord.Intents.default()
intents.members = True
intents.guilds = True
intents.message_content = True

bot = commands.Bot(command_prefix="!", intents=intents)


def limpiar_nombre(nombre: str) -> str:
    nombre = nombre.lower().strip()
    nombre = unicodedata.normalize("NFD", nombre)
    nombre = "".join(c for c in nombre if unicodedata.category(c) != "Mn")
    nombre = re.sub(r"[^a-z0-9]+", "-", nombre)
    nombre = nombre.strip("-")
    return nombre[:30]


async def crear_canal_writing(member: discord.Member):
    guild = member.guild

    categoria = guild.get_channel(CAT_ENTREGAS_FEEDBACK_ID)
    rol_profesor = guild.get_role(ROL_PROFESOR_ID)
    canal_admin = guild.get_channel(ADMIN_BOT_CHANNEL_ID)

    if not categoria:
        if canal_admin:
            await canal_admin.send("❌ No encuentro la categoría ENTREGAS Y FEEDBACK.")
        return

    nombre_limpio = limpiar_nombre(member.display_name)

    if len(nombre_limpio) < 2:
        nombre_limpio = f"alumno-{member.id}"

    nombre_canal = f"writing-{nombre_limpio}"

    canal_existente = discord.utils.get(guild.text_channels, name=nombre_canal)

    if canal_existente:
        if canal_admin:
            await canal_admin.send(
                f"ℹ️ El canal {canal_existente.mention} ya existía para {member.mention}."
            )
        return

    overwrites = {
        guild.default_role: discord.PermissionOverwrite(view_channel=False),
        member: discord.PermissionOverwrite(
            view_channel=True,
            send_messages=True,
            read_message_history=True,
            attach_files=True,
            add_reactions=True
        )
    }

    if rol_profesor:
        overwrites[rol_profesor] = discord.PermissionOverwrite(
            view_channel=True,
            send_messages=True,
            read_message_history=True,
            attach_files=True,
            add_reactions=True,
            manage_messages=True,
            manage_threads=True
        )

    try:
        canal = await guild.create_text_channel(
            name=nombre_canal,
            category=categoria,
            overwrites=overwrites,
            topic=f"Canal privado de Writing de {member.display_name} — Quickinglés SLP Funcional"
        )

        embed = discord.Embed(
            title=f"✍️ Canal de Writing — {member.display_name}",
            description=(
                "Este es tu canal privado para entregar ejercicios de writing.\n\n"
                "**Cómo funciona:**\n"
                "1. Escribe tu texto en un documento aparte.\n"
                "2. Pégalo directamente aquí.\n"
                "3. Recibirás feedback individual del profesor.\n\n"
                "**Cuando entregues un writing, incluye:**\n"
                "• Semana del curso\n"
                "• Tipo de ejercicio\n"
                "• Texto completo\n\n"
                "**Ejemplo:**\n"
                "`Semana 1 — Email informal`\n\n"
                "Cuando lo tengas listo, publícalo aquí."
            ),
            color=0x16A34A
        )

        await canal.send(content=member.mention, embed=embed)

        if canal_admin:
            await canal_admin.send(
                f"✅ Nuevo alumno provisionado:\n"
                f"Alumno: {member.mention}\n"
                f"Canal creado: {canal.mention}"
            )

        try:
            await member.send(
                f"✅ Tu canal privado de writing ya está listo: {canal.mention}\n\n"
                "Ahí podrás entregar tus textos y recibir feedback individual."
            )
        except discord.Forbidden:
            if canal_admin:
                await canal_admin.send(
                    f"⚠️ No he podido enviar DM a {member.mention}. Puede tener los mensajes privados cerrados."
                )

    except discord.Forbidden:
        if canal_admin:
            await canal_admin.send(
                "❌ No tengo permisos suficientes para crear el canal. "
                "Revisa que mi rol esté por encima de los roles que gestiono y que tenga permiso para gestionar canales."
            )

    except Exception as error:
        if canal_admin:
            await canal_admin.send(
                f"❌ Error inesperado creando canal para {member.mention}: `{error}`"
            )


@bot.event
async def on_ready():
    print(f"✅ Bot conectado como {bot.user}")


@bot.event
async def on_member_update(before: discord.Member, after: discord.Member):
    rol_alumno = after.guild.get_role(ROL_ALUMNO_ID)

    if not rol_alumno:
        return

    tenia_rol = rol_alumno in before.roles
    tiene_rol = rol_alumno in after.roles

    if not tenia_rol and tiene_rol:
        await crear_canal_writing(after)


@bot.command(name="crearwriting")
@commands.has_permissions(administrator=True)
async def crear_writing_manual(ctx, member: discord.Member):
    await crear_canal_writing(member)
    await ctx.reply(f"✅ Canal de writing revisado/creado para {member.mention}.")


bot.run(DISCORD_TOKEN)
```

---

## 20. Prueba prevista cuando pasemos a local

No probar con alumno real al principio.

Usar cuenta de prueba:

```text
Jesús Assistant
```

Prueba controlada:

```text
1. Arrancar bot en local.
2. Quitar rol Alumno SLP Funcional a Jesús Assistant.
3. Borrar canal writing-jesus-assistant si existe.
4. Volver a asignar rol Alumno SLP Funcional.
5. Comprobar que se crea #writing-jesus-assistant.
6. Comprobar que se publica aviso en #admin-bot.
7. Comprobar que Jesús Assistant solo ve su canal privado.
8. Comprobar que Jesús / Profesor sí ve todos los canales writing.
```

Comando manual de emergencia:

```text
!crearwriting @Jesús Assistant
```

---

## 21. Decisión técnica: local primero, VPS después

El bot ya existe en Discord, pero el código tiene que ejecutarse en algún sitio.

Opciones:

```text
Local: PC de Jesús ejecutando python bot.py
VPS: servidor externo ejecutando el bot 24/7
```

Decisión actual:

Primero se prueba en local.

Motivo:

- Menos frentes abiertos.
- Si falla, sabemos que es Discord/código, no despliegue.
- Cuando funcione, se sube a VPS/Easypanel.

Ruta correcta:

```text
Crear bot en Discord
↓
Invitarlo al servidor
↓
Probar código en local
↓
Validar permisos y flujo
↓
Subir a VPS / Easypanel
```

---

## 22. Principios de trabajo para este bot

No precipitarse.

Orden correcto:

```text
1. Configuración Discord
2. Bot creado e invitado
3. Roles y permisos correctos
4. Prueba local
5. Automatización canal writing
6. Logs internos
7. Progreso individual
8. Notion / Supabase
9. VPS 24/7
```

Nada de meter Notion, Supabase o dashboards antes de validar el canal de writing.

---

## 23. Próximo paso pendiente

Estado actual:

```text
✅ Aplicación creada en Discord Developer Portal
✅ Bot creado dentro de la aplicación
✅ Intents identificados
✅ OAuth2 usado para invitar el bot
✅ Bot ya está dentro del servidor
✅ Rol Profesor creado y asignado a Jesús
✅ IDs necesarios recopilados por Jesús
```

Siguiente paso:

```text
Revisar la jerarquía del rol Quickinglés SLP Bot dentro del servidor.
Después crear carpeta local y archivos bot.py, .env y requirements.txt.
```

---

## 24. Notas importantes para futuras actualizaciones

Este documento debe actualizarse cada vez que cambie:

- estructura de canales;
- roles;
- permisos;
- función del bot;
- código;
- integración con Notion;
- integración con Supabase;
- despliegue en VPS;
- comandos nuevos;
- flujo de onboarding.

Este archivo es la referencia viva del proyecto Discord Quickinglés SLP.

---

# 27. Validación del MVP — creación automática de canal Writing funcionando

**Fecha de actualización:** 09/05/2026  
**Estado:** MVP funcional en local.

## 27.1 Resultado conseguido

Tras ajustar permisos y simplificar la lógica del bot, el flujo MVP ya funciona correctamente.

Resultado confirmado:

```text
✅ Carl-bot asigna el rol Alumno SLP Funcional.
✅ Quickinglés SLP Bot detecta el cambio de rol.
✅ Quickinglés SLP Bot crea automáticamente el canal privado de writing.
✅ El canal se crea dentro de ENTREGAS Y FEEDBACK.
✅ El bot publica el mensaje inicial dentro del canal.
✅ El bot puede avisar en #admin-bot.
```

Mensaje de confirmación del usuario:

```text
tal cual, ahora si funciona!
```

## 27.2 Diagnóstico del fallo anterior

El bot ya detectaba el evento `on_member_update`, pero fallaba al crear el canal.

Errores anteriores observados en consola:

```text
403 Forbidden — Missing Permissions
403 Forbidden — Missing Access
```

Interpretación:

```text
Missing Access
→ el bot no podía escribir en #admin-bot.

Missing Permissions
→ el bot no podía crear el canal privado en ENTREGAS Y FEEDBACK o aplicar los overwrites iniciales.
```

Se confirmó que:

```text
✅ Carl-bot funcionaba después de corregir su posición en la jerarquía.
✅ Quickinglés SLP Bot estaba online.
✅ El evento on_member_update saltaba.
❌ La creación del canal fallaba por permisos/capa de categoría privada.
```

## 27.3 Corrección aplicada

Se decidió no forzar al bot a otorgar permisos avanzados de moderación al rol `Profesor` durante la creación del canal.

Antes, el código intentaba asignar al rol Profesor:

```python
manage_messages=True,
manage_threads=True,
```

Esto podía generar bloqueo de permisos durante la creación del canal.

Decisión tomada:

```text
La categoría ENTREGAS Y FEEDBACK define los permisos potentes del rol Profesor.
El bot solo crea el canal y añade permisos básicos para:
- alumno concreto
- rol Profesor
- bot
- bloqueo de @everyone
```

## 27.4 Lógica correcta final

```text
Carl-bot
→ gestiona la entrada inicial y asigna Alumno SLP Funcional.

Quickinglés SLP Bot
→ detecta el rol Alumno SLP Funcional.
→ crea #writing-nombre.
→ añade permisos básicos del alumno concreto.
→ añade acceso básico al rol Profesor.
→ publica instrucciones.
→ avisa en #admin-bot.

Profesor
→ obtiene los permisos potentes de corrección desde la categoría ENTREGAS Y FEEDBACK.
```

## 27.5 Configuración correcta de ENTREGAS Y FEEDBACK

La categoría puede seguir siendo privada.

Configuración recomendada:

```text
ENTREGAS Y FEEDBACK

Quickinglés SLP Bot
✅ Ver canales
✅ Gestionar canales
✅ Gestionar permisos
✅ Enviar mensajes y crear publicaciones
✅ Leer historial de mensajes
✅ Insertar enlaces
✅ Adjuntar archivos
✅ Añadir reacciones

Profesor
✅ Ver canales
✅ Enviar mensajes y crear publicaciones
✅ Leer historial de mensajes
✅ Insertar enlaces
✅ Adjuntar archivos
✅ Añadir reacciones
✅ Gestionar mensajes
✅ Gestionar hilos y publicaciones

Alumno SLP Funcional
❌ Ver canales

@everyone
❌ Ver canales
```

Importante:

```text
No añadir el miembro concreto Quickinglés SLP Bot#0375 salvo para diagnóstico.
A largo plazo usar el rol Quickinglés SLP Bot.
```

## 27.6 Configuración correcta de #admin-bot

```text
#admin-bot

Quickinglés SLP Bot
✅ Ver canal
✅ Enviar mensajes
✅ Leer historial de mensajes
✅ Insertar enlaces
✅ Adjuntar archivos

Profesor / Jesús
✅ Ver canal
✅ Enviar mensajes
✅ Leer historial

Alumno SLP Funcional
❌ Ver canal

@everyone
❌ Ver canal
```

## 27.7 Código funcional confirmado

El código funcional confirmado es la versión que elimina del overwrite de `Profesor` estos permisos:

```python
manage_messages=True,
manage_threads=True,
```

Y deja al rol Profesor con permisos básicos dentro del canal creado:

```python
if rol_profesor:
    overwrites[rol_profesor] = discord.PermissionOverwrite(
        view_channel=True,
        send_messages=True,
        read_message_history=True,
        attach_files=True,
        add_reactions=True,
    )
```

La autoridad completa del profesor se configura desde la categoría.

## 27.8 Próximas comprobaciones recomendadas

Antes de probar con un alumno real, revisar:

```text
[ ] Jesús Assistant ve su canal #writing-jesus-assistant.
[ ] Jesús Assistant NO ve canales writing de otros alumnos.
[ ] Jesús / Profesor sí ve #writing-jesus-assistant.
[ ] #admin-bot recibe aviso de alumno provisionado.
[ ] El mensaje inicial aparece dentro del canal writing.
[ ] El bot no crea duplicados si el canal ya existe.
[ ] Carl-bot sigue asignando correctamente Alumno SLP Funcional.
```

## 27.9 Estado actual del proyecto tras esta validación

```text
✅ Bot creado en Developer Portal.
✅ Bot invitado al servidor.
✅ Intents activados.
✅ Rol Quickinglés SLP Bot colocado por encima.
✅ Carl-bot colocado por encima de Alumno SLP Funcional.
✅ Carpeta local creada.
✅ .env funcionando.
✅ requirements.txt funcionando.
✅ bot.py funcionando.
✅ Bot conecta en local.
✅ Bot detecta rol Alumno SLP Funcional.
✅ Bot crea canal writing individual.
✅ Bot escribe en #admin-bot.
```

## 27.10 Próximo paso lógico

No pasar todavía a Notion, Supabase ni progreso.

Siguiente paso recomendado:

```text
1. Validar permisos visuales desde Jesús Assistant.
2. Confirmar que no ve otros writings.
3. Probar con un segundo usuario o alumno ficticio.
4. Documentar resultado.
5. Solo después valorar despliegue 24/7 en VPS/Easypanel.
```

No subir a VPS hasta que se confirme que el flujo funciona dos veces seguidas sin intervención manual.

---

# 28. Ajuste final — eliminación de DM privado al alumno y validación de visibilidad

**Fecha de actualización:** 09/05/2026  
**Estado:** flujo MVP validado sin DM privado al alumno.

## 28.1 Decisión tomada

Después de validar que el bot creaba correctamente el canal privado `#writing-jesus-assistant`, se observó que el alumno también recibía un mensaje privado del bot.

Esto abría una conversación directa entre el alumno y `Quickinglés SLP Bot`.

Riesgo detectado:

```text
El alumno puede pensar que debe escribirle al bot por privado.
Eso crea una vía de comunicación falsa, porque el bot no está diseñado para atender DMs.
```

Decisión:

```text
Eliminar el DM privado al alumno.
```

El bot debe trabajar dentro del servidor, no por mensaje privado.

---

## 28.2 Flujo correcto final

El flujo final queda así:

```text
Alumno entra al servidor
↓
Solo ve #bienvenida
↓
Pulsa ✅ en Carl-bot
↓
Carl-bot asigna rol Alumno SLP Funcional
↓
Quickinglés SLP Bot detecta el rol
↓
Crea #writing-nombre
↓
Publica instrucciones dentro del canal writing
↓
Avisa al profesor en #admin-bot
↓
No envía DM privado al alumno
```

---

## 28.3 Código eliminado

Se eliminó del `bot.py` el bloque que enviaba DM al alumno:

```python
try:
    await member.send(
        f"✅ Tu canal privado de writing ya está listo: {canal.mention}\n\n"
        "Ahí podrás entregar tus textos y recibir feedback individual."
    )
except discord.Forbidden:
    await avisar_admin(
        guild,
        f"⚠️ No he podido enviar DM a {member.mention}. "
        "Puede tener los mensajes privados cerrados."
    )
```

El bot ya no abre conversación privada con el alumno.

---

## 28.4 Confirmación funcional

Tras sustituir el archivo `bot.py` por la versión sin DM y reiniciar el bot con:

```bash
python bot.py
```

se confirmó que el flujo funciona correctamente.

Estado confirmado:

```text
✅ Carl-bot da acceso al servidor.
✅ Quickinglés SLP Bot crea el canal privado de writing.
✅ El bot avisa en #admin-bot.
✅ El alumno ve su canal #writing.
✅ El alumno ya no recibe DM privado del bot.
```

---

## 28.5 Validación de permisos visuales

Se comprobó desde la cuenta de prueba:

```text
Jesús Assistant
```

Resultado:

```text
✅ Jesús Assistant ve #writing-jesus-assistant.
✅ Jesús Assistant NO ve #writing-oliver.
✅ Jesús Assistant NO ve #writing-alumno2.
```

Esto confirma que los canales privados de writing están correctamente aislados.

---

## 28.6 Estado final del MVP

El MVP del bot de provisión de Writing queda validado.

Estado final:

```text
✅ Bot creado.
✅ Bot invitado.
✅ Bot ejecutándose en local.
✅ Carl-bot funcionando como puerta de entrada.
✅ Quickinglés SLP Bot funcionando como provisionador de canal writing.
✅ Categoría ENTREGAS Y FEEDBACK privada.
✅ Acceso individual por canal correcto.
✅ Sin DM privado al alumno.
✅ Avisos internos en #admin-bot.
```

---

## 28.7 Próximo paso recomendado

Antes de desplegar en VPS/Easypanel:

```text
1. Repetir la prueba una vez más con otro usuario ficticio o segundo alumno.
2. Confirmar que no se crean duplicados.
3. Confirmar que el bot se comporta bien si el canal ya existe.
4. Documentar la segunda prueba.
```

Después de eso, el siguiente bloque será:

```text
Despliegue 24/7 en VPS o Easypanel.
```

No avanzar todavía a Notion, Supabase, progreso o quiz hasta cerrar bien el despliegue básico.
