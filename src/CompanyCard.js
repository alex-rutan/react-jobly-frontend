import React from "react";
import {NavLink} from "react-router-dom"

function CompanyCard({company}) {
  return (
    <NavLink exact to={`companies/${company.handle}`}>

    <div>
      <p>{company.name}</p>
      <p>{company.description}</p>
    </div>

    </NavLink>
  )
}

export default CompanyCard;