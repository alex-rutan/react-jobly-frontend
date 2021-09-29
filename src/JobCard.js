import React, { useEffect, useState, useContext } from "react";
import JoblyApi from "./api";
import "./JobCard.css";
import UserContext from "./UserContext";


/**
 * renders UI for a job
 * 
 * props: job: {title,salary,equity,companyHandle}
 * context: applicationIDs, apply
 *
 * [JobsContainer, JobList] -> JobCard
 * 
 */

function JobCard({ job }) {
  const { applicationIDs, apply } = useContext(UserContext);
  const [ company, setCompany ] = useState(null);

  useEffect(
    function getCompany() {
      async function getCompanyResponse() {
        let company = await JoblyApi.getCompany(job.companyHandle);
        setCompany(company.name);
        //TODO add loading spinner?
      }
      getCompanyResponse();
    },
    [job.companyHandle]
  );

  function handleApply(evt) {
    evt.preventDefault()
    apply(job.id)
  }


  return (
    <div className="JobCard card" style={{ padding: "8px" }}>
      <div className="card-body">
        <h1 className="card-title">{job.title}</h1>
        <p className="card-text">{company}</p>
        <p className="card-text"> Salary: {job.salary}</p>
        {job.equity !== null ?
          <p className="card-text">Equity: {job.equity}</p>
          :
          null
        }
        {applicationIDs.has(job.id) ?
          <strong className="applied"> APPLIED </strong>
          :
          <button className="btn btn-primary me-2" onClick={handleApply}> Apply to Job</button>
        }
      </div>
    </div>
  );
}

export default JobCard;
