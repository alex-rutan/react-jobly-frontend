import React, {useContext} from "react";
import { NavLink } from "react-router-dom";
import "./Nav.css";
import "bootstrap/dist/css/bootstrap.css";
import UserContext from "./UserContext";


/** Nav: navbar for each page
 *  
 *  Props:
 *  - 
 */
//TODO pass logout function through the nav props
// and add it as an onclick event on the logout button
function Nav() {
  const { logout, currentUser } = useContext(UserContext);
  
  return (
    <div className="Navbar">
    {currentUser
      ?
      <nav className="Nav navbar navbar-expand-lg navbar-light bg-light">
        <NavLink exact to="/" className="navbar-brand">
          Jobly
        </NavLink>
        <NavLink exact to="/companies" className="nav-link">
          Companies
        </NavLink>
        <NavLink exact to="/jobs" className="nav-link">
          Jobs
        </NavLink>
        <NavLink exact to="/profile" className="nav-link">
          Profile
        </NavLink>
        <NavLink exact to="/" className="nav-link" onClick={logout}>
          Log Out {currentUser.firstName}
        </NavLink>
      </nav>
    :
    <nav className="Nav navbar navbar-expand-lg navbar-light bg-light">
        <NavLink exact to="/" className="nav-brand">
          Jobly
        </NavLink>
        <NavLink exact to="/login" className="nav-link">
          Login
        </NavLink>
        <NavLink exact to="/signup" className="nav-link">
          SignUp
        </NavLink>
      </nav>
    }
    </div>
  );
}


export default Nav;