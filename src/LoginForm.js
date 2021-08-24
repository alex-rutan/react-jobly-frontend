import React, { useState, useContext } from "react";
import UserContext from "./UserContext";
import Alert from "./Alert";

function LoginForm() {
  const { login } = useContext(UserContext);
  const [loginInfo, setLoginInfo] = useState({ username: "", password: "" });
  const [formError, setFormError] = useState(null);


  function handleChange(evt) {
    const { name, value } = evt.target;
    setLoginInfo((LoginData) => ({
      ...LoginData,
      [name]: value,
    }));
  }

  // Sends search back to parent component
  async function handleSubmit(evt) {
    evt.preventDefault();
    try {
      await login(loginInfo);
    } catch (err) {
      console.log("FORM ERROR", err)
      setFormError(err);
    }
  }

  return (
    <div className="LoginForm" style={{ padding: "8px" }}>
      <form className="Login-page" onSubmit={handleSubmit}>
        <input
          style={{ width: "400px" }}
          id="Login-username"
          name="username"
          className="form-control"
          placeholder="Username"
          onChange={handleChange}
          value={loginInfo.username}
          required
        />
        <input
          style={{ width: "400px" }}
          id="Login-password"
          name="password"
          className="form-control"
          placeholder="Password"
          onChange={handleChange}
          value={loginInfo.password}
          required
        />
        <button>Log In</button>
      </form>
      { formError !== null ? <Alert type="danger" messages={formError} /> : null}
    </div>
  );
}

export default LoginForm;
