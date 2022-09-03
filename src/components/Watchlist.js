import React from "react";
import MovieCard from "./MovieCard";

const Watchlist = ({ list, removeMovie }) => {
  
  const movieDisplay = list.map((movie, index) => {
    
    return (
      <MovieCard movie={movie} removeMovie={removeMovie} list={list} />
    );
  })
  return (
    <div className="page">
      <h1>MY WATCHLIST</h1>
      <div className="movie-container">
        {movieDisplay}
      </div>
    </div>
  );
};

export default Watchlist;