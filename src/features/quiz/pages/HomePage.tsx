import { useQuizHome } from '../hooks';
import { QuizInProgressModal } from '../components';

export const HomePage = () => {
  const { isModalOpen, onCloseModal, handleQuizStart, onContinueQuiz, onStartNewQuiz } =
    useQuizHome();

  return (
    <>
      <h1 className="text-center mt-12">Welcome to the Trivia Challenge!</h1>

      <div className="flex flex-col flex-1 justify-center items-center space-y-8">
        <p className="text-2xl">
          You will be presented with 10 <span className="font-bold text-green-500">True</span> or{' '}
          <span className="font-bold text-red-500">False</span> questions.
        </p>

        <p className="text-2xl">Can you score 100%?</p>
      </div>

      <button className="self-center h-16 w-1/6 font-bold text-xl" onClick={handleQuizStart}>
        BEGIN
      </button>

      <QuizInProgressModal
        isOpen={isModalOpen}
        onClose={onCloseModal}
        onContinue={onContinueQuiz}
        onStartNew={onStartNewQuiz}
      />
    </>
  );
};
