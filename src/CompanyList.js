import React from "react";
import CompanyCard from "./CompanyCard";

function CompanyList({companies}) {
  return (
    <div>
      {companies.map(c => (
        <CompanyCard key={c} company={c}/>
      ))}
    </div>
  )
}

export default CompanyList;