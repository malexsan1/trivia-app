import { TQuestion } from '../core/types';

class QuizStorage {
  QUESTIONS_KEY = 'questions';
  QUESTION_INDEX_KEY = 'questionIndex';

  constructor(
    private readonly storage: Storage,
    private readonly storageKeyPrefix: string = 'quiz-app-',
  ) {}

  saveQuestions(questions: TQuestion[]) {
    this.storage.setItem(
      `${this.storageKeyPrefix}${this.QUESTIONS_KEY}`,
      JSON.stringify(questions),
    );
  }

  get questions(): TQuestion[] {
    return JSON.parse(
      this.storage.getItem(`${this.storageKeyPrefix}${this.QUESTIONS_KEY}`) ?? '[]',
    );
  }

  setActiveIndex(index: number) {
    this.storage.setItem(
      `${this.storageKeyPrefix}${this.QUESTION_INDEX_KEY}`,
      JSON.stringify(index),
    );
  }

  get questionIndex(): number {
    return JSON.parse(
      this.storage.getItem(`${this.storageKeyPrefix}${this.QUESTION_INDEX_KEY}`) ?? '0',
    );
  }

  clear() {
    this.storage.removeItem(`${this.storageKeyPrefix}${this.QUESTIONS_KEY}`);
    this.storage.removeItem(`${this.storageKeyPrefix}${this.QUESTION_INDEX_KEY}`);
  }
}

export const quizStorage = new QuizStorage(localStorage);
