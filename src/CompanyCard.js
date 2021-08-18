import React from "react";
import { NavLink } from "react-router-dom";

/**
 * renders UI for a company
 * props: company{handle,name,description,logo,numEmployees}
 *
 * [CompanyContainer, CompanyList] -> CompanyCard
 */
function CompanyCard({ company }) {
  return (
    <NavLink exact to={`companies/${company.handle}`}>
      <div>
        <p>{company.name}</p>
        <p>{company.description}</p>
      </div>
    </NavLink>
  );
}

export default CompanyCard;
