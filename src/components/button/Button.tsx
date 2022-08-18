import { Text } from '../typography/Text';

export interface ButtonProps extends React.HTMLProps<HTMLButtonElement> {
  children: React.ReactNode;
  type?: 'button' | 'reset' | 'submit';
}

export const Button: React.FC<ButtonProps> = ({
  children,
  className = '',
  type = 'button',
  ...props
}) => {
  return (
    <button
      type={type}
      className={`h-16 border-indigo-500 hover:border-indigo-700 font-bold ${className}`}
      {...props}
    >
      <Text level="2">{children}</Text>
    </button>
  );
};
