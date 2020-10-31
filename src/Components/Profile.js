import { Avatar } from "@material-ui/core";
import React from "react";
import "../Styles/Profile.css";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
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
    </div>
  );
}

export default Profile;
