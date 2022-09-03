import React from "react";
import MovieCard from "./MovieCard"

const MovieScreen = ({addMovie, movieList, page, setPage, list, removeMovie}) => {
  
    const decrement = () => setPage(page - 1);
    const increment = () => setPage(page + 1);
  
    const movieDisplay = movieList.map((movie, index) => {
      return <MovieCard addMovie={addMovie} movie={movie} list={list} removeMovie={removeMovie}/>;
    });
    

  return (
    <div className="page">
      <h1 className="h">ASHLEY'S MOVIE THEATRE</h1>
      <h3 className="hhh">ADD A MOVIE TO YOUR WATCHLIST</h3>
      <div className="btn-container">
        <button onClick={page!== 1 && decrement}>PREVIOUS</button>
        <button onClick={increment}>NEXT</button>
      </div>
      <div className="movie-container">{movieDisplay}</div>
    </div>
  );
};

export default MovieScreen;
