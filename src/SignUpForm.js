import React, { useState, useContext } from "react";
import UserContext from "./UserContext";
import Alert from "./Alert";

function SignUpForm() {
  const { signup } = useContext(UserContext);
  const [formError, setFormError] = useState(null);
  const [signUpInfo, setSignUpInfo] = useState({
    username: "",
    password: "",
    firstName: "",
    lastName: "",
    email: "",
  });

  function handleChange(evt) {
    const { name, value } = evt.target;
    setSignUpInfo((SignUpData) => ({
      ...SignUpData,
      [name]: value,
    }));
  }

  // Sends search back to parent component
  async function handleSubmit(evt) {
    evt.preventDefault();
    try {
      await signup(signUpInfo);
    } catch(err) {
      setFormError(err);
    }
  }

  return (
    <div className="SignUpForm" style={{ padding: "8px" }}>
      <form className="Sign-up-page" onSubmit={handleSubmit}>
        <input
          style={{ width: "400px" }}
          id="Sign-up-username"
          name="username"
          className="form-control"
          placeholder="Username"
          onChange={handleChange}
          value={signUpInfo.username}
        />
        <input
          style={{ width: "400px" }}
          id="Sign-up-password"
          name="password"
          className="form-control"
          placeholder="Password"
          onChange={handleChange}
          value={signUpInfo.password}
        />
        <input
          style={{ width: "400px" }}
          id="Sign-up-first-name"
          name="firstName"
          className="form-control"
          placeholder="First Name"
          onChange={handleChange}
          value={signUpInfo.firstName}
        />
        <input
          style={{ width: "400px" }}
          id="Sign-up-last-name"
          name="lastName"
          className="form-control"
          placeholder="Last Name"
          onChange={handleChange}
          value={signUpInfo.lastName}
        />
        <input
          style={{ width: "400px" }}
          id="Sign-up-email"
          name="email"
          className="form-control"
          placeholder="Email"
          onChange={handleChange}
          value={signUpInfo.email}
        />
        <button>Log In</button>
      </form>
      {formError !== null ? <Alert type="danger" messages={["Sign up failed. Password must be 5 characters long and email must be valid email."]}/> : null}
    </div>
  );
}

export default SignUpForm;
