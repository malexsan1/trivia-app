import React from 'react';

import { TQuestion } from '../types';
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
    <div className="flex flex-col space-y-12 flex-1">
      <Title level="2" className="text-center">
        {category}
      </Title>

      <div
        className={`
          flex justify-center items-center flex-1 px-12
          border border-indigo-500 rounded-md text-2xl text-center
        `}
      >
        <Text level="1" dangerouslySetInnerHTML={{ __html: question }} />
      </div>

      <div className="grid grid-cols-2 gap-12">
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
