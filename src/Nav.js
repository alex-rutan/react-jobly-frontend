import React from "react";
import { NavLink } from "react-router-dom";
import "./Nav.css";


/** Nav: navbar for each page
 *  
 *  Props:
 *  - 
 */
//TODO pass logout function through the nav props
// and add it as an onclick event on the logout button
function Nav({isLogin}) {
  

  return (
    <div className="Navbar">
    {isLogin
      ?
      <nav className="Nav">
        <NavLink exact to="/">
          Jobly
        </NavLink>
        <NavLink exact to="/companies">
          Companies
        </NavLink>
        <NavLink exact to="/jobs">
          Jobs
        </NavLink>
        <NavLink exact to="/profile">
          Profile
        </NavLink>
        <NavLink onCLick exact to="/">
        </NavLink>
      </nav>
    :
    <nav className="Nav">
        <NavLink exact to="/">
          Jobly
        </NavLink>
        <NavLink exact to="/login">
          Login
        </NavLink>
        <NavLink exact to="/signup">
          SignUp
        </NavLink>
      </nav>
    }
    </div>
  );
}


export default Nav;