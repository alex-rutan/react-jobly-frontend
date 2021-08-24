import React, { useState, useContext } from "react";
import UserContext from "./UserContext";
// import { useHistory } from "react-router-dom";


function ProfileForm() {
  // let history = useHistory()

  const { currentUser, updateProfile } = useContext(UserContext);


  const [profileInfo, setProfileInfo] = useState({
    firstName: currentUser.firstName,
    lastName: currentUser.lastName,
    email: currentUser.email,
    password: ""
  });

  function handleChange(evt) {
    const { name, value } = evt.target;
    setProfileInfo((profileData) => ({
      ...profileData,
      [name]: value,
    }));
  }
  // Sends search back to parent component
  function handleSubmit(evt) {
    evt.preventDefault();
    updateProfile(profileInfo)
    // if(currentUser) history.push("/companies")
  }
  //add password field and labels
  return (
    <div className="ProfileForm" style={{ width: "50%", padding: "8px", margin: "10% auto" }}>
      <div className="card" style={{}}>
        <form className="Profile-page" onSubmit={handleSubmit}>
          <h1>Profile</h1>
          <h3>username</h3>
          <p>{currentUser.username}</p>
          <div style={{ display: "flex", alignItems: "center", padding: "10px"  }}>
            <label htmlFor="firstName">First Name:</label>
            <input
              style={{ width: "400px" }}
              id="Profile-first-name"
              name="firstName"
              className="form-control"
              onChange={handleChange}
              value={profileInfo.firstName}
            />
          </div>
          <div style={{ display: "flex", alignItems: "center", padding: "10px"  }}>
            <label htmlFor="lastName">Last Name:</label>
            <input
              style={{ width: "400px" }}
              id="Profile-last-name"
              name="lastName"
              className="form-control"
              onChange={handleChange}
              value={profileInfo.lastName}
            />
          </div>
          <div style={{ display: "flex", alignItems: "center", padding: "10px"  }}>
            <label htmlFor="email">Email:</label>
            <input
              style={{ width: "400px" }}
              id="Profile-email"
              name="email"
              className="form-control"
              onChange={handleChange}
              value={profileInfo.email}
            />
          </div>
          <div style={{ display: "flex", alignItems: "center", padding: "10px" }}>
            <label htmlFor="password">Password:</label>
            <input
              style={{ width: "400px" }}
              id="Profile-password"
              name="password"
              className="form-control"
              type="password"
              onChange={handleChange}
              value={profileInfo.password}
            />
          </div>
          <button>Update</button>
        </form>
      </div>

    </div>
  );
}

export default ProfileForm;
