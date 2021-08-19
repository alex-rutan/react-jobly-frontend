import "./App.css";
import Nav from "./Nav";
import Routes from "./Routes";
import { BrowserRouter, useHistory } from "react-router-dom";
import React, { useEffect, useState } from "react";
import JoblyApi from "./api";
import UserContext from "./UserContext";

function App() {
  // TODO keep track of form data on forms make an atempt to update currentuser on the form if valid.
  // const [authUserInfo, setAuthUserInfo] = useState();
  const [currentUser, setCurrentUser] = useState();
  // when authUser changes, that's when use effect get token
  const [token, setToken] = useState(null);

  let history = useHistory();

  /**Gets a token from api register or login*/
  // useEffect(
  //   function getToken() {
  //     async function getTokenResponse() {
  //       let newToken;
  //       if (authUserInfo.email) {
  //         newToken = await JoblyApi.register(authUserInfo);
  //         // if(newToken) history.push("localhost:3000/");
  //       } else if (authUserInfo.username) {
  //         newToken = await JoblyApi.login(authUserInfo);
  //       }
  //       setToken(newToken);
  //     }
  //     if (authUserInfo) getTokenResponse();
  //   },
  //   [authUserInfo]
  // );

  /**updates currentuser if valid token */
  useEffect(
    function getCurrUser() {
      async function getCurrUserResponse() {
        let user = await JoblyApi.getUserInfo(currentUser.username);
        if (user) {
          setCurrentUser(user);
        }
      }
      if (token) {
        getCurrUserResponse();
      }
    },
    [token]
  );

  //make requests in the login/singup
  async function login(loginUserInfo) {
    // setAuthUserInfo(loginUserInfo);
    const newToken = await JoblyApi.login(loginUserInfo);
    if (newToken){
      setCurrentUser({ username: loginUserInfo.username });
      setToken(newToken);
      history.push("/companies");
    }
  }

  async function signup(userInfo) {
    // setAuthUserInfo(userInfo);
    const newToken = await JoblyApi.register(userInfo);

    if (newToken) {
      setCurrentUser({ username: userInfo.username });
      setToken(newToken);
      history.push("/companies");
    }
  }

  function logout() {
    setCurrentUser(null);
    setToken(null);
  }

  return (
    <UserContext.Provider value={{ currentUser, login, signup, logout }}>
      {/* <BrowserRouter> */}
      <div className="App">
        <Nav />
        <Routes />
      </div>
      {/* </BrowserRouter> */}
    </UserContext.Provider>
  );
}

export default App;
