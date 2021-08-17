import React from "react";

function CompanyCard({company}) {
  return (
    <div>
      <p>{company.name}</p>
      <p>{company.description}</p>
    </div>
  )
}

export default CompanyCard;