import "./App.css";
import Nav from "./Nav";
import Routes from "./Routes";
import { BrowserRouter, useHistory } from "react-router-dom";
import React, { useEffect, useState } from "react";
import JoblyApi from "./api";

function App() {
  //maybe change to token
  const [authUserInfo, setAuthUserInfo] = useState();
  const [currentUser, setCurrentUser] = useState();
  // when authUser changes, that's when use effect get token
  const [token, setToken] = useState(null);

  let history = useHistory();

  console.log(token);

  useEffect(
    function getToken() {
      async function getTokenResponse() {
        let newToken;
        if (authUserInfo.email && authUserInfo.firstName) {
          newToken = await JoblyApi.register(authUserInfo);
          // if(newToken) history.push("localhost:3000/");
        } else if (authUserInfo.username) {
          newToken = await JoblyApi.login(authUserInfo);
        }
        setToken(newToken);
      }
      if (authUserInfo) getTokenResponse();
    },
    [authUserInfo]
  );

  useEffect(
    function getCurrUser() {
      async function getCurrUserResponse() {
        let user = await JoblyApi.getUserInfo(authUserInfo.username);
        setCurrentUser(user);
      }
      if (token) {
        getCurrUserResponse();
        history.push("/");
      }
    },
    [token]
  );

  function login(loginUserInfo) {
    setAuthUserInfo(loginUserInfo);
  }

  function signup(userInfo) {
    setAuthUserInfo(userInfo);
  }

  function logout() {
    setCurrentUser(null);
    setAuthUserInfo(null);
    setToken(null);
  }

  console.log(token, currentUser, authUserInfo, "ON RENDERS" )
  return (
    <div className="App">
      <Nav isLogin={true} />
      <Routes login={login} signup={signup} logout={logout} />
    </div>
  );
}

export default App;
