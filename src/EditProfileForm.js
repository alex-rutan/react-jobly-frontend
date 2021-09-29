"use strict"

import React, { useState, useContext } from "react";
import UserContext from "./UserContext";
import Alert from "./Alert";
import "./EditProfileForm.css"

/** SignUpForm: Sign up page that presents form that takes in all
 *  needed information to create a revised user instance in our database.
 *
 *  State: profileInfo, formError
 *  Context: currentUser, updateProfile
 */

function EditProfileForm() {
  const { currentUser, updateProfile } = useContext(UserContext);
  const [ formError, setFormError ] = useState(null);
  const [ profileInfo, setProfileInfo ] = useState({
    firstName: currentUser.firstName,
    lastName: currentUser.lastName,
    email: currentUser.email,
    password: currentUser.password
  });

  function handleChange(evt) {
    const { name, value } = evt.target;
    setProfileInfo((profileData) => ({
      ...profileData,
      [name]: value,
    }));
  }

  // Sends search back to parent component
  async function handleSubmit(evt) {
    evt.preventDefault();
      try {
        await updateProfile(profileInfo);
        setFormError([]);
      } catch (err) {
        setFormError(err);
      }
  }

  return (
    <div className="EditProfileForm">
      <div className="EditProfileForm-body">
        <div className="EditProfileForm-card card mx-auto">
          <form className="EditProfile-page" onSubmit={handleSubmit}>
            <div className="form-group">
              <legend className="form-title">Edit Profile</legend>
              <p>username: {currentUser.username}</p>
              <div className="form-floating mb-3">
                <input
                  id="floatingFirstName"
                  name="firstName"
                  className="form-control"
                  placeholder="First Name"
                  onChange={handleChange}
                  value={profileInfo.firstName}
                  required
                />
                <label htmlFor="floatingFirstName">First Name</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  id="floatingLastName"
                  name="lastName"
                  className="form-control"
                  placeholder="First Name"
                  onChange={handleChange}
                  value={profileInfo.lastName}
                  required
                />
                <label htmlFor="floatingLastName">Last Name</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  id="floatingEmail"
                  name="email"
                  type="email"
                  className="form-control"
                  placeholder="Last Name"
                  onChange={handleChange}
                  value={profileInfo.email}
                  required
                />
                <label htmlFor="floatingEmail">Email</label>
              </div>
              <br></br>
              <p>Enter password to save changes:</p>
              <div className="form-floating mb-3">
                <input
                  id="floatingPassword1"
                  name="password"
                  type="password"
                  className="form-control"
                  placeholder="Password"
                  onChange={handleChange}
                  value={profileInfo.password}
                  required
                />
                <label htmlFor="floatingPassword1">Password</label>
              </div>
            </div>
            <button className="btn btn-primary me-2">Save Changes</button>
          </form>
          {formError !== null ?
            (formError.length === 0 ?
              <Alert
                className="alert"
                type="success"
                messages={["profile updated successfully"]} />
                :
              <Alert
                className="alert"
                type="danger"
                messages={formError} />)
            :
            null
          }
        </div>
      </div>
    </div>
  );
}

export default EditProfileForm;
