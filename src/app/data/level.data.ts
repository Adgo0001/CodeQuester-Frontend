import { Level } from '../models/level.model';

type LevelData = Omit<Level, 'unlocked' | 'completed'>;

function createLevel(level: LevelData): Level {
  return {
    ...level,
    unlocked: false,
    completed: false
  };
}

export const LEVELS: Level[] = [
  createLevel({
    id: 1,
    language: 'Java',
    title: 'Java - Variabler',
    description: 'I dette level lærer du om variabler i Java.',
    explanation: 'En variabel bruges til at gemme en værdi, som programmet kan bruge senere.',
    task: {
      answerType: 'writeAnswer',
      description: 'Programmet skal gemme navnet Peter i en tekstvariabel.',
      question: 'Skriv den datatype der mangler.',
      code: `[INPUT_FELT] navn = "Peter";

System.out.println(navn);`,
      correctAnswer: 'String',
      answerOptions: ['String', 'int', 'boolean', 'double']
    }
  }),

  createLevel({
    id: 2,
    language: 'Java',
    title: 'Java - Regnetegn',
    description: 'I dette level lærer du at bruge simple regnetegn i Java.',
    explanation: 'Man kan bruge regnetegn som +, -, * og / til at lave beregninger.',
    task: {
      answerType: 'writeAnswer',
      description: 'Programmet skal trække en rabat på 50 kroner fra en varepris.',
      question: 'Skriv det tegn der mangler.',
      code: `int pris = 150;
int rabat = 50;

int nyPris = pris [INPUT_FELT] rabat;

System.out.println("Prisen er nu: " + nyPris);`,
      correctAnswer: '-',
      answerOptions: ['+', '-', '*', '/']
    }
  }),

  createLevel({
    id: 3,
    language: 'Java',
    title: 'Java - If-statements',
    description: 'I dette level lærer du om if-statements i Java.',
    explanation: 'Et if-statement bruges til at tjekke om noget er sandt, før koden køres.',
    task: {
      answerType: 'writeAnswer',
      description: 'Programmet skal tjekke om brugeren er gammel nok.',
      question: 'Skriv det ord der mangler.',
      code: `int alder = 18;

[INPUT_FELT] (alder >= 18) {
  System.out.println("Du er myndig");
}`,
      correctAnswer: 'if',
      answerOptions: ['if', 'for', 'int', 'class']
    }
  }),

  createLevel({
    id: 4,
    language: 'Java',
    title: 'Java - Loops',
    description: 'I dette level lærer du om loops i Java.',
    explanation: 'Et loop bruges til at gentage kode flere gange.',
    task: {
      answerType: 'writeAnswer',
      description: 'Programmet skal skrive Hej fem gange.',
      question: 'Skriv det ord der starter et for-loop.',
      code: `[INPUT_FELT] (int i = 0; i < 5; i++) {
  System.out.println("Hej");
}`,
      correctAnswer: 'for',
      answerOptions: ['for', 'if', 'new', 'return']
    }
  }),

  createLevel({
    id: 5,
    language: 'Java',
    title: 'Java - Metoder',
    description: 'I dette level lærer du om metoder i Java.',
    explanation: 'En metode er en blok kode, som kan kaldes flere steder i programmet.',
    task: {
      answerType: 'writeAnswer',
      description: 'Metoden skal skrive en besked uden at returnere en værdi.',
      question: 'Skriv det ord der mangler.',
      code: `public static [INPUT_FELT] sayHello() {
  System.out.println("Hello");
}`,
      correctAnswer: 'void',
      answerOptions: ['void', 'String', 'int', 'class']
    }
  }),

  createLevel({
    id: 6,
    language: 'Java',
    title: 'Java - Arrays',
    description: 'I dette level lærer du om arrays i Java.',
    explanation: 'Et array kan gemme flere værdier af samme type.',
    task: {
      answerType: 'writeAnswer',
      description: 'Programmet skal lave et array med tre tal.',
      question: 'Skriv datatypen der mangler.',
      code: `[INPUT_FELT][] tal = {1, 2, 3};

System.out.println(tal[0]);`,
      correctAnswer: 'int',
      answerOptions: ['int', 'String', 'boolean', 'for']
    }
  }),

  createLevel({
    id: 7,
    language: 'Java',
    title: 'Java - Klasser',
    description: 'I dette level lærer du om klasser i Java.',
    explanation: 'En klasse bruges som en skabelon til objekter.',
    task: {
      answerType: 'writeAnswer',
      description: 'Koden skal oprette en klasse med navnet Person.',
      question: 'Skriv det ord der mangler.',
      code: `public [INPUT_FELT] Person {
  String navn;
}`,
      correctAnswer: 'class',
      answerOptions: ['class', 'void', 'String', 'new']
    }
  }),

  createLevel({
    id: 8,
    language: 'Java',
    title: 'Java - Afsluttende opgave',
    description: 'I dette level samler du noget af det, du har lært i Java.',
    explanation: 'Her skal du bruge viden om variabler, if-statements og output.',
    task: {
      answerType: 'writeAnswer',
      description: 'Programmet skal tjekke om et pointtal er højt nok til at bestå.',
      question: 'Skriv det ord der mangler.',
      code: `int point = 80;

[INPUT_FELT] (point >= 50) {
  System.out.println("Bestået");
}`,
      correctAnswer: 'if',
      answerOptions: ['if', 'for', 'void', 'class']
    }
  }),

  createLevel({
    id: 1,
    language: 'HTML',
    title: 'HTML - Grundstruktur',
    description: 'I dette level lærer du om grundstrukturen i HTML.',
    explanation: 'HTML bruges til at bygge indholdet på en hjemmeside.',
    task: {
      answerType: 'writeAnswer',
      description: 'Koden skal vise sidens synlige indhold.',
      question: 'Skriv det tag-navn der mangler.',
      code: `<html>
  <head>
    <title>Min side</title>
  </head>

  <[INPUT_FELT]>
    <h1>Velkommen</h1>
  </body>
</html>`,
      correctAnswer: 'body',
      answerOptions: ['body', 'head', 'title', 'img']
    }
  }),

  createLevel({
    id: 2,
    language: 'HTML',
    title: 'HTML - Overskrifter',
    description: 'I dette level lærer du om overskrifter i HTML.',
    explanation: 'Overskrifter bruges til at give siden struktur og gøre tekst tydelig.',
    task: {
      answerType: 'writeAnswer',
      description: 'Koden skal vise en stor overskrift.',
      question: 'Skriv det tag-navn der mangler.',
      code: `<[INPUT_FELT]>Velkommen til siden</h1>`,
      correctAnswer: 'h1',
      answerOptions: ['h1', 'p', 'a', 'img']
    }
  }),

  createLevel({
    id: 3,
    language: 'HTML',
    title: 'HTML - Tekst',
    description: 'I dette level lærer du om almindelig tekst i HTML.',
    explanation: 'Almindelig tekst skrives ofte i et p-tag.',
    task: {
      answerType: 'writeAnswer',
      description: 'Koden skal vise en almindelig tekst.',
      question: 'Skriv det tag-navn der mangler.',
      code: `<[INPUT_FELT]>Dette er en kort tekst.</p>`,
      correctAnswer: 'p',
      answerOptions: ['p', 'h1', 'button', 'img']
    }
  }),

  createLevel({
    id: 4,
    language: 'HTML',
    title: 'HTML - Links',
    description: 'I dette level lærer du om links i HTML.',
    explanation: 'Links bruges til at sende brugeren til en anden side.',
    task: {
      answerType: 'writeAnswer',
      description: 'Koden skal lave et link til en anden hjemmeside.',
      question: 'Skriv det tag-navn der mangler.',
      code: `<[INPUT_FELT] href="https://example.com">Klik her</a>`,
      correctAnswer: 'a',
      answerOptions: ['a', 'link', 'button', 'p']
    }
  }),

  createLevel({
    id: 5,
    language: 'HTML',
    title: 'HTML - Billeder',
    description: 'I dette level lærer du om billeder i HTML.',
    explanation: 'Billeder vises med img-tagget og en src-attribut.',
    task: {
      answerType: 'writeAnswer',
      description: 'Koden skal vise et billede.',
      question: 'Skriv det tag-navn der mangler.',
      code: `<[INPUT_FELT] src="logo.png" alt="Logo">`,
      correctAnswer: 'img',
      answerOptions: ['img', 'image', 'picture', 'src']
    }
  }),

  createLevel({
    id: 6,
    language: 'HTML',
    title: 'HTML - Lister',
    description: 'I dette level lærer du om lister i HTML.',
    explanation: 'Lister bruges til at vise flere punkter under hinanden.',
    task: {
      answerType: 'writeAnswer',
      description: 'Koden skal lave en punktliste med to elementer.',
      question: 'Skriv det tag-navn der mangler.',
      code: `<[INPUT_FELT]>
  <li>HTML</li>
  <li>CSS</li>
</ul>`,
      correctAnswer: 'ul',
      answerOptions: ['ul', 'ol', 'li', 'p']
    }
  }),

  createLevel({
    id: 7,
    language: 'HTML',
    title: 'HTML - Formularer',
    description: 'I dette level lærer du om formularer i HTML.',
    explanation: 'Formularer bruges til at indsamle input fra brugeren.',
    task: {
      answerType: 'writeAnswer',
      description: 'Koden skal lave en formular med et tekstfelt.',
      question: 'Skriv det tag-navn der mangler.',
      code: `<[INPUT_FELT]>
  <input type="text" placeholder="Skriv navn">
</form>`,
      correctAnswer: 'form',
      answerOptions: ['form', 'input', 'div', 'button']
    }
  }),

  createLevel({
    id: 8,
    language: 'HTML',
    title: 'HTML - Afsluttende opgave',
    description: 'I dette level samler du noget af det, du har lært i HTML.',
    explanation: 'Her skal du bruge viden om tags, tekst og knapper.',
    task: {
      answerType: 'writeAnswer',
      description: 'Koden skal lave en knap på siden.',
      question: 'Skriv det tag-navn der mangler.',
      code: `<[INPUT_FELT]>Start spil</button>`,
      correctAnswer: 'button',
      answerOptions: ['button', 'a', 'p', 'img']
    }
  }),

  createLevel({
    id: 1,
    language: 'CSS',
    title: 'CSS - Farver',
    description: 'I dette level lærer du om farver i CSS.',
    explanation: 'CSS bruges til at style HTML, for eksempel med farver.',
    task: {
      answerType: 'writeAnswer',
      description: 'Koden skal gøre teksten blå.',
      question: 'Skriv den CSS-property der mangler.',
      code: `p {
  [INPUT_FELT]: blue;
}`,
      correctAnswer: 'color',
      answerOptions: ['color', 'background-color', 'font-size', 'border']
    }
  }),

  createLevel({
    id: 2,
    language: 'CSS',
    title: 'CSS - Skrifttyper',
    description: 'I dette level lærer du om skrifttyper i CSS.',
    explanation: 'Skrifttypen bestemmer, hvordan teksten ser ud.',
    task: {
      answerType: 'writeAnswer',
      description: 'Koden skal ændre skrifttypen på hele siden.',
      question: 'Skriv den CSS-property der mangler.',
      code: `body {
  [INPUT_FELT]: Arial;
}`,
      correctAnswer: 'font-family',
      answerOptions: ['font-family', 'font-size', 'text-align', 'padding']
    }
  }),

  createLevel({
    id: 3,
    language: 'CSS',
    title: 'CSS - Afstand',
    description: 'I dette level lærer du om afstand i CSS.',
    explanation: 'Margin bruges til afstand udenfor et element, og padding bruges til afstand indeni.',
    task: {
      answerType: 'writeAnswer',
      description: 'Koden skal give afstand udenfor boksen.',
      question: 'Skriv den CSS-property der mangler.',
      code: `.box {
  [INPUT_FELT]: 20px;
}`,
      correctAnswer: 'margin',
      answerOptions: ['margin', 'padding', 'width', 'display']
    }
  }),

  createLevel({
    id: 4,
    language: 'CSS',
    title: 'CSS - Kanter',
    description: 'I dette level lærer du om kanter i CSS.',
    explanation: 'Border bruges til at lave en kant rundt om et element.',
    task: {
      answerType: 'writeAnswer',
      description: 'Koden skal give boksen en sort kant.',
      question: 'Skriv den CSS-property der mangler.',
      code: `.box {
  [INPUT_FELT]: 2px solid black;
}`,
      correctAnswer: 'border',
      answerOptions: ['border', 'padding', 'display', 'font-size']
    }
  }),

  createLevel({
    id: 5,
    language: 'CSS',
    title: 'CSS - Flexbox',
    description: 'I dette level lærer du om Flexbox i CSS.',
    explanation: 'Flexbox bruges til at placere elementer på en fleksibel måde.',
    task: {
      answerType: 'writeAnswer',
      description: 'Koden skal gøre boksen til en flex-container.',
      question: 'Skriv værdien der mangler.',
      code: `.box {
  display: [INPUT_FELT];
}`,
      correctAnswer: 'flex',
      answerOptions: ['flex', 'grid', 'block', 'none']
    }
  }),

  createLevel({
    id: 6,
    language: 'CSS',
    title: 'CSS - Grid',
    description: 'I dette level lærer du om Grid i CSS.',
    explanation: 'Grid bruges til at lave layouts med rækker og kolonner.',
    task: {
      answerType: 'writeAnswer',
      description: 'Koden skal gøre boksen til en grid-container.',
      question: 'Skriv værdien der mangler.',
      code: `.box {
  display: [INPUT_FELT];
}`,
      correctAnswer: 'grid',
      answerOptions: ['grid', 'flex', 'inline', 'none']
    }
  }),

  createLevel({
    id: 7,
    language: 'CSS',
    title: 'CSS - Hover-effekter',
    description: 'I dette level lærer du om hover-effekter i CSS.',
    explanation: 'Hover bruges til at ændre styling, når musen er over et element.',
    task: {
      answerType: 'writeAnswer',
      description: 'Koden skal ændre knappens gennemsigtighed ved hover.',
      question: 'Skriv den CSS-property der mangler.',
      code: `.button:hover {
  [INPUT_FELT]: 0.8;
}`,
      correctAnswer: 'opacity',
      answerOptions: ['opacity', 'color', 'margin', 'padding']
    }
  }),

  createLevel({
    id: 8,
    language: 'CSS',
    title: 'CSS - Afsluttende opgave',
    description: 'I dette level samler du noget af det, du har lært i CSS.',
    explanation: 'Her skal du bruge viden om styling, layout og effekter.',
    task: {
      answerType: 'writeAnswer',
      description: 'Koden skal centrere indholdet med grid.',
      question: 'Skriv den CSS-property der mangler.',
      code: `.page {
  display: grid;
  [INPUT_FELT]: center;
}`,
      correctAnswer: 'place-items',
      answerOptions: ['place-items', 'text-align', 'margin', 'border']
    }
  }),

  createLevel({
    id: 1,
    language: 'JavaScript',
    title: 'JavaScript - Variabler',
    description: 'I dette level lærer du om variabler i JavaScript.',
    explanation: 'En variabel bruges til at gemme en værdi.',
    task: {
      answerType: 'writeAnswer',
      description: 'Koden skal gemme navnet Sara i en variabel.',
      question: 'Skriv det ord der mangler.',
      code: `[INPUT_FELT] navn = "Sara";

console.log(navn);`,
      correctAnswer: 'let',
      answerOptions: ['let', 'text', 'value', 'new']
    }
  }),

  createLevel({
    id: 2,
    language: 'JavaScript',
    title: 'JavaScript - If-statements',
    description: 'I dette level lærer du om if-statements i JavaScript.',
    explanation: 'Et if-statement bruges til at tjekke en betingelse.',
    task: {
      answerType: 'writeAnswer',
      description: 'Koden skal tjekke om brugeren er logget ind.',
      question: 'Skriv det ord der mangler.',
      code: `let loggedIn = true;

[INPUT_FELT] (loggedIn) {
  console.log("Velkommen");
}`,
      correctAnswer: 'if',
      answerOptions: ['if', 'for', 'let', 'const']
    }
  }),

  createLevel({
    id: 3,
    language: 'JavaScript',
    title: 'JavaScript - Funktioner',
    description: 'I dette level lærer du om funktioner i JavaScript.',
    explanation: 'En funktion er en blok kode, som kan kaldes flere gange.',
    task: {
      answerType: 'writeAnswer',
      description: 'Koden skal lave en funktion, der skriver Hello.',
      question: 'Skriv det ord der mangler.',
      code: `[INPUT_FELT] sayHello() {
  console.log("Hello");
}`,
      correctAnswer: 'function',
      answerOptions: ['function', 'method', 'void', 'class']
    }
  }),

  createLevel({
    id: 4,
    language: 'JavaScript',
    title: 'JavaScript - Loops',
    description: 'I dette level lærer du om loops i JavaScript.',
    explanation: 'Et loop bruges til at gentage kode.',
    task: {
      answerType: 'writeAnswer',
      description: 'Koden skal skrive tallene 0 til 2 i konsollen.',
      question: 'Skriv det ord der starter loopet.',
      code: `[INPUT_FELT] (let i = 0; i < 3; i++) {
  console.log(i);
}`,
      correctAnswer: 'for',
      answerOptions: ['for', 'if', 'let', 'return']
    }
  }),

  createLevel({
    id: 5,
    language: 'JavaScript',
    title: 'JavaScript - Arrays',
    description: 'I dette level lærer du om arrays i JavaScript.',
    explanation: 'Et array kan gemme flere værdier i én variabel.',
    task: {
      answerType: 'writeAnswer',
      description: 'Koden skal hente det første navn fra arrayet.',
      question: 'Skriv tallet der mangler.',
      code: `let names = ["Ali", "Sara", "Peter"];

console.log(names[[INPUT_FELT]]);`,
      correctAnswer: '0',
      answerOptions: ['0', '1', '2', '3']
    }
  }),

  createLevel({
    id: 6,
    language: 'JavaScript',
    title: 'JavaScript - DOM',
    description: 'I dette level lærer du om DOM i JavaScript.',
    explanation: 'DOM bruges til at finde og ændre HTML-elementer med JavaScript.',
    task: {
      answerType: 'writeAnswer',
      description: 'Koden skal finde et element med id title.',
      question: 'Skriv metoden der mangler.',
      code: `const title = document.[INPUT_FELT]("title");`,
      correctAnswer: 'getElementById',
      answerOptions: ['getElementById', 'querySelectorAll', 'addEvent', 'console.log']
    }
  }),

  createLevel({
    id: 7,
    language: 'JavaScript',
    title: 'JavaScript - Events',
    description: 'I dette level lærer du om events i JavaScript.',
    explanation: 'Events bruges til at reagere på brugerens handlinger, for eksempel klik.',
    task: {
      answerType: 'writeAnswer',
      description: 'Koden skal køre funktionen startGame, når knappen bliver klikket på.',
      question: 'Skriv metoden der mangler.',
      code: `button.[INPUT_FELT]("click", startGame);`,
      correctAnswer: 'addEventListener',
      answerOptions: ['addEventListener', 'getElementById', 'onclicked', 'listen']
    }
  }),

  createLevel({
    id: 8,
    language: 'JavaScript',
    title: 'JavaScript - Afsluttende opgave',
    description: 'I dette level samler du noget af det, du har lært i JavaScript.',
    explanation: 'Her skal du bruge viden om variabler, funktioner og output.',
    task: {
      answerType: 'writeAnswer',
      description: 'Koden skal skrive resultatet af en funktion i konsollen.',
      question: 'Skriv metoden der mangler.',
      code: `function getScore() {
  return 100;
}

console.[INPUT_FELT](getScore());`,
      correctAnswer: 'log',
      answerOptions: ['log', 'print', 'write', 'show']
    }
  })
];