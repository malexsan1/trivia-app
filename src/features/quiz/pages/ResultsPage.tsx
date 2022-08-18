import { useResults } from '../hooks';
import { ResultItem } from '../components';

export const ResultsPage = () => {
  const { numberOfCorrectAnswers, questions, handlePlayAgain } = useResults();

  return (
    <div className="flex flex-col space-y-8 pb-8">
      <div>
        <h2 className="text-2xl text-center font-semibold">You scored</h2>
        <h2 className="text-2xl text-center font-semibold">{`${numberOfCorrectAnswers} / ${questions.length}`}</h2>
      </div>

      <div className="flex flex-col justify-center flex-1 space-y-4">
        {questions.map((question) => (
          <ResultItem
            key={question.question}
            answer={question.answer}
            question={question.question}
            correctAnswer={question.correct_answer.toLowerCase()}
          />
        ))}
      </div>

      <button
        onClick={handlePlayAgain}
        className="h-16 w-1/4 self-center uppercase font-bold text-xl"
      >
        Play again?
      </button>
    </div>
  );
};
