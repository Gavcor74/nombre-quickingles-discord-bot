# Reconducción — Writing Feedback Assistant v1

**Proyecto:** Discord Quickinglés SLP Militar  
**Servidor:** Quickinglés Lab for SLP  
**Bot actual:** Quickinglés SLP Bot  
**Fecha:** 09/05/2026  
**Objetivo del documento:** dejar cerrado el contexto correcto para abrir una nueva fase sin perder el hilo ni mezclar demasiadas cosas a la vez.

---

## 1. Por qué se crea este documento

El hilo nuevo sobre el segundo bot empezó mezclando demasiadas capas:

- normativa SLP;
- PDFs;
- Google Drive;
- RAG;
- Gemini;
- EasyPanel;
- FAQ STANAG;
- corrección de writings;
- despliegue 24/7.

La visión general no está mal, pero el orden sí se estaba acelerando demasiado.

Este documento reconduce la fase siguiente del proyecto para que siga la misma forma de trabajo que ya ha funcionado con el primer MVP:

```text
modificación pequeña
↓
prueba local
↓
validación con usuario
↓
documentación Markdown
↓
subida a fuentes del proyecto DISCORD
```

---

## 2. Estado real del bot actual

Ya existe un bot funcional llamado:

```text
Quickinglés SLP Bot
```

No estamos empezando desde cero.

El bot actual ya hace esto:

```text
Alumno entra al servidor
↓
Solo ve #bienvenida
↓
Pulsa ✅ en el mensaje de Carl-bot
↓
Carl-bot asigna el rol Alumno SLP Funcional
↓
Quickinglés SLP Bot detecta ese rol
↓
Crea automáticamente #writing-nombre
↓
Publica instrucciones dentro del canal writing
↓
Avisa en #admin-bot
↓
No envía DM privado al alumno
```

Estado validado:

```text
✅ Carl-bot operativo
✅ Quickinglés SLP Bot operativo
✅ Creación automática de canales writing
✅ Canales privados individuales
✅ #admin-bot operativo
✅ Permisos validados
✅ Sin DM privado al alumno
✅ Probado con Jesús Assistant
✅ Probado con Oliver
```

---

## 3. Regla importante: no crear otro bot separado

La siguiente fase **NO** debe crear otro bot independiente.

La siguiente fase debe ser una ampliación del archivo actual:

```text
bot.py
```

El bot actual ya tiene:

- conexión a Discord;
- carga de variables desde `.env`;
- intents configurados;
- función `crear_canal_writing()`;
- función `avisar_admin()`;
- evento `on_ready()`;
- evento `on_member_update()`;
- comando manual `!crearwriting`;
- acceso a `#admin-bot`;
- permisos para trabajar en `ENTREGAS Y FEEDBACK`.

Por tanto, la fase siguiente debe añadirse encima de lo que ya funciona.

---

## 4. Nueva fase

Nombre de la nueva fase:

```text
Writing Feedback Assistant v1
```

Objetivo general:

```text
Detectar writings enviados por alumnos en canales writing-
y avisar a Jesús en #admin-bot.
```

Objetivo inmediato:

```text
Añadir detección básica de mensajes largos en canales writing-.
```

No se empieza todavía con IA.

---

## 5. Qué debe hacer primero la nueva fase

Primera versión funcional:

```text
Alumno escribe en #writing-oliver
↓
Quickinglés SLP Bot detecta el mensaje
↓
Comprueba que el canal empieza por writing-
↓
Ignora mensajes del propio bot
↓
Ignora mensajes cortos
↓
Si el mensaje tiene suficiente longitud, lo considera un writing
↓
Publica aviso en #admin-bot
```

Ejemplo de aviso esperado:

```text
📝 Nuevo writing recibido

Alumno: Oliver
Canal: #writing-oliver
Palabras: 126
Estado: pendiente de feedback
```

Nada más.

---

## 6. Qué NO debe hacer todavía

En esta fase inicial no se debe meter:

```text
❌ Gemini
❌ OpenAI
❌ Google Drive
❌ PDFs
❌ RAG
❌ FAISS
❌ Chroma
❌ EasyPanel
❌ VPS
❌ FAQ STANAG
❌ Bot de progreso
❌ Quiz diario
❌ Publicación automática de feedback al alumno
```

Motivo:

Hay que evitar abrir cuatro frentes al mismo tiempo.

El orden correcto es:

```text
1. Detección simple
2. Aviso interno
3. Feedback simulado
4. IA
5. Prompt SLP
6. Pruebas
7. Despliegue 24/7
8. Normativa / RAG / Google Drive
```

---

## 7. Regla crítica de calidad

Nada se publica automáticamente al alumno.

Todo lo relacionado con feedback debe ir primero a:

```text
#admin-bot
```

Motivo:

El bot debe ahorrar tiempo a Jesús, no sustituir su criterio.

La calidad percibida del programa depende de que el profesor mantenga el control final.

Flujo correcto:

```text
Alumno entrega writing
↓
Bot detecta
↓
Bot analiza o prepara aviso
↓
Bot informa a Jesús
↓
Jesús revisa
↓
Jesús decide qué responder al alumno
```

---

## 8. Actualización técnica concreta

La actualización principal será añadir un nuevo listener:

```python
on_message
```

El bot pasará de tener solo:

```text
on_member_update
→ crear canal writing
```

a tener también:

```text
on_message
→ detectar writing enviado
→ avisar en #admin-bot
```

La ampliación debe hacerse sin romper lo que ya funciona.

---

## 9. Lógica inicial del `on_message`

La lógica mínima debe ser:

```text
1. Ignorar mensajes del propio bot.
2. Comprobar que el canal empieza por writing-.
3. Ignorar mensajes de menos de 40 palabras.
4. Enviar aviso a #admin-bot.
5. Mantener activos los comandos existentes con bot.process_commands(message).
```

Pseudoflujo:

```text
Nuevo mensaje
↓
¿lo ha escrito un bot?
   sí → ignorar
   no → seguir
↓
¿el canal empieza por writing-?
   no → ignorar
   sí → seguir
↓
¿tiene 40 palabras o más?
   no → ignorar
   sí → avisar a #admin-bot
```

---

## 10. Filtro de longitud

Regla inicial:

```text
Mínimo 40 palabras
```

Motivo:

Evitar que el bot reaccione a mensajes como:

```text
ok
gracias
lo mando luego
mañana lo subo
profe, una duda
```

Esto se puede ajustar más adelante.

---

## 11. Formato inicial del aviso en #admin-bot

Primera versión sin IA:

```text
📝 Nuevo writing recibido

Alumno:
Canal:
Palabras:
Estado: pendiente de feedback
```

Ejemplo:

```text
📝 Nuevo writing recibido

Alumno: Oliver
Canal: #writing-oliver
Palabras: 143
Estado: pendiente de feedback
```

Esto ya aporta valor porque evita que se escape una entrega.

---

## 12. Fases correctas de implementación

### Fase 1 — Detección simple

Objetivo:

```text
Detectar un writing largo en un canal writing- y avisar en #admin-bot.
```

Sin IA.

Tareas:

```text
[ ] Añadir on_message
[ ] Filtrar canales writing-
[ ] Ignorar bots
[ ] Contar palabras
[ ] Ignorar mensajes cortos
[ ] Avisar en #admin-bot
[ ] Probar con Oliver
[ ] Documentar resultado
```

---

### Fase 2 — Feedback simulado

Objetivo:

```text
Generar una estructura de feedback fija, sin IA todavía.
```

Ejemplo:

```text
Errores principales:
- Pendiente de análisis IA

Feedback sugerido:
- Revisar manualmente

Siguiente mejora:
- Esperando revisión del profesor
```

Esto permite probar el formato antes de meter API.

---

### Fase 3 — Integración IA

Objetivo:

```text
Enviar el writing a un modelo de IA y recibir análisis.
```

Opciones futuras:

```text
Gemini 2.5 Flash
OpenAI API
Claude API
```

Decisión pendiente.

---

### Fase 4 — Prompt SLP personalizado

Objetivo:

```text
Evitar feedback genérico.
```

El feedback debe sonar a Quickinglés SLP Militar, no a academia genérica.

Formato deseado:

```text
Errores principales:
1.
2.
3.

Feedback sugerido:
...

Siguiente mejora recomendada:
...
```

---

### Fase 5 — Prueba con Oliver

Objetivo:

```text
Validar el flujo real antes de usarlo con alumnos reales.
```

Comprobaciones:

```text
[ ] Oliver publica un writing largo
[ ] El bot detecta el mensaje
[ ] El bot avisa en #admin-bot
[ ] No responde en #writing-oliver
[ ] No envía DM
[ ] No detecta mensajes cortos
```

---

### Fase 6 — Despliegue 24/7

Solo cuando todo funcione en local.

Opciones:

```text
EasyPanel
VPS
```

Motivo:

Para onboarding, local vale porque Jesús controla cuándo invita alumnos.

Para feedback automático, el bot debe estar activo siempre porque el alumno puede escribir a cualquier hora.

---

## 13. Roadmap futuro, pero no inmediato

El roadmap amplio queda como visión futura:

```text
1. Acuse de recibo en writing-
2. Aviso interno en #admin-bot
3. Feedback IA privado para Jesús
4. FAQ básica en #dudas-del-examen
5. PDFs locales con normativa
6. RAG básico con FAISS/Chroma
7. Google Drive como repositorio maestro
8. Sincronización local de PDFs
9. EasyPanel/VPS 24/7
```

Pero el siguiente paso operativo real es solo:

```text
on_message + detección writing + aviso admin
```

---

## 14. Normativa SLP y PDFs

La idea futura de usar normativa SLP está bien.

Arquitectura futura posible:

```text
Google Drive
↓
Script sincroniza PDFs
↓
Copias locales
↓
Extracción de texto
↓
Chunks
↓
Embeddings
↓
FAISS / Chroma
↓
IA responde usando contexto recuperado
```

Pero no se debe implementar ahora.

Primero hay que validar que el bot ayuda en Discord con writings.

---

## 15. Google Drive

Google Drive debe quedar para una fase posterior.

Decisión técnica recomendada:

```text
Google Drive = repositorio maestro
Bot = trabaja sobre copia local indexada
```

No conectar el bot a Drive en tiempo real todavía.

Motivos:

```text
✅ Más estable
✅ Menos latencia
✅ Menos problemas OAuth
✅ Más simple de desplegar
✅ Más barato
✅ Más robusto
```

---

## 16. EasyPanel / VPS

No desplegar todavía.

Primero:

```text
1. Modificar bot.py en local.
2. Probar detección básica.
3. Probar con Oliver.
4. Documentar.
5. Añadir IA.
6. Probar IA.
7. Documentar.
8. Solo entonces desplegar.
```

---

## 17. Metodología obligatoria del proyecto

En este proyecto se sigue una metodología fija:

```text
1. No avanzar a lo loco.
2. Hacer una modificación pequeña cada vez.
3. Probarla en local.
4. Confirmar que funciona con usuario de prueba.
5. Documentar lo realizado en una guía Markdown.
6. Descargar la guía actualizada.
7. Subirla a las fuentes del proyecto DISCORD.
8. Usar esa guía como referencia viva en futuros hilos.
```

---

## 18. Guía viva existente

Ya existe una guía viva del bot:

```text
guia_bot_discord_quickingles_slp_actualizada_oliver_validado.md
```

Esa guía documenta:

```text
- estructura real del servidor;
- roles;
- permisos;
- configuración de Carl-bot;
- creación del bot en Discord Developer Portal;
- OAuth2;
- intents;
- .env;
- bot.py;
- pruebas con Jesús Assistant;
- prueba con Oliver;
- eliminación del DM privado;
- protocolo operativo local.
```

Para esta nueva fase debe seguirse la misma dinámica.

---

## 19. Qué debe documentarse en cada avance

Cada avance importante debe añadirse al Markdown:

```text
- nueva función añadida;
- cambios en bot.py;
- errores encontrados;
- solución aplicada;
- pruebas realizadas;
- estado final;
- siguiente paso.
```

Después de cada bloque relevante:

```text
1. Generar nueva versión descargable del Markdown.
2. Subirla a fuentes del proyecto DISCORD.
3. Usarla como referencia principal en futuros hilos.
```

---

## 20. Frase para abrir el nuevo hilo

Usar esta frase para empezar el hilo nuevo:

```text
Seguimos con Writing Feedback Assistant v1. 
No vamos a crear un bot nuevo, vamos a ampliar el bot.py actual.
Primer objetivo: añadir on_message para detectar mensajes largos en canales writing- y avisar en #admin-bot, sin IA todavía.
Seguimos la metodología del proyecto: cambio pequeño, prueba local, validación con Oliver, documentación Markdown y subida a fuentes DISCORD.
```

---

## 21. Primer paso operativo del nuevo hilo

Primer paso real:

```text
Modificar bot.py para añadir detección básica de writings.
```

Resultado esperado del primer test:

```text
Oliver escribe un texto largo en #writing-oliver
↓
El bot publica en #admin-bot:

📝 Nuevo writing recibido
Alumno: Oliver
Canal: #writing-oliver
Palabras: X
Estado: pendiente de feedback
```

Nada más.

---

## 22. Criterio estratégico final

El objetivo no es construir un Discord lleno de IA genérica.

El objetivo es construir un asistente operativo especializado en STANAG 6001.

El sistema debe dar sensación de:

```text
✅ orden
✅ soporte profesional
✅ rapidez
✅ contexto militar
✅ seguimiento real
```

Pero manteniendo:

```text
Jesús = autoridad final
```

La IA ayuda.  
El profesor decide.

---

## 23. Estado final de este documento

Este documento cierra y reconduce los hilos sobre:

```text
- segundo bot;
- Writing Feedback Assistant;
- normativa SLP;
- Gemini;
- RAG;
- Google Drive;
- EasyPanel.
```

La decisión final es:

```text
No avanzar todavía a normativa, IA, RAG ni VPS.
Primero ampliar el bot actual con detección básica de writings y aviso interno.
```
