import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import JoblyApi from "./api";
import JobList from "./JobList";

/**
 * Passes through a List of Job from the company specified by the param
 * renders out a List of jobcards from component.
 *
 *  params: handle
 *  state:  jobs store whole company in state
 * add prop for company details
 */
function CompanyDetails() {
  const { handle } = useParams();
  const [jobs, setJobs] = useState(null);

  // makes request to the server for a list of companies based off seachterm
  useEffect(
    function getCompanies() {
      async function getCompaniesResponse() {
        let company = await JoblyApi.getCompany(handle);
        setJobs(company.jobs);
        //TODO add loading spinner?
      }
      getCompaniesResponse();
    },
    [handle]
  );

  if (!jobs) return <p>Fetching Jobs</p>;

  return (
    <div>
      <JobList jobs={jobs} />
    </div>
  );
}

export default CompanyDetails;
