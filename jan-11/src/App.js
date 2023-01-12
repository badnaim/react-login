import "./App.css";
import React, { useState } from "react";
import { data } from "./util/data";
import Profile from "./components/Profile";
import WelcomePage from "./components/WelcomePage";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState(data);

  function loginHandler(userName, password) {
    console.log("loginHandler is running");
    console.log("username: ", userName);
    console.log("password: ", password);
    userData.map((user) => {
      if (userName === user.userName && password === user.password) {
        setIsLoggedIn(true);
      } else {
        console.error("wrong password or username!");
      }
    });
  }

  function logoutHandler() {
    return setIsLoggedIn(false);
  }

  return (
    <div className="App">
      {isLoggedIn ? (
        <Profile setLogout={logoutHandler} />
      ) : (
        <WelcomePage setLogin={loginHandler} />
      )}
    </div>
  );
}

export default App;
