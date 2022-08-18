import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { ResultsPageState } from '../types';

export const useResults = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const routeState = location.state as ResultsPageState;

  const numberOfCorrectAnswers = React.useMemo(() => {
    return routeState.questions.filter(
      (question) => question.answer === question.correct_answer.toLowerCase(),
    ).length;
  }, []);

  const handlePlayAgain = () => {
    navigate('/');
  };

  return {
    handlePlayAgain,
    numberOfCorrectAnswers,
    questions: routeState.questions,
  };
};
