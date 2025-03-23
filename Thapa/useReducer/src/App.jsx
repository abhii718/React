import { useReducer, useState } from 'react'
import './App.css'

const reducer = (state, action) => {
  console.log( state)
  if (action.type === "INCREAMENT") {
    return state + 1
  }
  if (action.type === "DECREAMENT") {
    return state - 1
  }
}

let initialState = 0;
const UseReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <>
      <div>
        <p>{state}</p>
        <div className='btnStylePostion'>
          <button onClick={() => dispatch({ type: "INCREAMENT" })}>Incremeant</button>
          <button onClick={() => dispatch({ type: "DECREAMENT" })}>decreament</button>
        </div>
      </div>
    </>
  )
}

export default UseReducer
