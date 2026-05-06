# Calendario de Clases en Discord

## Recomendacion

Usar dos niveles:

1. `#calendario-clases` como tablón visible con el resumen del programa.
2. `Eventos` de Discord para programar cada clase y activar notificaciones.

## Como usar Eventos de Discord

Para cada clase:

1. Ir a `Eventos`, en la parte superior izquierda del servidor.
2. Crear evento.
3. Elegir ubicacion:
   - `Aula grupal` para clases grupales.
   - `Sala individual` para sesiones individuales.
   - `Otro lugar` si la clase fuera por Zoom, Meet u otro enlace externo.
4. Poner titulo, fecha, hora y descripcion.
5. Publicar el evento.

Los alumnos podran marcar interes y recibir aviso cuando el evento empiece.

## Cadencia del programa

Programa SLP Funcional de 12 semanas:

- Semanas 1, 3, 5, 7, 9 y 11: sesion grupal.
- Semanas 2, 4, 6, 8, 10 y 12: sesion individual.

## Mensaje fijado recomendado para `#calendario-clases`

```text
📅 Calendario de clases - SLP Funcional

Aquí aparecerán las clases del programa y los avisos importantes.

Funcionamiento:

• Las clases grupales se harán en Aula grupal.
• Las sesiones individuales se harán en Sala individual.
• Las semanas 1, 3, 5, 7, 9 y 11 son grupales.
• Las semanas 2, 4, 6, 8, 10 y 12 son individuales.

Importante:

Marca "Me interesa" en los eventos de Discord para recibir aviso cuando la clase vaya a empezar.

Si hay cambio de hora o enlace, se avisará aquí y en #anuncios.
```

## Plantilla de evento grupal

Titulo:

```text
SLP Funcional - Semana X - Clase grupal
```

Descripcion:

```text
Clase grupal de la semana X del programa SLP Funcional.

Foco de la semana:
[añadir foco]

Canal:
Aula grupal

Antes de la clase:
1. Revisa #semana-actual.
2. Entra en Notion y prepara el material de la semana.
3. Trae tus dudas principales.
```

## Plantilla de evento individual

Titulo:

```text
SLP Funcional - Semana X - Sesion individual
```

Descripcion:

```text
Sesion individual de seguimiento de la semana X.

Objetivo:
- Revisar progreso.
- Corregir errores frecuentes.
- Ajustar speaking/writing/listening/reading segun necesidad.

Canal:
Sala individual

Antes de la sesion:
1. Ten preparadas tus dudas.
2. Revisa tus entregas pendientes.
3. Entra puntual a la sala.
```

## Carl-bot

Carl-bot puede complementar el calendario con mensajes programados, por ejemplo:

- Recordatorio diario a las 09:00 en `#semana-actual`.
- Recordatorio semanal de clase.
- Aviso de entrega pendiente.

Ejemplo de mensaje programado:

```text
📌 Recordatorio SLP Funcional

Revisa #semana-actual y comprueba qué tarea toca esta semana.
Si tienes clase programada, marca "Me interesa" en el evento correspondiente.
```

## Bot personalizado

En fase posterior, el bot propio podria:

- Crear eventos automaticamente.
- Leer fecha de inicio del programa.
- Calcular semana actual.
- Publicar recordatorios.
- Enviar resumen semanal.
- Adaptar eventos para grupos o alumnos individuales.

