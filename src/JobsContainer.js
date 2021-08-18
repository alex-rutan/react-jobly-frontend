import React, { useState, useEffect } from "react";
import JoblyApi from "./api";
import SearchForm from "./SearchForm";
import JobList from "./JobList";

/**
 * Handles SearchForm and JobsList
 *
 *  state: searchTerm, jobsList
 */

function JobsContainer() {
  const [searchTerm, setSearchTerm] = useState({ title: "" });
  const [jobsList, setJobsList] = useState([]);

  // makes request to the server for a list of jobs based off seachterm
  useEffect(
    function getJobs() {
      async function getJobsResponse() {
        let jobs = await JoblyApi.filterJobs(searchTerm);
        setJobsList(jobs);
        //TODO add loading spinner?
      }
      getJobsResponse();
    },
    [searchTerm]
  );

  function handleSearch(search) {
    setSearchTerm(search);
  }

  return (
    <div>
      <SearchForm initialSearch={searchTerm} handleSearch={handleSearch} />
      <JobList jobs={jobsList} />
    </div>
  );
}

export default JobsContainer;
