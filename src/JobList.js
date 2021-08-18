import React from "react";
import JobCard from "./JobCard";


function JobList( {jobs} ) {
  return (
    <div>
      {jobs.map(j => (
        <JobCard key={j} job={j}/>
      ))}
    </div>
  )
}

export default JobList;