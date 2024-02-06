# Password Generator

**Below is the code for a simple password generator implemented in React.**

```JSX

import { useState, useCallback, useEffect, useRef } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [PassWord, setPassword] = useState("");
  const passwordRef = useRef(null);
  
  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWZYZabcdefghijklmnopqrstuvwzyz";
    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "`!@#$%^&*_-+~',?.";

    for (let i = 1; i < length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, numberAllowed, charAllowed]);

  const copyPasswordToClipboard = useCallback(() => {
    if (passwordRef.current) {
      passwordRef.current.select();
      document.execCommand("copy");
    }
  }, []);

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed, passwordGenerator]);

  return (
    <>
      Password Generator
      <input
        type="text"
        value={PassWord}
        readOnly
        ref={passwordRef}
      />
      <button
        onClick={copyPasswordToClipboard}
      >
        copy
      </button>
      <input
        type="range"
        min={6}
        max={40}
        value={length}
        onChange={(e) => {
          setLength(e.target.value);
        }}
      />
      <label>Length: {length}</label>
      <input
        type="checkbox"
        defaultChecked={numberAllowed}
        id="numberInput"
        onChange={() => {
          setNumberAllowed((prev) => !prev);
        }}
      />
      <label htmlFor="numberInput">Numbers</label>
      <input
        type="checkbox"
        defaultChecked={charAllowed}
        id="charInput"
        onChange={() => {
          setCharAllowed((prev) => !prev);
        }}
      />
      <label htmlFor="charInput">Characters</label>
    </>
  );
}

export default App;
