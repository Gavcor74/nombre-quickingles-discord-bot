import "dotenv/config";
import {
  Client,
  Events,
  GatewayIntentBits,
  ChannelType
} from "discord.js";
import { PROGRAM, getCurrentWeek } from "./config/program.js";
import { askClaude, createClaudeClient } from "./services/claude.js";

const {
  DISCORD_TOKEN,
  ANTHROPIC_API_KEY,
  ANTHROPIC_MODEL = "claude-sonnet-4-5",
  PROGRAM_START_DATE = "2026-05-04"
} = process.env;

if (!DISCORD_TOKEN) {
  throw new Error("Falta DISCORD_TOKEN en .env");
}

if (!ANTHROPIC_API_KEY) {
  throw new Error("Falta ANTHROPIC_API_KEY en .env");
}

const discord = new Client({
  intents: [GatewayIntentBits.Guilds]
});
const claude = createClaudeClient(ANTHROPIC_API_KEY);

discord.once(Events.ClientReady, (client) => {
  console.log(`Bot conectado como ${client.user.tag}`);
});

discord.on(Events.InteractionCreate, async (interaction) => {
  if (!interaction.isChatInputCommand()) return;

  const week = getCurrentWeek(PROGRAM_START_DATE);

  try {
    if (interaction.commandName === "semana") {
      await interaction.reply({
        ephemeral: true,
        content:
          `Semana ${week.number} (${week.mode}).\n` +
          `Foco: ${week.focus}.\n` +
          `Bloque NATO: ${week.natoBlock}.`
      });
      return;
    }

    if (interaction.commandName === "notion") {
      await interaction.reply({
        ephemeral: true,
        content:
          `Enlaces principales:\n` +
          `Programa: ${PROGRAM.notion.main}\n` +
          `SPAF/examen real: ${PROGRAM.notion.spaf}\n` +
          `NATO/vocabulario: ${PROGRAM.notion.nato}`
      });
      return;
    }

    if (interaction.commandName === "pregunta") {
      await interaction.deferReply({ ephemeral: true });
      const text = interaction.options.getString("texto", true);
      const answer = await askClaude({
        client: claude,
        model: ANTHROPIC_MODEL,
        userText: text,
        week
      });
      await interaction.editReply(answer || "No he podido generar respuesta.");
      return;
    }

    if (interaction.commandName === "entrega") {
      const skill = interaction.options.getString("destreza", true);
      const title = interaction.options.getString("titulo", true);
      const content = interaction.options.getString("contenido", true);
      const threadName = `${skill}-${interaction.user.username}-${Date.now()}`;

      await interaction.reply({
        content:
          `Entrega recibida de ${interaction.user}.\n` +
          `Destreza: ${skill}\n` +
          `Semana: ${week.number}\n` +
          `Titulo: ${title}\n\n` +
          content
      });

      if (interaction.channel?.type === ChannelType.GuildText) {
        const reply = await interaction.fetchReply();
        await reply.startThread({
          name: threadName.slice(0, 90),
          autoArchiveDuration: 10080
        });
      }
      return;
    }

    if (interaction.commandName === "anuncio-semana") {
      await interaction.reply(
        `Semana ${week.number} - ${week.mode}\n\n` +
          `Foco: ${week.focus}.\n` +
          `Bloque NATO: ${week.natoBlock}.\n\n` +
          `Recordad trabajar la parte SPAF como preparacion del examen real y usar NATO como complemento de vocabulario profesional.`
      );
    }
  } catch (error) {
    console.error(error);
    const message =
      "Ha ocurrido un error gestionando el comando. Jesus lo revisara.";
    if (interaction.deferred || interaction.replied) {
      await interaction.editReply(message);
    } else {
      await interaction.reply({ ephemeral: true, content: message });
    }
  }
});

await discord.login(DISCORD_TOKEN);

