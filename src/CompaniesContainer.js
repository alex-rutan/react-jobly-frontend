import React, { useState, useEffect } from "react";
import JoblyApi from "./api";
import SearchForm from "./SearchForm"
import CompanyList from "./CompanyList"



function CompaniesContainer() {
  const [searchTerm, setSearchTerm] = useState()
  const [companiesList, setCompaniesList] = useState([])

  useEffect(function getCompanies() {
    async function getCompaniesResponse() {
      let companies;
      if (searchTerm === "") {
        companies = await JoblyApi.getAllCompanies();
      } else {
        companies = await JoblyApi.filterCompanies(searchTerm);
      }
      console.log("WE MADE IT", companies)
      setCompaniesList(companies);
      
      //TODO add loading spinner?
    };
    getCompaniesResponse();
  }, [searchTerm]);

  function handleSearch(search) {
    setSearchTerm(search);
  }

  return (
    <div>
      <SearchForm initialSearch={""} handleSearch={handleSearch} />
      <CompanyList companies={companiesList} />
    </div>
  )
}

export default CompaniesContainer;