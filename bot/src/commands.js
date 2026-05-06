import {
  SlashCommandBuilder,
  PermissionFlagsBits
} from "discord.js";

export const commands = [
  {
    data: new SlashCommandBuilder()
      .setName("semana")
      .setDescription("Muestra la semana actual del programa SLP Funcional.")
  },
  {
    data: new SlashCommandBuilder()
      .setName("notion")
      .setDescription("Devuelve los enlaces principales del programa en Notion.")
  },
  {
    data: new SlashCommandBuilder()
      .setName("pregunta")
      .setDescription("Pregunta a Claude sobre el programa SLP Funcional.")
      .addStringOption((option) =>
        option
          .setName("texto")
          .setDescription("Tu duda o peticion.")
          .setRequired(true)
      )
  },
  {
    data: new SlashCommandBuilder()
      .setName("entrega")
      .setDescription("Crea una entrega estructurada para writing o speaking.")
      .addStringOption((option) =>
        option
          .setName("destreza")
          .setDescription("Destreza de la entrega.")
          .setRequired(true)
          .addChoices(
            { name: "Writing", value: "writing" },
            { name: "Speaking", value: "speaking" }
          )
      )
      .addStringOption((option) =>
        option
          .setName("titulo")
          .setDescription("Titulo corto de la entrega.")
          .setRequired(true)
      )
      .addStringOption((option) =>
        option
          .setName("contenido")
          .setDescription("Texto, enlace o descripcion de la entrega.")
          .setRequired(true)
      )
  },
  {
    data: new SlashCommandBuilder()
      .setName("anuncio-semana")
      .setDescription("Genera un anuncio semanal para el canal actual.")
      .setDefaultMemberPermissions(PermissionFlagsBits.ManageGuild)
  }
].map((command) => command.data);

