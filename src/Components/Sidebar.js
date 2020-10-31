import React from "react";
import { Avatar, IconButton } from "@material-ui/core";
import "../Styles/Sidebar.css";
import SearchOutlined from "@material-ui/icons/Search";
import Navbar from "./Navbar";
import { useAuth } from "../Libs/Auth";
import { Link } from "react-router-dom";
import Badge from "@material-ui/core/Badge";
import { withStyles } from "@material-ui/core/styles";

const StyledBadge = withStyles((theme) => ({
  badge: {
    backgroundColor: "#44b700",
    color: "#44b700",
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    "&::after": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      content: '""',
    },
  },
}))(Badge);

function Sidebar() {
  const { isAuth, userHasAuth } = useAuth();

  const signOut = async (e) => {
    e.preventDefault();
    await fetch("http://localhost:3000/users/logout", {
      method: "GET",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    });
    userHasAuth(false);
  };

  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <Link to="/profile" style={{ textDecoration: "none" }}>
          <StyledBadge
            overlap="circle"
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right",
            }}
            variant="dot"
          >
            <Avatar alt={isAuth.user.FirstName} src={isAuth.user.FirstName} />
          </StyledBadge>
        </Link>
        <Link to="/profile" style={{ textDecoration: "none", color: "white" }}>
          <div className="sidebar__headerInfo">
            <h3>
              {isAuth.user.FirstName} {isAuth.user.LastName}
            </h3>
            <p>{isAuth.user.Email}</p>
          </div>
        </Link>
        <div className="sidebar__headerSearch">
          <IconButton>
            <SearchOutlined />
          </IconButton>
        </div>
      </div>
      <div className="sidebar__nav">
        <Navbar />
      </div>
      <div className="sidebar__signInOut animation" onClick={signOut}>
        <span>Sign Out</span>
      </div>
    </div>
  );
}

export default Sidebar;
