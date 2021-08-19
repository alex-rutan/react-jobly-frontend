import "./App.css";
import Nav from "./Nav";
import Routes from "./Routes";
import { BrowserRouter, useHistory } from "react-router-dom";
import React, { useEffect, useState } from "react";
import JoblyApi from "./api";
import UserContext from "./UserContext";

function App() {
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
        if (authUserInfo.email) {
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
        if (user){
          setCurrentUser(user);
        }
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


  console.log( currentUser, "ON RENDERS")
  return (
    <UserContext.Provider value={{currentUser, login, signup, logout}}>
      <div className="App">
        <Nav />
        <Routes />
      </div>
    </UserContext.Provider >
  );
}

export default App;
