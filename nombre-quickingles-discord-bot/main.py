import logging
import os

import discord
from discord.ext import commands
from dotenv import load_dotenv


load_dotenv()

TOKEN = os.getenv("TOKEN")
GUILD_ID = int(os.getenv("GUILD_ID", "0"))
CANAL_BIENVENIDA_ID = int(os.getenv("CANAL_BIENVENIDA_ID", "0"))
ROL_ID = int(os.getenv("ROL_ID", "0"))

logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s %(levelname)s %(name)s: %(message)s",
)
logger = logging.getLogger("quickingles-slp-bot")

intents = discord.Intents.default()
intents.members = True
intents.message_content = False

bot = commands.Bot(command_prefix="!", intents=intents)


def validar_configuracion() -> None:
    faltan = []
    if not TOKEN:
        faltan.append("TOKEN")
    if not GUILD_ID:
        faltan.append("GUILD_ID")
    if not CANAL_BIENVENIDA_ID:
        faltan.append("CANAL_BIENVENIDA_ID")
    if not ROL_ID:
        faltan.append("ROL_ID")

    if faltan:
        raise RuntimeError(
            "Faltan variables de entorno obligatorias: " + ", ".join(faltan)
        )


@bot.event
async def on_ready() -> None:
    logger.info("Bot conectado como %s", bot.user)
    guild = bot.get_guild(GUILD_ID)
    if guild is None:
        logger.warning("No encuentro el servidor con GUILD_ID=%s", GUILD_ID)
        return

    logger.info("Servidor detectado: %s (%s)", guild.name, guild.id)


@bot.event
async def on_member_join(member: discord.Member) -> None:
    if member.guild.id != GUILD_ID:
        return

    role = member.guild.get_role(ROL_ID)
    canal_bienvenida = member.guild.get_channel(CANAL_BIENVENIDA_ID)

    if role is None:
        logger.error("No encuentro el rol con ROL_ID=%s", ROL_ID)
    else:
        try:
            await member.add_roles(
                role,
                reason="Alta automatica de nuevo alumno SLP",
            )
            logger.info("Rol %s asignado a %s", role.name, member)
        except discord.Forbidden:
            logger.exception(
                "No tengo permisos para asignar el rol %s a %s",
                role.name,
                member,
            )
        except discord.HTTPException:
            logger.exception("Discord rechazo la asignacion de rol a %s", member)

    try:
        await member.send(
            f"Hola {member.display_name}, bienvenido/a a Quickingles Lab for SLP.\n\n"
            "Ya tienes acceso como Alumno SLP. Empieza revisando:\n"
            "- #bienvenida\n"
            "- #normas\n"
            "- #semana-actual\n"
            "- #acceso-notion-slp-funcional\n\n"
            "Este servidor te acompañara durante la preparacion del SLP Funcional."
        )
        logger.info("DM de bienvenida enviado a %s", member)
    except discord.Forbidden:
        logger.warning("No he podido enviar DM a %s; probablemente tiene DMs cerrados.", member)
    except discord.HTTPException:
        logger.exception("Discord rechazo el DM de bienvenida a %s", member)

    if isinstance(canal_bienvenida, discord.TextChannel):
        try:
            await canal_bienvenida.send(
                f"Nuevo alumno en el servidor: {member.mention}\n"
                "Rol asignado: Alumno SLP.\n"
                "Bienvenido/a al programa SLP Funcional."
            )
            logger.info("Aviso publicado en %s", canal_bienvenida.name)
        except discord.Forbidden:
            logger.exception(
                "No tengo permisos para publicar en el canal %s",
                canal_bienvenida.name,
            )
        except discord.HTTPException:
            logger.exception("Discord rechazo el aviso en el canal de bienvenida.")
    else:
        logger.error(
            "No encuentro un canal de texto con CANAL_BIENVENIDA_ID=%s",
            CANAL_BIENVENIDA_ID,
        )


if __name__ == "__main__":
    validar_configuracion()
    bot.run(TOKEN)

