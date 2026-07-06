export type Task = {
  question: string;
  options: string[];
  correctAnswer: string;
};

export type Level = {
  id: number;
  language: string;
  title: string;
  description: string;
  explanation: string;
  codeExample: string;
  tasks: Task[];
  unlocked: boolean;
  completed: boolean;
};