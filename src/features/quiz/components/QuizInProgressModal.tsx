import { IoCloseCircleOutline } from 'react-icons/io5';

import { Button, Modal, ModalProps, Text, Title } from 'components';

export interface QuizInProgressModalProps extends ModalProps {
  onContinue(): void;
  onStartNew(): void;
}

export const QuizInProgressModal: React.FC<QuizInProgressModalProps> = ({
  isOpen,
  onClose,
  onContinue,
  onStartNew,
}) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div
        className={`
        flex flex-col p-8 space-y-12 relative
        bg-black w-2/3 border-2 border-indigo-500 rounded-md
      `}
      >
        <button
          onClick={onClose}
          className="p-0 text-indigo-500 hover:text-indigo-700 border-none absolute top-2 right-2 bg-transparent"
        >
          <IoCloseCircleOutline className="cursor-pointer w-8 h-8" />
        </button>

        <Title level="3" className="text-center">
          Quiz in progress
        </Title>

        <div>
          <Text level="2" className="text-center">
            There is another in progress quiz. Do you want to start a new one?
          </Text>

          <Text
            level="3"
            className="text-center"
          >{`(The previous quiz's answers will be discarded.)`}</Text>
        </div>

        <div className="grid grid-cols-2 gap-8 font-bold text-xl">
          <Button className="h-16" onClick={onContinue}>
            Continue
          </Button>

          <Button className="h-16" onClick={onStartNew}>
            Start New
          </Button>
        </div>
      </div>
    </Modal>
  );
};
