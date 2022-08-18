import { IoAddCircle, IoRemoveCircle } from 'react-icons/io5';

interface ResultItemProps {
  question: string;
  isCorrect: boolean;
}

export const ResultItem: React.FC<ResultItemProps> = ({ isCorrect, question }) => {
  return (
    <div className="flex items-center space-x-4">
      <div className="min-h-[1.5rem] min-w-[1.5rem]">
        {isCorrect ? (
          <IoAddCircle className="text-green-500 h-full w-full" />
        ) : (
          <IoRemoveCircle className="text-red-500 h-full w-full" />
        )}
      </div>

      <span className="text-lg" dangerouslySetInnerHTML={{ __html: question }} />
    </div>
  );
};
