import React from "react";
import { NavLink } from "react-router-dom";
import "./CompanyCard.css";

/**
 * renders UI for a company
 * props: company{handle,name,description,logo,numEmployees}
 *
 * [CompanyContainer, CompanyList] -> CompanyCard
 */
function CompanyCard({ company }) {
  return (
    <div className="CompanyCard" style={{padding: "8px"}}>
      <NavLink exact to={`companies/${company.handle}`}>
      <div className="card" >
        <div className="card-body">
          <h4 className="card-title">{company.name}</h4>
          <p className="card-text">{company.description}</p>
        </div>
      </div>
    </NavLink>
    </div>
  );
}

export default CompanyCard;
