# Quiz Bot - Puntuacion y simulacion SLP

## Idea principal

El Quiz Bot debe simular el formato real del examen con mas precision que un bot de preguntas genericas.

Objetivo:

- Preguntas de opcion multiple.
- Correccion automatica.
- Puntuacion por rangos.
- Feedback calibrado al umbral necesario para alcanzar SLP 2.
- Referencia clara al 70% como objetivo minimo de seguridad.

## Formato recomendado

Cada quiz deberia incluir:

- Destreza: Listening, Reading, Vocabulary, Grammar o mixed.
- Semana del programa.
- Numero de preguntas.
- Respuestas A/B/C/D.
- Resultado en porcentaje.
- Rango de nota.
- Feedback breve.
- Recomendacion de siguiente paso.

## Simulacros por destreza segun guia funcional

Comprension oral:

- 35 textos orales.
- 35 preguntas.
- 4 opciones por pregunta.
- Una unica respuesta correcta.
- 60 minutos.
- Las respuestas erroneas no penalizan.

Comprension escrita:

- 30 textos breves.
- 30 preguntas.
- 4 opciones por pregunta.
- Una unica respuesta correcta.
- 60 minutos.
- Las respuestas erroneas no penalizan.

Modo de entrenamiento recomendado:

- Quiz corto: 10 preguntas.
- Quiz medio: 20 preguntas.
- Simulacro CO completo: 35 preguntas.
- Simulacro CE completo: 30 preguntas.

## Tabla oficial incorporada

Fuente: Convocatoria EMID 2026, BOD de 29 de diciembre de 2025, Resolucion 455/18991/25, base 9.2.

La tabla de porcentajes permite calibrar el Quiz Bot asi:

| Porcentaje | Funcional | Profesional | Experto |
| --- | --- | --- |
| >= 0% y < 30% | 0 | 1 | 2 |
| >= 30% y < 40% | 0+ | 1+ | 2+ |
| >= 40% y < 60% | 1 | 2 | 3 |
| >= 60% y < 70% | 1+ | 2+ | 3+ |
| >= 70% y <= 100% | 2 | 3 | 4 |

## Rango de feedback para SLP Funcional

| Resultado | Grado funcional | Interpretacion pedagogica | Feedback |
| --- | --- | --- | --- |
| 0%-29% | 0 | Muy por debajo del objetivo | Reforzar base antes de avanzar |
| 30%-39% | 0+ | Base insuficiente | Practica guiada y revision de errores frecuentes |
| 40%-59% | 1 | Por debajo del objetivo | Consolidar comprension y vocabulario funcional |
| 60%-69% | 1+ | Cerca del objetivo, pero aun sin llegar al 2 | Mejorar consistencia, precision y gestion de tiempo |
| 70%-100% | 2 | Objetivo funcional 2 alcanzado en simulacro | Mantener ritmo, repetir simulacros y reducir errores |

## Umbral SLP 2

El bot debe usar el 70% como referencia practica para SLP 2.

Regla pedagogica:

- Por debajo de 70%: feedback de mejora prioritaria.
- En torno a 70%: feedback de consolidacion, porque el alumno esta cerca del minimo.
- Por encima de 70%: feedback orientado a seguridad, velocidad y estabilidad.

Importante:

- El bot solo da feedback pedagogico de practica.
- El resultado oficial depende de la prueba y del tribunal.
- No debe prometer aprobados ni equivalencias automaticas.

## Ejemplo de respuesta del bot

```text
Resultado: 14/20 - 70%

Rango: Objetivo SLP 2 justo.

Has alcanzado el umbral de referencia, pero estas en zona de riesgo. 
Para llegar con mas seguridad, revisa los errores y repite un bloque similar esta semana.

Siguiente paso:
Trabaja 10 preguntas mas de Reading con limite de tiempo.
```

## Requisitos para implementacion

Para implementarlo bien necesitamos:

- Numero de preguntas por simulacro.
- Banco de preguntas por destreza.
- Respuestas correctas y explicaciones.
- Tipo de feedback deseado: academico, motivador, militar/profesional o mixto.

## Futuras funciones del Quiz Bot

- `/quiz destreza:reading semana:3`
- `/quiz destreza:listening preguntas:10`
- `/resultado alumno:... quiz:...`
- `/simulacro tipo:spaf`
- `/simulacro destreza:comprension_oral`
- `/simulacro destreza:comprension_escrita`
- Ranking privado para Jesus.
- Historial por alumno.
- Deteccion de puntos debiles.
- Recomendacion automatica de material de Notion.
