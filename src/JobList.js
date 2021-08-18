import React from "react";
import JobCard from "./JobCard";


function JobList( {jobs} ) {
  console.log(jobs, "JObList")
  return (
    <div>
      {jobs.map(j => (
        <JobCard key={j} job={j}/>
      ))}
    </div>
  )
}

export default JobList;