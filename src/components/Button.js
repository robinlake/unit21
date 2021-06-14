import React from "react";

function Button(props) {
  return (
    <div>
      <button onClick={() => props.getMoreData(props.page)}>
        Get More Results
      </button>
    </div>
  );
}

export default Button;
