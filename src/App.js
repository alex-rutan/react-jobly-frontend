import './App.css';
import Nav from './Nav';
import Routes from './Routes'
import { BrowserRouter } from "react-router-dom"
import React, {useEffect, useState} from 'react';
import JoblyApi from './api';

function App() {

  //maybe change to token
  const [currentUser, setCurrentUser] = useState(null)
  const [loginUserData , setLoginUserData] = useState({username:"", password:""})

  console.log(currentUser)
  
  useEffect(
    function getUser(){
      async function getUserResponse(){
        console.log(loginUserData, " IAM IN USEEFFECT")
          let user = await JoblyApi.login(loginUserData)
          setCurrentUser(user)
        }getUserResponse()
      }
    ,[loginUserData])
  

  function login(loginUserInfo){
    setLoginUserData(loginUserInfo)
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
