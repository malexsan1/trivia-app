import { QuizRoutes } from './routes';

function App() {
  return (
    <div
      className={`
        flex flex-col h-screen max-w-4xl mx-auto
        py-8 px-4 sm:px-8 lg:px-0
      `}
    >
      <QuizRoutes />
    </div>
  );
}

export default App;
