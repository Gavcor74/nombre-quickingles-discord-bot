import "dotenv/config";
import { REST, Routes } from "discord.js";
import { commands } from "./commands.js";

const { DISCORD_TOKEN, DISCORD_CLIENT_ID, DISCORD_GUILD_ID } = process.env;

if (!DISCORD_TOKEN || !DISCORD_CLIENT_ID || !DISCORD_GUILD_ID) {
  throw new Error(
    "Faltan DISCORD_TOKEN, DISCORD_CLIENT_ID o DISCORD_GUILD_ID en .env"
  );
}

const rest = new REST({ version: "10" }).setToken(DISCORD_TOKEN);

await rest.put(
  Routes.applicationGuildCommands(DISCORD_CLIENT_ID, DISCORD_GUILD_ID),
  { body: commands.map((command) => command.toJSON()) }
);

console.log("Comandos registrados en el servidor.");

