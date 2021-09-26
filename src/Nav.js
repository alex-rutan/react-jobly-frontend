import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./Nav.css";
import UserContext from "./UserContext";


/** Nav: navbar for each page
 *  
 *  State: logout, currentUser
 */

function Nav() {
  const { logout, currentUser } = useContext(UserContext);

  return (
    <div className="Nav">

      {currentUser ?
        <nav className="navbar navbar-expand">
          <div className="container-fluid">
            <NavLink exact to="/" className="navbar-brand">
              Jobly
            </NavLink>
            <div className="navbar-nav me-auto">
              <div className="nav-item">
                <NavLink exact to="/companies" className="nav-link">
                  Companies
                </NavLink>
              </div>
              <div className="nav-item">
                <NavLink exact to="/jobs" className="nav-link">
                  Jobs
                </NavLink>
              </div>
              <div className="nav-item">
                <NavLink exact to="/profile" className="nav-link">
                  Edit Profile
                </NavLink>
              </div>
            </div>
            <div className="navbar-right">
              <NavLink exact to="/" className="nav-link" onClick={logout}>
                Log Out {currentUser.firstName}
              </NavLink>
            </div>
          </div>
        </nav>
        :
        <nav className="navbar navbar-expand">
          <div className="container-fluid">
            <NavLink exact to="/" className="navbar-brand">
              Jobly
            </NavLink>
            <div className="navbar-right d-flex">
              <div className="nav-item">
                <NavLink exact to="/login" className="nav-link">
                  Login
                </NavLink>
              </div>
              <div className="nav-item">
                <NavLink exact to="/signup" className="nav-link">
                  Sign Up
                </NavLink>
              </div>
            </div>
          </div>
        </nav>
      }

    </div>
  );
}


export default Nav;


            // <NavLink exact to="/profile" className="nav-link">
            //   Profile
            // </NavLink>
            // <NavLink exact to="/" className="nav-link" onClick={logout}>
            //   Log Out {currentUser.firstName}
            // </NavLink> */}