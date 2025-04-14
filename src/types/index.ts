export type QuizData = {
  testId: string;
  questions: Question[];
};

export type Question = {
  questionId: string;
  question: string;
  questionType: string;
  answerType: string;
  options: string[];
  correctAnswer: string[];
};
