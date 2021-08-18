import React from "react";


//TODO add application button
function JobCard({job}) {
  return (
    <div>
      <h1>{job.title}</h1>
      <p>{job.companyHandle}</p>
      <p> Salary: {job.salary}</p>
      <p>Equity: {job.equity}</p>
    </div>
  )
}

export default JobCard;