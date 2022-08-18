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
  const [currentQuestionIndex, setCurrentQuestionIndex] = React.useState(0);
  const [questions, setQuestions] = React.useState<TQuestion[]>([]);

  React.useEffect(() => {
    fetchData().then(setQuestions);
  }, []);

  const handleAnswer = (answer: boolean) => {
    questions[currentQuestionIndex].answer = String(answer);
    setQuestions(questions);

    if (currentQuestionIndex === questions.length - 1) {
      navigate('/results', { state: { questions } });
    } else {
      setCurrentQuestionIndex((idx) => idx + 1);
    }
  };

  return {
    handleAnswer,
    currentQuestionIndex,
    currentQuestion: questions[currentQuestionIndex] ?? {},
  };
};
