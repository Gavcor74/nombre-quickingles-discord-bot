export const PROGRAM = {
  name: "SLP 2 Funcional",
  durationWeeks: 12,
  notion: {
    main:
      "https://www.notion.so/3264c0772d22814fa5c1e1d18403765f",
    spaf:
      "https://www.notion.so/3264c0772d2281e2ac73dda2be9ba04a",
    nato:
      "https://www.notion.so/32a4c0772d2280ae83b2ee378a058503"
  },
  weeks: [
    {
      number: 1,
      mode: "grupal",
      focus: "Arranque, rutina de estudio y base funcional",
      natoBlock: "Vida en base y rutina diaria"
    },
    {
      number: 2,
      mode: "individual",
      focus: "Primer ajuste personal y diagnostico de destrezas",
      natoBlock: "Vida en base y rutina diaria"
    },
    {
      number: 3,
      mode: "grupal",
      focus: "Consolidacion A2-B1 y practica guiada",
      natoBlock: "Vida en base y rutina diaria"
    },
    {
      number: 4,
      mode: "individual",
      focus: "Organizacion, procedimientos y feedback individual",
      natoBlock: "Organizacion de unidad y procedimientos"
    },
    {
      number: 5,
      mode: "grupal",
      focus: "Comunicacion oral y escrita funcional",
      natoBlock: "Organizacion de unidad y procedimientos"
    },
    {
      number: 6,
      mode: "individual",
      focus: "Revision de progreso y correccion personalizada",
      natoBlock: "Organizacion de unidad y procedimientos"
    },
    {
      number: 7,
      mode: "grupal",
      focus: "Seguridad, emergencias y coordinacion",
      natoBlock: "Seguridad, emergencias y coordinacion"
    },
    {
      number: 8,
      mode: "individual",
      focus: "Speaking y writing con feedback personalizado",
      natoBlock: "Seguridad, emergencias y coordinacion"
    },
    {
      number: 9,
      mode: "grupal",
      focus: "Comprension auditiva y expresion basica integrada",
      natoBlock: "Seguridad, emergencias y coordinacion"
    },
    {
      number: 10,
      mode: "individual",
      focus: "Repaso integrado y preparacion de simulacro",
      natoBlock: "Repaso integrado y simulacros"
    },
    {
      number: 11,
      mode: "grupal",
      focus: "Simulacros y gestion del tiempo de examen",
      natoBlock: "Repaso integrado y simulacros"
    },
    {
      number: 12,
      mode: "individual",
      focus: "Cierre, simulacro final y plan de ultima semana",
      natoBlock: "Repaso integrado y simulacros"
    }
  ]
};

export function getCurrentWeek(startDateText, now = new Date()) {
  const start = new Date(`${startDateText}T00:00:00`);
  if (Number.isNaN(start.getTime())) return PROGRAM.weeks[0];

  const msPerWeek = 7 * 24 * 60 * 60 * 1000;
  const index = Math.floor((now.getTime() - start.getTime()) / msPerWeek);
  const boundedIndex = Math.max(0, Math.min(PROGRAM.weeks.length - 1, index));
  return PROGRAM.weeks[boundedIndex];
}

