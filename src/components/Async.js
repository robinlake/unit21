import React, { useState, useEffect } from "react";

function Async() {
  let [data, setData] = useState(null);
  useEffect(() => {
    getSomeData();
  }, []);

  async function getSomeData() {
    let response = await fetch(
      "http://www.omdbapi.com/?apikey=6f02c9a3&s=Batman&page=1"
    );
    let result = await response.json();
    setData(result);
    alert(JSON.stringify(result));
  }

  return (
    <div>
      <h1>Async component</h1>
    </div>
  );
}

export default Async;
