import React, { useState, useEffect } from "react";
import "./style.css";

const UseEffect = () => {
  // const initialData = 15;
  const [myNum, seMyNum] = useState(5);

  useEffect(() => {
   document.title=  `Chats(${myNum})`
  });
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
      </div>
    </>
  );
};

export default UseEffect;
