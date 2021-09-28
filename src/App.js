import "./App.css";
import Nav from "./Nav";
import Routes from "./Routes";
import { useHistory } from "react-router-dom";
import React, { useEffect, useState } from "react";
import JoblyApi from "./api";
import UserContext from "./UserContext";
import jwt from "jsonwebtoken";


function App() {
  const [currentUser, setCurrentUser] = useState();
  const [token, setToken] = useState(
    localStorage.getItem("jobly-token") || null
  );
  const [isLoading, setIsloading] = useState(false);
  const [applicationIDs, setApplicationIDs] = useState(new Set([]))

  const history = useHistory();

  useEffect(
    function setLocalStorageToken() {
      if (token === null) {
        localStorage.removeItem("jobly-token");
      } else {
        localStorage.setItem("jobly-token", token);
      }
    },
    [token]
  );

  /**updates currentuser if valid token */
  useEffect(
    function getCurrUser() {
      async function getCurrUserResponse() {
        if (token !== null) {
          JoblyApi.token = token;
          const { username } = jwt.decode(token);
          let user = await JoblyApi.getUserInfo(username);
          setCurrentUser(user);
          setApplicationIDs(new Set(user.applications))
        }
        setIsloading(true);
      }
      getCurrUserResponse();
    },
    [token]
  );

  async function login(loginUserInfo) {
      const response = await JoblyApi.login(loginUserInfo);
      console.log("INSIDE APP AT LOGIN", response)
      setToken(response);
      history.push("/companies");
  }

  async function signup(userInfo) {
    const newToken = await JoblyApi.register(userInfo);

    if (newToken) {
      setToken(newToken);
      history.push("/companies");
    }
  }

  async function updateProfile(profileInfo) {
    const user = await JoblyApi.updateProfile(profileInfo);
    setCurrentUser(user);
  }

  async function apply(jobID) {
    await JoblyApi.apply(jobID);
    setApplicationIDs(new Set( [...applicationIDs, jobID]  ));
  }

  function logout() {
    setCurrentUser(null);
    setToken(null);
    localStorage.removeItem("jobly-token");
  }

  console.log(applicationIDs ,"APPPPPP")
  
  if (!isLoading) return <p>Fetching User</p>;

  return (
    <UserContext.Provider
      value={{ 
        currentUser, 
        login, 
        signup, 
        logout, 
        updateProfile, 
        applicationIDs, 
        apply 
      }}>
      <div className="App">
        <Nav />
        <Routes />
      </div>
    </UserContext.Provider>
  );
}

export default App;
