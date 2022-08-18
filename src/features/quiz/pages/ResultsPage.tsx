import { useResults } from '../hooks';
import { ResultItem } from '../components';
import { Button, Title } from '../../../components';

export const ResultsPage = () => {
  const { numberOfCorrectAnswers, questions, handlePlayAgain } = useResults();

  return (
    <div className="flex flex-col space-y-16 pb-8">
      <div>
        <Title level="2" className="text-center">
          You scored
        </Title>

        <Title
          level="2"
          className="text-center"
        >{`${numberOfCorrectAnswers} / ${questions.length}`}</Title>
      </div>

      <div className="flex flex-col justify-center flex-1 space-y-12">
        {questions.map((question) => (
          <ResultItem
            key={question.question}
            answer={question.answer}
            question={question.question}
            correctAnswer={question.correct_answer.toLowerCase()}
          />
        ))}
      </div>

      <Button onClick={handlePlayAgain} className="w-1/4 self-center uppercase">
        Play again?
      </Button>
    </div>
  );
};
