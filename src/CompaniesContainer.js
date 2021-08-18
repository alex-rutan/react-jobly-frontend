import React, { useState, useEffect } from "react";
import JoblyApi from "./api";
import SearchForm from "./SearchForm";
import CompanyList from "./CompanyList";

/**
 * Handles SearchForm and CompaniesList
 *
 *  state: searchTerm, companiesList
 */
function CompaniesContainer() {
  const [searchTerm, setSearchTerm] = useState("");
  const [companiesList, setCompaniesList] = useState([]);

  // makes request to the server for a list of companies based off seachterm
  useEffect(
    function getCompanies() {
      async function getCompaniesResponse() {
        let companies = await JoblyApi.filterCompanies(searchTerm);
        setCompaniesList(companies);
        //TODO add loading spinner?
      }
      getCompaniesResponse();
    },
    [searchTerm]
  );

  function handleSearch(search) {
    setSearchTerm(search);
  }

  return (
    <div className="CompaniesContainer" style={{
      display: "flex",
      alignItems: "center",
      flexDirection: "column"
    }}>
        <SearchForm initialSearch={searchTerm} handleSearch={handleSearch} formType="company" />
        <CompanyList companies={companiesList} />
    </div>
  );
}

export default CompaniesContainer;
