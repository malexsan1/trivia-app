import React from 'react';
import { useNavigate } from 'react-router-dom';

export const useQuizHome = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const isQuizInProgress = React.useMemo(() => !!localStorage.getItem('currentQuestionIndex'), []);

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
    localStorage.removeItem('questions');
    localStorage.removeItem('currentQuestionIndex');
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
