import { Level } from '../models/level.model';

const levelNames: Record<string, string[]> = {
  Java: [
    'Variabler',
    'If-statements',
    'Loops',
    'Metoder',
    'Arrays',
    'Klasser',
    'Objekter',
    'Afsluttende opgave'
  ],
  HTML: [
    'Grundstruktur',
    'Overskrifter og tekst',
    'Links',
    'Billeder',
    'Lister',
    'Formularer',
    'Knapper',
    'Afsluttende opgave'
  ],
  CSS: [
    'Farver',
    'Skrifttyper',
    'Afstand',
    'Kanter',
    'Flexbox',
    'Grid',
    'Hover-effekter',
    'Afsluttende opgave'
  ],
  JavaScript: [
    'Variabler',
    'If-statements',
    'Funktioner',
    'Loops',
    'Arrays',
    'DOM',
    'Events',
    'Afsluttende opgave'
  ]
};

function createLevels(language: string, names: string[]): Level[] {
  return names.map((name, index) => {
    const id = index + 1;

    return {
      id,
      language,
      title: `${language} - ${name}`,
      description: `I dette level lærer du om ${name.toLowerCase()} i ${language}.`,
      explanation: `Her får du en kort forklaring på, hvordan ${name.toLowerCase()} bruges i ${language}.`,
      codeExample: `// Eksempel til ${language} level ${id}`,
      task: `Lav en lille opgave med ${name.toLowerCase()}.`,
      unlocked: false,
      completed: false
    };
  });
}

export const LEVELS: Level[] = Object.entries(levelNames)
  .flatMap(([language, names]) => createLevels(language, names));