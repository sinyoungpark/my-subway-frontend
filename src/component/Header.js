import React from "react";
import profileImg from "../img/user-profile.jpg";
import "../css/header.css";
import Navigation from "./Navigation";

const Header = () => {

  return (
    <header>
      <h1 className="logo">
        <span>MY</span> <span>SUB</span>
        <span>WAY</span>
      </h1>

      <div className="user-profile">
        <img src={profileImg} alt="user-profile" />
        <p className="username">user name</p>
        <p className="email">email@naver.com</p>
      </div>

      <Navigation/>
    </header>
  );
};

export default Header;
