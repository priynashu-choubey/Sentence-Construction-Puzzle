export interface Question {
  questionId: string;
  question: string;
  questionType: string;
  answerType: string;
  options: string[];
  correctAnswer: string[];
}

export interface QuizData {
  data: QuizData;
  testId: string;
  questions: Question[];
}
