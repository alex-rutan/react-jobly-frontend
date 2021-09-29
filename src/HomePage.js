"use strict"

import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import UserContext from "./UserContext";
import "./HomePage.css"


/** Homepage: homepage/landing page
 *
 *  State: currentUser
 */

function HomePage() {
  const { currentUser } = useContext(UserContext);

  return (
    <div className="HomePage">
      <div className="HomePage-body">

        { currentUser ?
          <div className="HomePage-welcome container mx-auto">
            <h1>Jobly</h1>
            <p>All the jobs in one, convenient place.</p>
            <NavLink exact to="/companies">
              <button className="btn btn-primary me-2">Browse Companies</button>
            </NavLink>
            <NavLink exact to="/jobs">
              <button className="btn btn-primary me-2">Browse Jobs</button>
            </NavLink>
          </div>
          :
          <div className="HomePage-welcome container mx-auto">
            <h1>Jobly</h1>
            <p>All the jobs in one, convenient place.</p>
            <NavLink exact to="/signup">
              <button className="btn btn-primary me-2">Sign Up</button>
            </NavLink>
            <NavLink exact to="/login">
              <button className="btn btn-primary me-2">Login</button>
            </NavLink>
          </div>
        }

      </div>
    </div>
  );
}

export default HomePage;