import React from 'react';
import MovieCard from './MovieCard';

const movies = [
  { id: 1, title: 'Movie 1' },
  { id: 2, title: 'Movie 2' },
  // Add more movie objects here
];

function Home() {
  return (
    <div className="home">
      {movies.map(movie => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
}

export default Home;
