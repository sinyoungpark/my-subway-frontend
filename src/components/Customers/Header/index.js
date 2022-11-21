import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../../App";
import profileImg from "../../../img/user-profile.jpg";
import Navigation from "./Navigation";
import {HeaderContainer, Profile} from "./styles";
import { Logo } from "../styles";

const Header = () => {
  const [user] = useContext(UserContext);

  return (
    <HeaderContainer>
      <Logo>
        <Link to="/">
          <span>MY</span> <span>SUB</span>
          <span>WAY</span>
        </Link>
      </Logo>

      <Profile>
        <img src={profileImg} alt="user-profile" />
        <p className="username">{user.name}</p>
        <p className="email">{user.email}</p>
      </Profile>

      <Navigation />
    </HeaderContainer>
  );
};

export default Header;
