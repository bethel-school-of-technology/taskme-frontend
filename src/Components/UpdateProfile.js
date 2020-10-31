import React, { useState } from "react";
import "../Styles/UpdateProfile.css";
import { useAuth } from "../Libs/Auth";
import { Link, useHistory } from "react-router-dom";

function UpdateProfile() {
  let history = useHistory();
  const { isAuth } = useAuth();
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");

  const updateUser = async (e) => {
    e.preventDefault();
    try {
      let data = await fetch(`http://localhost:3000/users/profile/update/`, {
        method: "PUT",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          firstName,
          lastName,
          username,
        }),
      });

      let user = await data.json();

      if (user.created) {
        history.push("/profile");
      } else {
        alert("error");
      }
    } catch (err) {
      console.log(err);
    }
  };

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
            placeholder="Username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            placeholder="Last Name"
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </form>
      </div>
      <button
        onClick={updateUser}
        type="submit"
        className="updateProfile__saveButton animation"
      >
        <span>Save</span>
      </button>
    </div>
  );
}

export default UpdateProfile;
