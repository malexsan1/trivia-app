import { Button, Title } from 'components';

import { useResults } from '../hooks';
import { ResultItem } from '../components';

export const ResultsPage = () => {
  const { numberOfCorrectAnswers, questions, handlePlayAgain } = useResults();

  return (
    <div className="flex flex-col flex-1 space-y-6 lg:space-y-12 pb-8">
      <div>
        <Title level="2" className="text-center">
          You scored
        </Title>

        <Title
          level="2"
          className="text-center"
        >{`${numberOfCorrectAnswers} / ${questions.length}`}</Title>
      </div>

      <div className="flex flex-col justify-start flex-1 space-y-4 sm:space-y-8 lg:space-y-12">
        {questions.map((question) => (
          <ResultItem
            key={question.question}
            answer={question.answer}
            question={question.question}
            correctAnswer={question.correct_answer.toLowerCase()}
          />
        ))}
      </div>

      <Button onClick={handlePlayAgain} className="w-full sm:w-1/2 self-center uppercase">
        Play again?
      </Button>
    </div>
  );
};
