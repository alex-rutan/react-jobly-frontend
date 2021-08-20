import React,{useContext} from "react";
import "./JobCard.css";
import UserContext from "./UserContext";
/**
 * renders UI for a job
 * props: job{title,salary,equity,companyHandle}
 *
 * [JobsContainer, JobList] -> JobCard
 * 
 */

//TODO add application button
function JobCard({ job }) {
  const { applicationIDs ,apply } = useContext(UserContext);

  function handleApply(evt){
    evt.preventDefault()
    apply(job.id)
  }
  
  //TODO FIX SO IT WORKS WITH SET
  const application = [...applicationIDs] 
  let btn =  application.includes(job.id)
      ?<div> APPLIED </div>
      :<button onClick={handleApply}> APPLY</button>
   
  return (
    <div className="JobCard card" style={{padding: "8px"}}>
      <div className="card-body">
        <h1 className="card-title">{job.title}</h1>
        <p className="card-text">{job.companyHandle}</p>
        <p className="card-text"> Salary: {job.salary}</p>
        <p className="card-text">Equity: {job.equity}</p>
        {btn}
      </div>
    </div>
  );
}

export default JobCard;
