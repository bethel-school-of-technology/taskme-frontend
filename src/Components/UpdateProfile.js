import React, { useState } from "react";
import "../Styles/UpdateProfile.css";
import { useAuth } from "../Libs/Auth";
import { Link, useHistory } from "react-router-dom";

function UpdateProfile() {
  let history = useHistory();
  const { isAuth } = useAuth();
  const [Email, setEmail] = useState(isAuth.user.Email);
  const [FirstName, setFirstName] = useState(isAuth.user.FirstName);
  const [LastName, setLastName] = useState(isAuth.user.LastName);
  const [Username, setUsername] = useState(isAuth.user.Username);

  const updateUser = async (e) => {
    e.preventDefault();
    try {
      let data = await fetch("http://localhost:3000/users/profile/update/", {
        method: "PUT",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          Email,
          FirstName,
          LastName,
          Username,
        }),
      });

      let user = await data.json();

      if (user.status === 200) {
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
            value={Email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            placeholder="First Name"
            type="text"
            value={FirstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <input
            placeholder="Username"
            type="text"
            value={Username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            placeholder="Last Name"
            type="text"
            value={LastName}
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
