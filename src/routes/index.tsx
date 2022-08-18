import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { HomePage, Quiz, ResultsPage } from '../features';

export const QuizRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/results" element={<ResultsPage />} />
      </Routes>
    </BrowserRouter>
  );
};
