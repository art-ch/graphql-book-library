import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { AppBar } from './components';

import { HomePage, BookPage } from './pages';

const App = () => {
  return (
    <BrowserRouter>
      <AppBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/:id" element={<BookPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
