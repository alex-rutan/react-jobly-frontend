import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import UserContext from "./UserContext";
import "./HomePage.css"

//TODO renders out text while login or asks to login or signup if no currentuser
function HomePage() {
  const { currentUser } = useContext(UserContext);

  return (
    <div className="HomePage">
      <div className="HomePage-body">

        {currentUser ?
          <div className="HomePage-welcome container">
            <h1>Jobly</h1>
            <p>All the jobs in one, convenient place.</p>
            <NavLink exact to="/companies">
              <button className="btn btn-primary me-2">Browse Companies</button>
            </NavLink>
            <NavLink exact to="/jobs">
              <button className="btn btn-primary">Browse Jobs</button>
            </NavLink>
          </div>
          :
          <div className="HomePage-welcome container">
            <h1>Jobly</h1>
            <p>All the jobs in one, convenient place.</p>
            <NavLink exact to="/signup">
              <button className="btn btn-primary me-2">Sign Up</button>
            </NavLink>
            <NavLink exact to="/login">
              <button className="btn btn-primary">Login</button>
            </NavLink>
          </div>
        }

      </div>
    </div>
  );
}

export default HomePage;