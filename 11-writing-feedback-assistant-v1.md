# Writing Feedback Assistant v1

## Estado

Fase preparada, no implementada todavia.

Los documentos fuente incorporados son:

- `fuentes/roadmap_writing_feedback_assistant_v1_reconducido.md`
- `fuentes/guia_bot_discord_quickingles_slp_actualizada_sin_dm_validada.md`

## Decision principal

No se crea un segundo bot.

La siguiente fase ampliara el bot actual:

```text
quickingles-slp-bot/bot.py
```

## Bot actual validado

El bot actual ya hace:

- Detectar cuando Carl-bot asigna el rol `Alumno SLP Funcional`.
- Crear automaticamente un canal privado `#writing-nombre`.
- Publicar instrucciones dentro del canal writing.
- Avisar en `#admin-bot`.
- No enviar DM privado al alumno.

## Objetivo de la fase v1

Detectar writings enviados por alumnos en canales `writing-` y avisar a Jesus en `#admin-bot`.

Sin IA todavia.

## Logica minima

```text
Nuevo mensaje
-> ignorar si lo escribe un bot
-> comprobar si el canal empieza por writing-
-> contar palabras
-> ignorar si tiene menos de 40 palabras
-> avisar en #admin-bot
-> mantener comandos con bot.process_commands(message)
```

## Aviso esperado

```text
Nuevo writing recibido

Alumno: Oliver
Canal: #writing-oliver
Palabras: 126
Estado: pendiente de feedback
```

## Reglas de calidad

- Nada se publica automaticamente al alumno.
- Todo el feedback pasa primero por `#admin-bot`.
- Jesus mantiene el control final.
- No se anade Gemini, OpenAI, Claude, RAG, Google Drive ni VPS en esta fase.

## Prueba prevista

1. Arrancar el bot en local.
2. Oliver publica un writing largo en `#writing-oliver`.
3. El bot avisa en `#admin-bot`.
4. El bot no responde en `#writing-oliver`.
5. El bot no envia DM.
6. Un mensaje corto no dispara aviso.

## Roadmap posterior

1. Deteccion simple.
2. Aviso interno.
3. Feedback simulado.
4. Integracion IA.
5. Prompt SLP personalizado.
6. Prueba con Oliver.
7. Despliegue 24/7.
8. Normativa/RAG/Google Drive.

