import { useContext } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import CompanyDetails from "./CompanyDetails";
import CompaniesContainer from "./CompaniesContainer";
import JobsContainer from "./JobsContainer";
import EditProfileForm from "./EditProfileForm";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";
import HomePage from "./HomePage";
import UserContext from "./UserContext";

function Routes() {
  //private route -> usercontext {props.childre}
  const { currentUser } = useContext(UserContext);
  // const token = localStorage.getItem("jobly-token");
  return (
    <div className="Routes">
      {currentUser?
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
            <EditProfileForm />
          </Route>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Redirect to="/" />
        </Switch>
        : <Switch>
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
        </Switch>}
    </div>
  );
}

export default Routes;
