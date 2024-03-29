
import { createContext } from "react"
import ComA from "./ComA.jsx"
import './App.css'

const FirstName = createContext();
const LastName = createContext();

function App() {


  return (
    <FirstName.Provider value={"abhii"}>
    <LastName.Provider value={"singh"}>
        <ComA />
    </LastName.Provider>
    </FirstName.Provider>
  )
}

export default App
export { FirstName , LastName}
