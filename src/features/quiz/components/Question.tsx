import React from 'react';

import { TQuestion } from '../../../core/types';
import { Button, Text, Title } from '../../../components';

interface QuestionProps {
  question: TQuestion;
  onAnswer(answer: boolean): void;
}

export const Question: React.FC<QuestionProps> = ({
  question: { category, question },
  onAnswer,
}) => {
  return (
    <div className="flex flex-col space-y-4 sm:space-y-8 lg:space-y-12 flex-1">
      <Title level="2" className="text-center">
        {category}
      </Title>

      <div
        className={`
          flex justify-center items-center flex-1 px-4 sm:px-8 lg:px-12
          border border-indigo-500 rounded-md text-2xl text-center
        `}
      >
        <Text level="1" className="text-center" dangerouslySetInnerHTML={{ __html: question }} />
      </div>

      <div className="grid grid-cols-2 gap-4 sm:gap-8 lg:gap-12">
        <Button className="text-green-600 uppercase" onClick={() => onAnswer(true)}>
          True
        </Button>

        <Button className="text-red-600 uppercase" onClick={() => onAnswer(false)}>
          False
        </Button>
      </div>
    </div>
  );
};
