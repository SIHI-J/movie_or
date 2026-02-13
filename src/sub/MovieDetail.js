import React from 'react';
import { Link } from 'react-router-dom';
function MovieDetail({
  id,
  title,
  year,
  summary,
  poster,
  genres,
  rating
}) {
  return (
    <li className='movie-card'>
      <Link to={`/movie/${id}`} className="movie-link">
        <img src={poster} alt={title} className='poster' />
        <div className="movie-text">
          <h3>{title}</h3>
          <p className='year'>{year}</p>
          <p className='summary'>{summary.slice(0, 100)}</p>
          <p className='genres'>{genres}</p>
          <p className='rating'>⭐{rating}</p>
        </div>
      </Link>
    </li>
  );
}

export default MovieDetail;
