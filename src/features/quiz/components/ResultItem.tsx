import { IoAddCircle, IoRemoveCircle } from 'react-icons/io5';

import { Text } from '../../../components';
import { capitalize } from '../../../utils';

interface ResultItemProps {
  answer: string;
  question: string;
  correctAnswer: string;
}

export const ResultItem: React.FC<ResultItemProps> = ({ answer, correctAnswer, question }) => {
  const isCorrect = answer === correctAnswer;

  return (
    <div className="flex items-center space-x-8">
      <div className="min-h-[1.5rem] min-w-[1.5rem]">
        {isCorrect ? (
          <IoAddCircle className="text-green-500 h-full w-full" />
        ) : (
          <IoRemoveCircle className="text-red-500 h-full w-full" />
        )}
      </div>

      <div className="space-y-2">
        <Text level="2" dangerouslySetInnerHTML={{ __html: question }} />

        {!isCorrect && (
          <Text level="3">
            Your answer: {capitalize(answer)}. The correct answer: {capitalize(correctAnswer)}
          </Text>
        )}
      </div>
    </div>
  );
};
