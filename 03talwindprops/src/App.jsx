import { useState } from "react";
import "./App.css";
import Card from "./component/card";

function App() {
  const [count, setCount] = useState(0);
  let myObj = {
    username: "abhi",
    age: 21,
  };
  return (
    <>
      <h1 className="bg-green-400 text-black p-9 rounded-xl mb-4">
        Tailwind test
      </h1>
      <Card username="abhinay" btnText = "click me" title ="this is first video" />
      <Card username="mohan  " title="this is second video" />
    </>
  );
}

export default App;
