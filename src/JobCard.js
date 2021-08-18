import React from "react";

/**
 * renders UI for a job
 * props: job{title,salary,equity,companyHandle}
 *
 * [JobsContainer, JobList] -> JobCard
 */

//TODO add application button
function JobCard({ job }) {
  return (
    <div>
      <h1>{job.title}</h1>
      <p>{job.companyHandle}</p>
      <p> Salary: {job.salary}</p>
      <p>Equity: {job.equity}</p>
    </div>
  );
}

export default JobCard;
