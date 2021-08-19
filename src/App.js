import "./App.css";
import Nav from "./Nav";
import Routes from "./Routes";
import { useHistory } from "react-router-dom";
import React, { useEffect, useState } from "react";
import JoblyApi from "./api";
import UserContext from "./UserContext";
import jwt from 'jsonwebtoken'

function App() {

  const [currentUser, setCurrentUser] = useState();
  const [token, setToken] = useState( null );


  let history = useHistory();

  /**updates currentuser if valid token */


  useEffect(
    function getCurrUser() {
      async function getCurrUserResponse() {
        const username = jwt.decode(token).username
        let user = await JoblyApi.getUserInfo(username);
        setCurrentUser(user);
      }
      if (token) {
        localStorage.setItem('jobly-token', token);
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
      setToken(newToken);
      history.push("/companies");
    }
  }

  async function signup(userInfo) {
    // setAuthUserInfo(userInfo);
    const newToken = await JoblyApi.register(userInfo);

    if (newToken) {
      setToken(newToken);
      history.push("/companies");
    }
  }

  function logout() {
    setCurrentUser(null);
    setToken(null);
    localStorage.removeItem('jobly-token');
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
