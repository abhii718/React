import React, { useReducer } from "react";
import "./style.css";
const reducer = (state, action) => {
    switch (action.type) {
      case "INCR":
        return state + 1;
      case "DECR":
        return state > 0 ? state - 1 : state; // Ensure state doesn't go below 0
      default:
        return state;
    }
  };
  
const UseReducer = () => {
  // const initialData = 15;
  //   const [myNum, seMyNum] = useState(0);
  const initialData = 10;
  const [state, dispatch] = useReducer(reducer, initialData);

  return (
    <>
      <div className="center_div">
        <p>{state}</p>
        <div
          className="button2 "
          onClick={() => {
            dispatch({ type: "INCR" });
          }}
        >
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          INCR
        </div>
        <div
          className="button2 "
          onClick={() => {
            dispatch({ type: "DECR" });
          }}
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

export default UseReducer;
