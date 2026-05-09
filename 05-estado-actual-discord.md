# Quickingles Lab for SLP - Estado Actual Discord

## Contexto

Servidor de Discord para preparacion STANAG 6001 Nivel 2, SLP Funcional, orientado a militares espanoles FAS.

- Programa: 12 semanas.
- Capacidad prevista: maximo 10 alumnos.
- Alumnos activos ahora: 2.
- Notion sigue siendo la fuente principal del curso.
- Discord funciona como campus operativo: comunidad, ritmo semanal, entregas, feedback y clases.

## Estructura de canales completada

### COMUNIDAD

- `general`
- `dudas-del-examen`
- `comparte-tu-progreso`

### RECURSOS

- `recursos-examen`

### INICIO

- `bienvenida`
- `anuncios`
- `normas`

### MATERIAL DEL CURSO FUNCIONAL

- `practica-slp` - foro.
- `acceso-notion-slp-funcional`
- `semana-actual`

### ENTREGAS Y FEEDBACK

- `writing-oliver` - canal privado por alumno.
- `writing-alumno2` - canal privado por alumno.

### CLASES EN DIRECTO

- `calendario-clases`
- `Aula grupal` - voz.
- `Sala individual` - voz.

### SLP PROFESIONAL

Estado: en construccion.

- `acceso-notion-slp-profesional`

## Carl-bot - Hecho

- Reaction roles funcionando en `bienvenida`.
- La reaccion asigna automaticamente el rol `Alumno SLP Funcional`.
- Carl-bot actua como puerta de entrada del alumno al servidor.

## Quickingles SLP Bot - Hecho

- Bot propio operativo en local.
- Detecta cuando el alumno recibe el rol `Alumno SLP Funcional`.
- Crea automaticamente el canal privado `writing-nombre`.
- Publica instrucciones dentro del canal writing.
- Avisa en `admin-bot`.
- No envia DM privado al alumno.
- Flujo validado con Jesus Assistant y Oliver.

## Carl-bot - Pendiente

- Welcome message automatico para nuevos alumnos.
- Scheduled Message diario a las 09:00 en `semana-actual`.
- Tags:
  - `!writing`
  - `!speaking`
  - `!stanag`
  - `!spaf`
- Desactivar reaction role de SLP 3 hasta lanzamiento.

## Stack decidido

### Ahora

- Carl-bot para automatizacion basica.
- Notion como repositorio del contenido.
- Discord como interfaz operativa.

### Fases posteriores

- Writing Feedback Assistant v1 sobre el bot Python actual.
- Posible integracion posterior con Anthropic/Claude, OpenAI o Gemini.
- Posible seguimiento de progreso por alumno.
- Quiz Bot para simulacros de opcion multiple con rangos de puntuacion y feedback calibrado al objetivo SLP 2.

## Decision importante

El contenido del curso no se migra a Discord.

Discord debe referenciar Notion y ordenar la experiencia del alumno:

- Que toca esta semana.
- Donde esta el material.
- Donde entregar.
- Donde recibir feedback.
- Donde preguntar.
- Cuando hay clase.

## Contexto legal

Se ha reservado el documento `07-marco-legal-slp.md` para incorporar el marco legal del SLP cuando el archivo fuente tenga contenido disponible.

Tambien se ha reservado el documento `08-convocatoria-emid-2026.md` para incorporar la convocatoria EMID 2026 cuando el archivo fuente tenga contenido disponible.

Este contexto ayudara a responder o redactar mensajes sobre:

- STANAG 6001.
- SLP Funcional.
- Convocatoria EMID 2026.
- Guia practica de prueba de nivel funcional EMID.
- Limites del programa.
- Diferencia entre preparacion academica y normativa oficial.
