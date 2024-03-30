import { useMemo, useState } from 'react'
import './App.css'

function App() {
  const [show, setshow] = useState(false)
  const [myNum, setmyNum] = useState(0)


  function getValue() {
    return setmyNum(myNum + 1)
  }

  const countNumber = (num) => {
    console.log(" ~ file: Memo.jsx line 12 ~ countNumber ~ num", num)
    for (let i = 0; i <= 100000000; i++) { }
    return num;
  }


  let checkdata = useMemo(() => {
    return countNumber(myNum)
  }, [myNum])


  return (
    <>

      <button onClick={getValue} style={{ backgroundColor: "red" }}> Counter</button>
      <p>My new number : {checkdata}</p>
      <button onClick={() => { setshow(!show) }
      }> {show ? "you clicked me" : "click me please"}</button>

    </>
  )
}

export default App
