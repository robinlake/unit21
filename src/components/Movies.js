import React, { useState, useEffect } from "react";
import reactDom from "react-dom";
import Movie from "./Movie";

function Movies(props) {
  useEffect(() => {}, [props]);

  return (
    <div className="movies">
      {props.data ? (
        props.data.map((movie) => {
          return <Movie data={movie} />;
        })
      ) : (
        <h1>loading</h1>
      )}
    </div>
  );
}

export default Movies;
