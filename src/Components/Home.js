import React from "react";
import "../Styles/Home.css";
import taskmeLogo from "../Images/taskmeLogo.jpg";

function Home() {
  return (
    <div className="home">
      <img
          className="home__logo"
          src={taskmeLogo}
          alt=""
        />
      <div className="home__info">
        <span>Task Me</span>
      </div>
    </div>
  );
}

export default Home;
