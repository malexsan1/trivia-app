import { Button, Title, Text } from '../../../components';

import { useQuizHome } from '../hooks';
import { QuizInProgressModal } from '../components';

export const HomePage = () => {
  const { isModalOpen, onCloseModal, handleQuizStart, onContinueQuiz, onStartNewQuiz } =
    useQuizHome();

  return (
    <>
      <Title level="1" className="text-center mt-12 text-">
        Welcome to the Trivia Challenge!
      </Title>

      <div className="flex flex-col flex-1 justify-center items-center space-y-8">
        <Text level="1">
          You will be presented with 10{' '}
          <Text level="1" as="span" className="font-semibold text-green-600">
            True
          </Text>{' '}
          or{' '}
          <Text level="1" as="span" className="font-semibold text-red-600">
            False
          </Text>{' '}
          questions.
        </Text>

        <Text level="1">Can you score 100%?</Text>
      </div>

      <Button className="self-center w-1/6" onClick={handleQuizStart}>
        BEGIN
      </Button>

      <QuizInProgressModal
        isOpen={isModalOpen}
        onClose={onCloseModal}
        onContinue={onContinueQuiz}
        onStartNew={onStartNewQuiz}
      />
    </>
  );
};
