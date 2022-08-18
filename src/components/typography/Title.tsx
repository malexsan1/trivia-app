import React from 'react';

type TitleLevel = '1' | '2' | '3';

export interface TitleProps extends React.HTMLProps<HTMLElement> {
  level: TitleLevel;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';
  children: React.ReactNode;
}

const titleStyles: Record<TitleLevel, string> = {
  '1': 'text-5xl font-bold',
  '2': 'text-4xl font-semibold',
  '3': 'text-3xl font-semibold',
};

export const Title: React.FC<TitleProps> = ({ as = 'h3', level, className = '', ...props }) => {
  return React.createElement(as, { ...props, className: `${titleStyles[level]} ${className}` });
};
