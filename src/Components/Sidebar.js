import React from "react";
import { Avatar, IconButton } from "@material-ui/core";
import "../Styles/Sidebar.css";
import SearchOutlined from "@material-ui/icons/Search";
import Navbar from "./Navbar";
import { useAuth } from "../Libs/Auth"// import { useAuth } from "../Libs/Auth";

function Sidebar() {
  const { isAuth, userHasAuth } = useAuth();

  const signOut = async (e) => {
     e.preventDefault();
     let data = await fetch("http://localhost:3000/users/logout", {
       method: "GET",
       credentials: "include",
       headers: {
         "Content-Type": "application/json",
       },
     });
     userHasAuth(false);
  }



  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <Avatar src="https://www.history.com/.image/ar_16:9%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cg_faces:center%2Cq_auto:good%2Cw_768/MTU3ODc5MDgzNDc5NjcyNTQz/portrait-of-john-smith.jpg" />
        <div className="sidebar__headerInfo">
          <h3>John Smith</h3>
          <p>johnsmith@gmail.com</p>
        </div>
        <div className="sidebar__headerSearch">
          <IconButton>
            <SearchOutlined />
          </IconButton>
        </div>
      </div>
      <div className="sidebar__nav">
        <Navbar />
      </div>
      <div className="sidebar__signInOut" onClick={signOut}>
        <span>Sign Out</span>
      </div>
    </div>
  );
}

export default Sidebar;
