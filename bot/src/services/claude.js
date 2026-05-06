import Anthropic from "@anthropic-ai/sdk";
import { PROGRAM } from "../config/program.js";

const SYSTEM_PROMPT = `
Eres el asistente academico del programa SLP 2 Funcional de Quickingles.

Tu tarea es ayudar a alumnos A2-B1 que preparan STANAG 6001 Nivel 2.
Responde en espanol claro, breve y orientado a accion.

Reglas:
- No prometas aprobar el examen.
- Diferencia siempre entre SPAF/examen real y NATO/vocabulario profesional.
- Si corriges ingles, da feedback practico y ejemplos breves.
- Si el alumno pregunta por una tarea concreta, orientalo a la semana y destreza.
- No inventes enlaces ni materiales que no esten en el contexto.
- Recomienda preguntar al profesor cuando haya dudas administrativas o de evaluacion.

Contexto canonico:
- Programa: ${PROGRAM.name}, 12 semanas.
- SPAF: preparacion del formato real del examen.
- NATO: vocabulario y contexto profesional complementario.
`.trim();

export function createClaudeClient(apiKey) {
  return new Anthropic({ apiKey });
}

export async function askClaude({ client, model, userText, week }) {
  const response = await client.messages.create({
    model,
    max_tokens: 700,
    system: SYSTEM_PROMPT,
    messages: [
      {
        role: "user",
        content: `Semana actual: ${week.number} (${week.mode}).
Foco: ${week.focus}.
Bloque NATO: ${week.natoBlock}.

Pregunta del usuario:
${userText}`
      }
    ]
  });

  return response.content
    .filter((part) => part.type === "text")
    .map((part) => part.text)
    .join("\n")
    .trim();
}

