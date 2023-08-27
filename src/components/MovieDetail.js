import React from 'react';
import { Link, useParams } from 'react-router-dom';

function MovieDetail({ movies }) {
  const { id } = useParams();
  const movie = movies.find(movie => movie.id === parseInt(id));

  if (!movie) {
    return <div>Movie not found</div>;
  }

  return (
    <div className="movie-detail">
      <h2>{movie.title}</h2>
      <p>Description: {movie.description}</p>
      <div className="video-container">
        <iframe
          width="560"
          height="315"
          src={movie.trailerLink}
          title="Trailer"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>
      <Link to="/">Back to Home</Link>
    </div>
  );
}

export default MovieDetail;
