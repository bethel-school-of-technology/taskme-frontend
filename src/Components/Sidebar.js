import React from "react";
import { Avatar, IconButton } from "@material-ui/core";
import "../Styles/Sidebar.css";
import SearchOutlined from "@material-ui/icons/Search";
import Navbar from "./Navbar";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <Avatar src="" />
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
    </div>
  );
}

export default Sidebar;
