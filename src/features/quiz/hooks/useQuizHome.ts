import React from 'react';
import { useNavigate } from 'react-router-dom';

import { quizStorage } from '../../../lib';

export const useQuizHome = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const isQuizInProgress = React.useMemo(() => quizStorage.questions.length > 0, []);

  const handleQuizStart = () => {
    if (isQuizInProgress) {
      setIsModalOpen(true);
    } else {
      navigate('/quiz');
    }
  };

  const onCloseModal = () => setIsModalOpen(false);

  const onContinueQuiz = () => {
    setIsModalOpen(false);
    navigate('/quiz');
  };

  const onStartNewQuiz = () => {
    quizStorage.clear();
    navigate('/quiz');
  };

  return {
    isModalOpen,
    onCloseModal,
    onContinueQuiz,
    onStartNewQuiz,
    handleQuizStart,
  };
};
