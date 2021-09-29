"use strict"

import React from "react";
import { NavLink } from "react-router-dom";
import "./CompanyCard.css";

/**
 * CompanyCard: renders UI for a company
 * props: company: {handle,name,description,logo,numEmployees}
 *
 * [CompanyContainer, CompanyList] -> CompanyCard
 */

function CompanyCard({ company }) {
  return (
    <div className="CompanyCard">
      <NavLink exact to={`companies/${company.handle}`}>
      <div className="card company-card" >
        <div className="card-body">
          <h2 className="card-title">{company.name}</h2>
          <p className="card-text">{`Number of Employees: ${company.numEmployees}`}</p>
          <p className="card-text">{company.description}</p>
        </div>
        {company.logoUrl && <img src={company.logoUrl} alt={`${company.name} logo`}></img>}
      </div>
    </NavLink>
    </div>
  );
}

export default CompanyCard;
