import React, { useState, useContext } from "react";
import UserConstext from "../context/UserContext.js";

function Login() {
  const [Username, setUsername] = useState("");
  const [Password, setPassword] = useState("");

  const { setUser } = useContext(UserConstext);
  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({ Username, Password });
  };
  
  return (
    <div>
      <h2>Login</h2>
      <input
        type="text"
        value={Username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="username"
      />
      <input
        type="password"
        value={Password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="password"
      />
      {" "}
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default Login;
