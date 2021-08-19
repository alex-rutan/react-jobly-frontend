import './App.css';
import Nav from './Nav';
import Routes from './Routes'
import { BrowserRouter, useHistory } from "react-router-dom"
import React, { useEffect, useState } from 'react';
import JoblyApi from './api';

function App() {

  //maybe change to token
  const [authUserInfo, setAuthUserInfo] = useState();
  const [currentUser, setCurrentUser] = useState({})
  // when authUser changes, that's when use effect get token
  const [token, setToken] = useState(null);

  // const history = useHistory();

  console.log(token);

  useEffect(function getToken() {
    async function getTokenResponse() {
      console.log(authUserInfo, " IAM IN USEEFFECT")
      if (authUserInfo.username) {
        let newToken = await JoblyApi.login(authUserInfo)
        setToken(newToken)
        // if(newToken) history.push("localhost:3000/");
      }
      if (authUserInfo) { }
    }
    getTokenResponse();
  }
    , [authUserInfo])

  useEffect(function getCurrUser() {
    async function getCurrUserResponse() {
      console.log(token, " IAM IN USEEFFECT")
      let user = await JoblyApi.getUserInfo(authUserInfo.username)
      setCurrentUser(user)
    }
    getCurrUserResponse();
  }
    , [token])





  function login(loginUserInfo) {
    setAuthUserInfo(loginUserInfo)
  }

  function signUp(userInfo) {
    setAuthUserInfo(userInfo);
  }


  // longout
  // signup

  return (
    <div className="App">
      <BrowserRouter>
        <Nav isLogin={true} />
        <Routes login={login} />
      </BrowserRouter>
    </div>
  );
}

export default App;
