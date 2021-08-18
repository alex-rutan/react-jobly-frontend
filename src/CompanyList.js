import React from "react";
import CompanyCard from "./CompanyCard";

/**
 * Rec'd a List of companies and maps out CompanyCards.
 * props: [{company},.....]
 *
 * [CompanyContainer] -> CompanyList
 */

//TODO use uuid for key
function CompanyList({ companies }) {
  return (
    <div>
      {companies.map((c) => (
        <CompanyCard key={c.handle} company={c} />
      ))}
    </div>
  );
}
export default CompanyList;
