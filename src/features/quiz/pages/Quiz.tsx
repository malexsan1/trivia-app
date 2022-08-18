import { useQuiz } from '../hooks';
import { Question } from '../components';

export const Quiz = () => {
  const { handleAnswer, currentQuestion, currentQuestionIndex } = useQuiz();

  return (
    <>
      <Question question={currentQuestion} onAnswer={handleAnswer} />

      <p className="mt-8 text-center font-semibold">{`${currentQuestionIndex + 1} of 10`}</p>
    </>
  );
};
