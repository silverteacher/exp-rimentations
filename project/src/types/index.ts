export interface Question {
  id: number;
  text: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  category: Category;
}

export type Category = 
  | 'online-safety'
  | 'digital-tools'
  | 'programming'
  | 'internet'
  | 'hardware';

export interface QuizState {
  currentQuestionIndex: number;
  score: number;
  answers: (number | null)[];
  quizCompleted: boolean;
}