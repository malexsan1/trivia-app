import { IoCloseCircleOutline } from 'react-icons/io5';

import { Modal, ModalProps } from '../../../components';

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
        bg-black w-2/3 border-2 border-indigo-600 rounded-md
      `}
      >
        <button
          onClick={onClose}
          className="text-indigo-600 hover:text-indigo-400 border-none absolute top-2 right-0 bg-transparent"
        >
          <IoCloseCircleOutline className="cursor-pointer w-8 h-8" />
        </button>

        <h2 className="text-center text-3xl font-semibold">Quiz in progress</h2>

        <div>
          <p className="flex items-center justify-center flex-1 text-xl text-center">
            There is another in progress quiz. Do you want to start a new one?
          </p>

          <p className="text-md text-center">{`(The previous quiz's answers will be discarded.)`}</p>
        </div>

        <div className="grid grid-cols-2 gap-8 font-bold text-xl">
          <button className="h-16" onClick={onContinue}>
            Continue
          </button>
          <button className="h-16" onClick={onStartNew}>
            Start New
          </button>
        </div>
      </div>
    </Modal>
  );
};
