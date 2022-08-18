export type TQuestion = {
  category: string;
  type: string;
  difficulty: string;
  question: string;
  answer: string;
  correct_answer: string;
  incorrect_answers: string[];
};

export type ResultsPageState = {
  questions: TQuestion[];
};
