export type AnswerType = 'writeAnswer' | 'chooseAnswer';

export type Task = {
  answerType: AnswerType;
  description: string;
  question: string;
  code: string;
  correctAnswer: string;
  answerOptions?: string[];
};

export type Level = {
  id: number;
  language: string;
  title: string;
  description: string;
  explanation: string;
  task: Task;
  unlocked: boolean;
  completed: boolean;
};