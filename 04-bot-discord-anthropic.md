# Bot Discord + Anthropic

## Estado

El bot personalizado queda como fase posterior.

En la fase actual se usara Carl-bot para automatizacion basica:

- Reaction roles.
- Welcome message.
- Scheduled messages.
- Tags.

El bot Node.js + Anthropic se mantiene como evolucion cuando el servidor ya este probado con alumnos reales.

## Enfoque recomendado

Claude no debe sustituir a Jesus como profesor. Debe actuar como asistente operativo:

- Responder dudas frecuentes.
- Orientar al alumno hacia la semana actual.
- Recordar tareas y enlaces.
- Ayudar con practica y ejemplos.
- Preparar borradores de anuncios.
- Ordenar entregas y feedback.

## Arquitectura

Discord:

- Slash commands.
- Roles y permisos.
- Canales de entregas.
- Hilos por alumno/entrega.

Bot Node.js:

- `discord.js` para Discord.
- SDK oficial `@anthropic-ai/sdk` para Claude.
- Configuracion por `.env`.
- Datos del programa en `src/config/program.js`.

Anthropic:

- API: Messages API.
- Modelo configurable con `ANTHROPIC_MODEL`.
- Prompt de sistema con reglas academicas.

## Comandos MVP

- `/semana`: semana actual.
- `/notion`: enlaces principales.
- `/pregunta texto:...`: pregunta privada a Claude.
- `/entrega destreza:... titulo:... contenido:...`: entrega estructurada.
- `/anuncio-semana`: anuncio para profesor/admin.

## Riesgos a controlar

- Coste por uso de API si muchos alumnos preguntan demasiado.
- Respuestas demasiado largas o poco pedagogicas.
- Alumnos usando Claude para hacer tareas completas.
- Confusion entre preparacion SPAF real y vocabulario NATO.
- Privacidad de entregas y datos personales.

## Medidas de control

- Respuestas privadas para `/pregunta`.
- Limite de tokens en cada respuesta.
- Prompt que no promete aprobados.
- Prompt que diferencia SPAF y NATO.
- Comandos administrativos con permisos.
- Entregas en hilos para trazabilidad.

## Siguiente evolucion

- Base de datos de progreso por alumno.
- Sincronizacion con Notion.
- Recordatorios automaticos.
- Resumen semanal para Jesus.
- Panel de alumnos inactivos.
- Rubricas de writing y speaking.
- Quiz Bot con opcion multiple, rangos de puntuacion y feedback calibrado al 70% necesario para SLP 2.
