import React, { useState } from "react";
import "./style.css";

const UseState = () => {
  // const initialData = 15;
  const [myNum, seMyNum] = useState(0);

  return (
    <>
      <div className="center_div">
        <p>{myNum}</p>
        <div
          class="button2 "
          onClick={() => (myNum < 20 ? seMyNum(myNum + 1) : seMyNum(20))}
        >
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          INCR
        </div>
        <div
          class="button2"
          onClick={() => (myNum > 0 ? seMyNum(myNum - 1) : seMyNum(0))}
        >
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          DECR
        </div>
      </div>
    </>
  );
};

export default UseState;
