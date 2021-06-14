import React from "react";

function Movie(props) {
  return (
    <div className="movie">
      <h1>{props.data.Title}</h1>
      <p>{props.data.Type}</p>
      <p>{props.data.Year}</p>
      <p>{props.data.imdbID}</p>
    </div>
  );
}

export default Movie;
