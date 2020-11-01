import { Avatar } from "@material-ui/core";
import React from "react";
import "../Styles/Profile.css";
import { makeStyles } from "@material-ui/core/styles";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../Libs/Auth";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  small: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
  large: {
    width: theme.spacing(25),
    height: theme.spacing(25),
  },
}));

function Profile() {
  const classes = useStyles();
  const { isAuth } = useAuth();
  let history = useHistory();

  const deleteUser = async (e) => {
    e.preventDefault();
    try {
      let data = await fetch("http://localhost:3000/users/profile/delete", {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
      });

      let user = await data.json();

      if (user.status === 200) {
        history.push("/login");
      } else {
        alert("error");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="profile">
      <div className="profile__avatar">
        <Avatar
          className={classes.large}
          alt={isAuth.user.FirstName}
          src="https://i.redd.it/bb86qrrbeq121.jpg"
        />
      </div>
      <div className="profile__details">
        <h2>Profile Details</h2>
        <p>
          <span>
            {isAuth.user.FirstName} {isAuth.user.LastName}
          </span>
          <br />
          <span>{isAuth.user.Email}</span>
          <br />
          <span>{isAuth.user.Username}</span>
        </p>
      </div>
      <Link to="/profileupdate">
        <button type="submit" className="profile__updateButton animation">
          <span>Update Profile</span>
        </button>
      </Link>
      <button
        onClick={() => {
          if (window.confirm("Are you sure you want to delete your profile?"))
            deleteUser();
        }}
        type="submit"
        className="profile__deleteButton animation__delete"
      >
        <span>Delete Profile</span>
      </button>
    </div>
  );
}

export default Profile;
