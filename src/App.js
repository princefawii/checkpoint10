import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import MovieDetail from './components/MovieDetail';

const movies = [
  {
    id: 1,
    title: 'Movie 1',
    description: 'Description for Movie 1',
    trailerLink: 'https://www.youtube.com/embed/VIDEO_ID_1',
  },
  {
    id: 2,
    title: 'Movie 2',
    description: 'Description for Movie 2',
    trailerLink: 'https://www.youtube.com/embed/VIDEO_ID_2',
  },
  // Add more movie objects here
];

function App() {
  return (
    <BrowserRouter>
    <div>
      <Routes>
        <Route path="/" element={Home} />
        <Route path="/movie/:id" render={() => <MovieDetail movies={movies} />} />
      </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

