import React, {useState} from "react";

function LoginForm( {login} ) {

  const[loginInfo, setLoginInfo] = useState({username:"", password:""})

  
  function handleChange(evt) {
    const { name, value } = evt.target;
    setLoginInfo((LoginData) => ({
      ...LoginData,
      [name]: value,
    }));
  }

  // Sends search back to parent component
  function handleSubmit(evt) {
    evt.preventDefault();
    login( loginInfo );
  }


  return (
    <div className="LoginForm" style={{padding: "8px"}}>
    <form className="Login-page" onSubmit={handleSubmit}>
      <input
        style={{width: '400px'}}
        id="Login-username"
        name="username"
        className="form-control"
        placeholder="Username"
        onChange={handleChange}
        value={loginInfo.username}
      />
      <input
        style={{width: '400px'}}
        id="Login-password"
        name="password"
        className="form-control"
        placeholder="Password"
        onChange={handleChange}
        value={loginInfo.password}
      />
      <button>Log In</button>
    </form>
  </div>
  )
}

export default LoginForm;