import React from 'react';
import { useNavigate } from 'react-router-dom';

import { TQuestion } from '../../../core/types';
import { useRequestStatus } from '../../../hooks';
import { quizFetcher, quizStorage } from '../../../lib';

export const useQuiz = () => {
  const navigate = useNavigate();
  const { isLoading, setRequestStatus, error } = useRequestStatus();

  const [currentQuestionIndex, setCurrentQuestionIndex] = React.useState(
    () => quizStorage.questionIndex,
  );

  const [questions, setQuestions] = React.useState<TQuestion[]>([]);

  const handleAnswer = (answer: boolean) => {
    questions[currentQuestionIndex].answer = String(answer);
    setQuestions(questions);
    quizStorage.saveQuestions(questions);

    if (currentQuestionIndex === questions.length - 1) {
      navigate('/results', { state: { questions } });

      quizStorage.clear();
    } else {
      setCurrentQuestionIndex((idx) => idx + 1);
      quizStorage.setActiveIndex(currentQuestionIndex + 1);
    }
  };

  const fetchNewQuestions = React.useCallback(async () => {
    setRequestStatus({ error: '', status: 'loading' });
    try {
      const questions = await quizFetcher.fetchQuiz();

      setQuestions(questions);
      quizStorage.saveQuestions(questions);

      setRequestStatus({ status: 'success', error: '' });
    } catch (err: unknown) {
      setRequestStatus({ status: 'error', error: (err as Error).message });
    }
  }, [setRequestStatus]);

  React.useEffect(() => {
    const storedQuestions = quizStorage.questions;

    // use the previously stores questions, do not fetch new ones
    if (storedQuestions.length > 0) {
      setQuestions(storedQuestions);
    } else {
      fetchNewQuestions();
    }
  }, []);

  return {
    error,
    isLoading,
    currentQuestionIndex,
    currentQuestion: questions[currentQuestionIndex] ?? {},
    handleAnswer,
  };
};
