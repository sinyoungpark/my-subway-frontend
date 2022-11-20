import React, { useContext } from "react";
import { Link } from "react-router-dom";
import profileImg from "../img/user-profile.jpg";
import "../styles/header.scss";
import Navigation from "./Navigation";
import { UserContext } from "../App";

const Header = () => {
  const [user] = useContext(UserContext);

  return (
    <header>
      <h1 className="logo">
        <Link to="/">
          <span>MY</span> <span>SUB</span>
          <span>WAY</span>
        </Link>
      </h1>

      <div className="user-profile">
        <img src={profileImg} alt="user-profile" />
        <p className="username">{user.name}</p>
        <p className="email">{user.email}</p>
      </div>

      <Navigation />
    </header>
  );
};

export default Header;
