import React, { useState, useEffect } from "react";
import JoblyApi from "./api";
import SearchForm from "./SearchForm"
import CompanyList from "./CompanyList"



function CompaniesContainer() {
  const [searchTerm, setSearchTerm] = useState({name:""})
  const [companiesList, setCompaniesList] = useState([])

  useEffect(function getCompanies() {
    async function getCompaniesResponse() {
      let companies = await JoblyApi.filterCompanies(searchTerm);
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