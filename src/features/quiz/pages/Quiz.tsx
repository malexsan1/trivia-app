import { useQuiz } from '../hooks';
import { Question } from '../components';
import { Title, Text } from '../../../components';

export const Quiz = () => {
  const { isLoading, handleAnswer, currentQuestion, currentQuestionIndex } = useQuiz();

  if (isLoading) {
    return (
      <div className="flex flex-col justify-center items-center flex-1 space-y-8">
        <Title level="3">Loading quiz</Title>
        <Text level="1">Please wait while we load your questions. Good luck!</Text>
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
