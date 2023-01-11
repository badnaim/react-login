import React, { useState } from "react";
import "../styles/welcome.css";

export default function WelcomePage(prop) {
  const { setLogin } = prop;
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div>
      <input
        onChange={(e) => setUserName(e.target.value)}
        type="text"
        placeholder="username"
      ></input>
      <input
        onChange={(e) => setPassword(e.target.value)}
        type="text"
        placeholder="password"
      ></input>
      <button onClick={() => setLogin(userName, password)}>Login</button>
    </div>
  );
}
