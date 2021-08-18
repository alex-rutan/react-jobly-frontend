import React, { useEffect, useState} from "react";
import {useParams} from "react-router-dom"
import JoblyApi from "./api";
import JobList from "./JobList"

function CompanyDetails() {

  const {handle} = useParams();
  const [jobs, setJobs] = useState(null)

  useEffect(function getCompanies() {
    async function getCompaniesResponse() {
      let company= await JoblyApi.getCompany(handle);
  
      setJobs(company.jobs)
      //TODO add loading spinner?
    };
    getCompaniesResponse();
  }, [handle]);

  if(!jobs) return (<p>Fetching Jobs</p>)
  
  return (
    <div>
      <JobList jobs={jobs}/>
    </div>
  )
}

export default CompanyDetails;