import React from "react";
import "./JobCard.css";

/**
 * renders UI for a job
 * props: job{title,salary,equity,companyHandle}
 *
 * [JobsContainer, JobList] -> JobCard
 * 
 */

//TODO add application button
function JobCard({ job }) {
  return (
    <div className="JobCard card" style={{padding: "8px"}}>
      <div className="card-body">
        <h1 className="card-title">{job.title}</h1>
        <p className="card-text">{job.companyHandle}</p>
        <p className="card-text"> Salary: {job.salary}</p>
        <p className="card-text">Equity: {job.equity}</p>
      </div>
    </div>
  );
}

export default JobCard;
