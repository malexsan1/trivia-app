import React from 'react';

import { TQuestion } from '../types';

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
      <h2 className="text-4xl text-center">{category}</h2>

      <div
        className={`
          flex justify-center items-center flex-1 px-12
          border border-indigo-400 rounded-md text-2xl text-center
        `}
        dangerouslySetInnerHTML={{ __html: question }}
      />

      <div className="grid grid-cols-2 gap-4">
        <button onClick={() => onAnswer(true)}>True</button>
        <button onClick={() => onAnswer(false)}>False</button>
      </div>
    </div>
  );
};
