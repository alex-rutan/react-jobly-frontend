"use strict"

import { Route } from "react-router-dom";
import CompanyDetails from "./CompanyDetails";
import CompaniesContainer from "./CompaniesContainer";
import JobsContainer from "./JobsContainer";
import ProfileForm from "./ProfileForm";

function PrivateRoute() {
  
  return (
    <div className="PrivateRoute">
      <Route exact path="/companies/:handle">
        <CompanyDetails />
      </Route>
      <Route exact path="/companies">
        <CompaniesContainer />
      </Route>
      <Route exact path="/jobs">
        <JobsContainer />
      </Route>
      <Route exact path="/profile">
        <ProfileForm />
      </Route>
    </div>
  )
}


export default PrivateRoute;