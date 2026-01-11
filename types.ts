export interface Question {
  id: number;
  chapter: string;
  text: string;
  options: {
    A: string;
    B: string;
    C: string;
    D?: string; // Some questions might have a D option implyed or "None"
  };
  correctAnswer: 'A' | 'B' | 'C' | 'D';
}

export interface QuizState {
  status: 'intro' | 'active' | 'finished';
  currentQuestionIndex: number;
  answers: Record<number, string>;
  score: number;
  timeRemaining: number; // in seconds
}