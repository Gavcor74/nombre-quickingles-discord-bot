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
    """
    Convierte el nombre visible del usuario en un nombre válido de canal Discord.

    Ejemplo:
    'Jesús Assistant' -> 'jesus-assistant'
    """
    nombre = nombre.lower().strip()
    nombre = unicodedata.normalize("NFD", nombre)
    nombre = "".join(c for c in nombre if unicodedata.category(c) != "Mn")
    nombre = re.sub(r"[^a-z0-9]+", "-", nombre)
    nombre = nombre.strip("-")
    return nombre[:30]


async def avisar_admin(guild: discord.Guild, mensaje: str):
    """
    Envía avisos al canal #admin-bot.
    Si el bot no puede acceder, imprime el mensaje en consola.
    """
    canal_admin = guild.get_channel(ADMIN_BOT_CHANNEL_ID)

    if canal_admin:
        try:
            await canal_admin.send(mensaje)
        except discord.Forbidden:
            print(f"No tengo acceso a #admin-bot. Mensaje pendiente: {mensaje}")
    else:
        print(f"No encuentro el canal admin. Mensaje pendiente: {mensaje}")


async def crear_canal_writing(member: discord.Member):
    guild = member.guild

    categoria = guild.get_channel(CAT_ENTREGAS_FEEDBACK_ID)
    rol_profesor = guild.get_role(ROL_PROFESOR_ID)

    if not categoria:
        await avisar_admin(
            guild,
            "❌ No encuentro la categoría ENTREGAS Y FEEDBACK. "
            "Revisa CAT_ENTREGAS_FEEDBACK_ID en el archivo .env."
        )
        return

    nombre_limpio = limpiar_nombre(member.display_name)

    if len(nombre_limpio) < 2:
        nombre_limpio = f"alumno-{member.id}"

    nombre_canal = f"writing-{nombre_limpio}"

    canal_existente = discord.utils.get(guild.text_channels, name=nombre_canal)

    if canal_existente:
        await avisar_admin(
            guild,
            f"ℹ️ El canal {canal_existente.mention} ya existía para {member.mention}."
        )
        return

    # Permisos del canal nuevo:
    # - @everyone no ve nada.
    # - El alumno concreto ve y escribe en su canal.
    # - El rol Profesor ve y escribe.
    # - El bot queda incluido para poder escribir instrucciones.
    #
    # Nota:
    # Los permisos avanzados del Profesor se gestionan desde la categoría
    # ENTREGAS Y FEEDBACK, no desde el bot.
    overwrites = {
        guild.default_role: discord.PermissionOverwrite(
            view_channel=False
        ),
        member: discord.PermissionOverwrite(
            view_channel=True,
            send_messages=True,
            read_message_history=True,
            attach_files=True,
            add_reactions=True,
        ),
        guild.me: discord.PermissionOverwrite(
            view_channel=True,
            send_messages=True,
            read_message_history=True,
            attach_files=True,
            add_reactions=True,
            manage_channels=True,
        ),
    }

    if rol_profesor:
        overwrites[rol_profesor] = discord.PermissionOverwrite(
            view_channel=True,
            send_messages=True,
            read_message_history=True,
            attach_files=True,
            add_reactions=True,
        )

    try:
        canal = await guild.create_text_channel(
            name=nombre_canal,
            category=categoria,
            overwrites=overwrites,
            topic=f"Canal privado de Writing de {member.display_name} — Quickinglés SLP Funcional",
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
            color=0x16A34A,
        )

        await canal.send(content=member.mention, embed=embed)

        await avisar_admin(
            guild,
            f"✅ Nuevo alumno provisionado:\n"
            f"Alumno: {member.mention}\n"
            f"Canal creado: {canal.mention}"
        )

    except discord.Forbidden:
        await avisar_admin(
            guild,
            "❌ No tengo permisos suficientes para crear el canal.\n\n"
            "Revisa estos puntos:\n"
            "1. El rol Quickinglés SLP Bot debe estar por encima de Alumno SLP Funcional y Profesor.\n"
            "2. En la categoría ENTREGAS Y FEEDBACK, el rol Quickinglés SLP Bot debe tener Ver canales, Gestionar canales y Gestionar permisos.\n"
            "3. La categoría puede ser privada, pero el rol Quickinglés SLP Bot debe estar añadido explícitamente."
        )

    except Exception as error:
        await avisar_admin(
            guild,
            f"❌ Error inesperado creando canal para {member.mention}: `{error}`"
        )


@bot.event
async def on_ready():
    print(f"✅ Bot conectado como {bot.user}")


@bot.event
async def on_member_update(before: discord.Member, after: discord.Member):
    rol_alumno = after.guild.get_role(ROL_ALUMNO_ID)

    if not rol_alumno:
        await avisar_admin(
            after.guild,
            "❌ No encuentro el rol Alumno SLP Funcional. Revisa ROL_ALUMNO_ID en el archivo .env."
        )
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