import { FaSpinner, FaExclamationCircle } from 'react-icons/fa';

import { useQuiz } from '../hooks';
import { Question } from '../components';
import { Button, Title, Text } from '../../../components';

export const Quiz = () => {
  const {
    error,
    isLoading,
    currentQuestion,
    currentQuestionIndex,
    goBack,
    handleAnswer,
    fetchNewQuestions,
  } = useQuiz();

  if (isLoading) {
    return (
      <div className="flex flex-col justify-center items-center flex-1 space-y-8 text-center">
        <Title level="3">Loading quiz</Title>
        <Text level="1">Please wait while we load your questions. Good luck!</Text>
        <FaSpinner className="animate-spin w-8 h-8 sm:w-16 sm:h-16" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col justify-center items-center flex-1 space-y-8 text-center">
        <Title level="3">Failed to load the quiz</Title>
        <Text level="1" className="text-red-600">
          {error}
        </Text>
        <FaExclamationCircle className="text-red-600 w-8 h-8 sm:w-16 sm:h-16" />

        <div className="grid grid-cols-2 gap-8 w-2/3">
          <Button onClick={goBack}>Go back</Button>
          <Button onClick={fetchNewQuestions}>Try again</Button>
        </div>
      </div>
    );
  }

  return (
    <>
      <Question question={currentQuestion} onAnswer={handleAnswer} />

      <Text level="3" className="mt-8 text-center font-semibold">
        {`${currentQuestionIndex + 1} of 10`}
      </Text>
    </>
  );
};
