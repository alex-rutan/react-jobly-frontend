import React from "react";
import JobCard from "./JobCard";

/**
 * Rec'd a List of jobs and maps out JobCards.
 * props: [{job},.....]
 *
 * [JobsContainer] -> JobsList
 */
//TODO use uuid for key
function JobList({ jobs }) {
  return (
    <div>
      {jobs.map((j) => (
        <JobCard key={j.id} job={j} />
      ))}
    </div>
  );
}

export default JobList;
