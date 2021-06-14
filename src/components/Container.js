import React, { useState, useEffect } from "react";
import Movies from "./Movies";
import Button from "./Button";

function Container() {
  let [movies, setMovies] = useState(null);

  let [data, setData] = useState(null);
  let [page, setPage] = useState(2);

  useEffect(() => {
    getInitialData();
  }, [page]);

  async function getInitialData() {
    if (data === null) {
      let response = await fetch(
        "http://www.omdbapi.com/?apikey=6f02c9a3&s=Batman&page=1"
      );
      let result = await response.json();
      setData(result.Search);
      console.log(result.Search);
    }
  }

  async function getMoreData(page) {
    console.log(`page = ${page}`);
    let response = await fetch(
      `http://www.omdbapi.com/?apikey=6f02c9a3&s=Batman&page=${page}`
    );
    let result = await response.json();
    setPage((page) => page + 1);
    // setData((data) => {
    //   data.concat(result.Search);
    // });
    setData(data.concat(result.Search));
    console.log(result.Search);
  }

  return (
    <div className="container">
      <Movies data={data} />
      <Button getMoreData={getMoreData} page={page} />
    </div>
  );
}

export default Container;
