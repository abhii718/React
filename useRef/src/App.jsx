import { useEffect, useRef, useState } from 'react'
import './App.css'

function App() {

  const [name, setname] = useState("")
  const renderCount = useRef(0)
  const text = useRef()

  useEffect(() => {
    renderCount.current = renderCount.current + 1
  })

  function changeColor() {
    text.current.style.backgroundColor = "red"
    console.log(renderCount.current);
  }

  return (
    <>
      <input type="text" onChange={(e) => setname(e.target.value)} />
      <div>My name is {name}</div>
      <div ref={text}>I rendered {renderCount.current}</div>
      <button onClick={changeColor}>click me</button>
    </>
  )
}

export default App
// import { useEffect, useRef, useState } from 'react'
// import './App.css'

// function App() {

//   const [name, setname] = useState("")
//   // const [renderecount, setrenderecount] = useState(0)
//   const renderCount = useRef(0)

//   useEffect(() => {
//     renderCount.current = renderCount.current + 1
//   })

//   return (
//     <>

//       <input type="text" onChange={(e) => setname(e.target.value)} />
//       <div>My name is {name}</div>
//       <div>I rendered {renderCount.current}</div>
//     </>
//   )
// }

// export default App
