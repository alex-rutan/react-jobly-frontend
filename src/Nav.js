import React from "react";
import { NavLink } from "react-router-dom";
import "./Nav.css";

/** Nav: navbar for each page
 *  
 *  Props:
 *  - 
 */

function Nav() {
  

  return (
    <nav className="Nav">
      <NavLink exact to="/dogs">
        All Dogs
      </NavLink>
      {dogNames.map(name =>
        <NavLink exact to={`/dogs/${name.toLowerCase()}`}>
         {name}
        </NavLink>)}
    </nav>
  );
}


export default Nav;