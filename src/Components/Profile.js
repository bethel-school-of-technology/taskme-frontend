import { Avatar } from "@material-ui/core";
import React from "react";
import "../Styles/Profile.css";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

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

  return (
    <div className="profile">
      <div className="profile__avatar">
        <Avatar
          className={classes.large}
          alt=""
          src="https://www.history.com/.image/ar_16:9%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cg_faces:center%2Cq_auto:good%2Cw_768/MTU3ODc5MDgzNDc5NjcyNTQz/portrait-of-john-smith.jpg"
        />
      </div>
      <div className="profile__details">
        <h2>Profile Details</h2>
        <p>
          <span>John Smith</span>
          <br />
          <span>johnsmith@gmail.com</span>
          <br />
          <span>johnsmith</span>
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
