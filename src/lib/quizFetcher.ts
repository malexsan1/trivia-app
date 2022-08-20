import { TQuestion } from '../core/types';

type FetchQuizesParams = {
  amount?: number;
  type?: 'multiple' | 'boolean';
  difficulty?: 'easy' | 'medium' | 'hard';
};

class QuizFetcher {
  baseURL: string;

  constructor() {
    this.baseURL = 'https://opentdb.com/api.php';
  }

  async fetchQuiz(params?: FetchQuizesParams): Promise<TQuestion[]> {
    return fetch(
      `${this.baseURL}?amount=${params?.amount ?? 10}&type=${
        params?.type ?? 'boolean'
      }&difficulty=${params?.difficulty ?? 'hard'}`,
    )
      .then((response) => {
        if (response.status >= 200 && response.status < 300) {
          return response.json();
        } else {
          throw new Error(response.statusText);
        }
      })
      .then((response) => response.results);
  }
}

export const quizFetcher = new QuizFetcher();
