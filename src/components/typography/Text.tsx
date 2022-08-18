import React from 'react';

type TextLevel = '1' | '2' | '3';
export interface TextProps extends React.HTMLProps<HTMLElement> {
  level: TextLevel;
  as?: 'p' | 'span';
  children?: React.ReactNode;
}

const textStyles: Record<TextLevel, string> = {
  '1': 'text-2xl',
  '2': 'text-xl',
  '3': 'text-base',
};

export const Text: React.FC<TextProps> = ({ as = 'p', level = '2', className = '', ...props }) => {
  return React.createElement(as, { ...props, className: `${textStyles[level]} ${className}` });
};
