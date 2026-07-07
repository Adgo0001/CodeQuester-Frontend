export type Task = {
  description: string;
  question: string;
  code: string;
  correctAnswer: string;
  hintOptions: string[];
};

export type Level = {
  id: number;
  language: string;
  title: string;
  description: string;
  explanation: string;
  tasks: Task[];
  unlocked: boolean;
  completed: boolean;
};