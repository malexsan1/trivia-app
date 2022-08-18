import React from 'react';
import { useNavigate } from 'react-router-dom';

import { TQuestion } from '../types';
import { questions as dummyQuestions } from '../data';

const fetchData = (): Promise<TQuestion[]> => {
  return new Promise((resolve) => {
    resolve(dummyQuestions);
  });
};

export const useQuiz = () => {
  const navigate = useNavigate();

  const [currentQuestionIndex, setCurrentQuestionIndex] = React.useState(() => {
    return JSON.parse(localStorage.getItem('currentQuestionIndex') ?? '0') as number;
  });

  const [questions, setQuestions] = React.useState<TQuestion[]>([]);

  React.useEffect(() => {
    const storedQuestions = localStorage.getItem('questions');

    // use the previously stores questions, do not fetch new ones
    if (storedQuestions) {
      setQuestions(JSON.parse(storedQuestions));
    } else {
      fetchData().then((_questions) => {
        localStorage.setItem('questions', JSON.stringify(_questions));
        setQuestions(_questions);
      });
    }
  }, []);

  const handleAnswer = (answer: boolean) => {
    questions[currentQuestionIndex].answer = String(answer);
    setQuestions(questions);

    if (currentQuestionIndex === questions.length - 1) {
      navigate('/results', { state: { questions } });

      // clear storage for current quiz
      localStorage.removeItem('questions');
      localStorage.removeItem('currentQuestionIndex');
    } else {
      setCurrentQuestionIndex((idx) => idx + 1);
      localStorage.setItem('currentQuestionIndex', JSON.stringify(currentQuestionIndex + 1));
    }
  };

  return {
    handleAnswer,
    currentQuestionIndex,
    currentQuestion: questions[currentQuestionIndex] ?? {},
  };
};
