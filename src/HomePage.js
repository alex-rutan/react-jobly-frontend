import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import UserContext from "./UserContext";

//TODO renders out text while login or asks to login or signup if no currentuser
function HomePage() {
  const { currentUser } = useContext(UserContext);
  return (
    <div>
      {currentUser ?
        <div>
          <h2>Jobly </h2>
          <h6>All the jobs in one, convenient place</h6>
          <h4>Welcome back, {currentUser.firstName}!</h4>
        </div>
        :
        <div>
          <h2>Jobly </h2>
          <h6>All the jobs in one, convenient place</h6>
          <NavLink exact to="/login">
            <button>Login</button>
          </NavLink>
          <NavLink exact to="signup">
            <button>Sign Up</button>
          </NavLink>
        </div>
      }
    </div>

  )
}

export default HomePage;