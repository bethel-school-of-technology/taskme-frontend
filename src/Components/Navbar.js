import React from "react";
import "../Styles/Navbar.css";
import { SidebarData } from "./SidebarNavData";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <nav>
        {SidebarData.map((item, index) => {
          return (
            <div key={index} className="navbar__links">
              <Link to={item.path}>
                <span className={item.color}>{item.icon}</span>
                <span className="navbar__linksTitle">{item.title}</span>
              </Link>
            </div>
          );
        })}
      </nav>
    </div>
  );
}

export default Navbar;
