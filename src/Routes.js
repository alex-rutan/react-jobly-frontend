import { Switch, Route, Redirect } from "react-router-dom";
import CompanyDetails from "./CompanyDetails";
import CompaniesContainer from "./CompaniesContainer";
import JobsContainer from "./JobsContainer";
import ProfileForm from "./ProfileForm";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";
import HomePage from "./HomePage";

function Routes() {
  return (
    <Switch>
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
      <Route exact path="/login">
        <LoginForm />
      </Route>
      <Route exact path="/signup">
        <SignUpForm />
      </Route>
      <Route exact path="/">
        <HomePage />
      </Route>
      <Redirect to="/" />
    </Switch>
  );
}

export default Routes;
