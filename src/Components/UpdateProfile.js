import React, { useState } from "react";
import "../Styles/UpdateProfile.css";
import { useAuth } from "../Libs/Auth";
import { Link } from "react-router-dom";

function UpdateProfile() {
  const { isAuth } = useAuth();
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");

  return (
    <div className="updateProfile">
      <div className="updateProfile__details">
        <h2>Update Profile</h2>
        <form>
          <input
            placeholder="E-mail"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            placeholder="First Name"
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <input
            placeholder="Last Name"
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          <input
            placeholder="Username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </form>
      </div>
      <Link to="/profile">
        <button type="submit" className="updateProfile__saveButton animation">
          <span>Save</span>
        </button>
      </Link>
    </div>
  );
}

export default UpdateProfile;
