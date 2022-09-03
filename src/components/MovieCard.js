import React from "react";

const MovieCard = ({ movie, addMovie, removeMovie, list }) => {
  const inWatchlist = list.filter((mov) => {
    return mov.id === movie.id;
  });

  const button =
    inWatchlist.length === 0 ? (
      <button onClick={() => addMovie(movie)}>ADD TO LIST</button>
    ) : (
      <button onClick={() => removeMovie(movie)}>REMOVE</button>
    );

  return (
    <div className="movie-card">
      <div>
        <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt='movie' />
        <h3>{movie.original_title}</h3>
      </div>
      {button}
    </div>
  );
};

export default MovieCard;
