import React, { useState, useEffect } from "react";
import JoblyApi from "./api";
import SearchForm from "./SearchForm"
import JobList from "./JobList"



function JobsContainer() {
  const [searchTerm, setSearchTerm] = useState({name:""})
  const [jobsList, setJobsList] = useState([])

  useEffect(function getJobs() {
    async function getJobsResponse() {
      // TODO: fix the janky current fix for title vs. name
      let search = {}
      search.title = searchTerm.name;
      let jobs = await JoblyApi.filterJobs(search);
      setJobsList(jobs);
      //TODO add loading spinner?
    };
    getJobsResponse();
  }, [searchTerm]);

  function handleSearch(search) {
    setSearchTerm(search);
  }

  return (
    <div>
      <SearchForm initialSearch={""} handleSearch={handleSearch} />
      <JobList jobs={jobsList} />
    </div>
  )
}

export default JobsContainer;