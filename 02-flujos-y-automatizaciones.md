# Flujos y Automatizaciones

## Flujo de onboarding

1. El alumno entra al servidor.
2. Lee `bienvenida`, `normas` y `empieza-aqui`.
3. Recibe rol `Alumno SLP 2` y su grupo.
4. Se le muestra la semana actual.
5. Se le entrega enlace principal de Notion.
6. Se le indica donde entregar writings y speaking.

## Flujo semanal

Cada lunes:

- Publicar objetivo semanal.
- Publicar enlaces de Notion.
- Recordar entregas.
- Avisar si esa semana es grupal o individual.

Mitad de semana:

- Recordatorio de practica.
- Pregunta de control o mini reto.

Fin de semana:

- Aviso de cierre.
- Resumen de entregas pendientes.
- Preparacion de la siguiente semana.

## Flujo de writing

1. Alumno publica entrega en `entrega-writing`.
2. Bot o profesor crea hilo.
3. Alumno incluye semana, tipo de writing y texto.
4. Profesor corrige en el hilo.
5. Se marca estado: recibido, en correccion, corregido.

## Flujo de speaking

1. Alumno envia audio o solicita practica.
2. Profesor responde con feedback.
3. Se registran patrones a mejorar: fluidez, pronunciacion, BORE, opinion, estructura.

## Automatizaciones candidatas

Bot minimo:

- Mensaje semanal automatico.
- Comando `/semana` para consultar tarea actual.
- Comando `/notion` para devolver enlaces clave.
- Comando `/entrega` para crear una entrega estructurada.
- Recordatorios de clase.

Bot avanzado:

- Sincronizacion parcial con Notion.
- Registro de entregas en base de datos.
- Panel de progreso por alumno.
- Avisos de alumnos inactivos.
- Resumen semanal para Jesus.

## Datos que necesitaremos

- Fecha de inicio de la cohorte.
- Numero de alumnos.
- Grupos de 2-3 alumnos.
- Enlaces definitivos de Notion que podran ver los alumnos.
- Si Discord sera solo soporte o tambien aula principal.
- Si las correcciones seguiran por WhatsApp o migraran a Discord.
- Si quieres bot propio o configuracion manual inicial.

