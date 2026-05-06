# Plan de Implementacion Codex + Claude

## Estado actual

El servidor Discord ya tiene una estructura funcional creada manualmente.

La prioridad ya no es crear el servidor desde cero, sino:

- Ajustar mensajes de bienvenida, normas y anuncios.
- Configurar automatizaciones en Carl-bot.
- Preparar contenido recurrente para `semana-actual`.
- Mantener el bot personalizado como fase posterior.

## Fase 1 - Diseno operativo

Responsable principal: Claude + Jesus.

Decisiones:

- Tono del servidor.
- Normas de convivencia.
- Mensaje de bienvenida.
- Experiencia del alumno durante las primeras 24 horas.
- Que parte queda en Notion y que parte se mueve a Discord.

Salida esperada:

- Copy final de bienvenida.
- Normas.
- Estructura validada de canales.
- Criterios de entrega.

## Fase 2 - Estructura Discord

Responsable principal: Codex.

Estado: estructura base completada.

Tareas restantes:

- Revisar permisos finales por rol.
- Crear plantillas de mensajes fijados.
- Validar canales privados por alumno.
- Mantener `SLP Profesional` oculto o claramente marcado como en construccion.

Salida esperada:

- Documento de configuracion manual.
- Opcional: script/bot para crear estructura si tenemos token y permisos.

## Fase 3 - Automatizaciones

Responsable principal: Codex, con criterio pedagogico de Claude.

Tareas inmediatas con Carl-bot:

- Welcome message automatico.
- Scheduled message diario 09:00 en `semana-actual`.
- Tags `!writing`, `!speaking`, `!stanag`, `!spaf`.
- Desactivar reaction role de SLP 3 hasta lanzamiento.

Tareas posteriores con bot propio:

- Comandos slash.
- Conexion Anthropic/Claude.
- Registro de entregas.
- Resumen semanal para Jesus.
- Seguimiento por alumno.

Salida esperada:

- Bot funcional o set de automatizaciones.
- Instrucciones de despliegue.

## Fase 4 - Piloto

Responsable principal: Jesus.

Tareas:

- Probar con 1-3 alumnos.
- Detectar confusion.
- Ajustar canales.
- Ajustar frecuencia de avisos.

Salida esperada:

- Version 1 estable del ecosistema.

## Proxima decision

Antes de implementar el bot propio, hay que terminar:

- Mensajes de bienvenida y normas.
- Flujo de `semana-actual`.
- Automatizaciones basicas en Carl-bot.
- Permisos finales de canales privados.
