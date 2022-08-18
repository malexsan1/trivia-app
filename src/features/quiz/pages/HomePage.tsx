import { useNavigate } from 'react-router-dom';

export const HomePage = () => {
  const navigate = useNavigate();

  return (
    <>
      <h1 className="text-center">Welcome to the Trivia Challenge!</h1>

      <div className="flex flex-col flex-1 justify-center items-center space-y-8">
        <p className="text-2xl">
          You will be presented with 10 <span className="font-bold text-green-500">True</span> or{' '}
          <span className="font-bold text-red-500">False</span> questions.
        </p>

        <p className="text-2xl">Can you score 100%?</p>
      </div>

      <button
        className="self-center h-16 w-1/6 font-bold text-xl"
        onClick={() => navigate('/quiz')}
      >
        BEGIN
      </button>
    </>
  );
};
