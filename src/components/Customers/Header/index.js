import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../../App";
import profileImg from "../../../img/user-profile.jpg";
import Navigation from "./Navigation";
import {
  DesktopHeader,
  Profile,
  ProfileImg,
  Hamburger,
  HeaderContainer,
  MobileHeader,
} from "./styles";
import { Logo, LogoutBtn } from "../styles";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";

const Header = ({ logoutHandler }) => {
  const [user] = useContext(UserContext);
  const [activeHamburger, setActiveHamburger] = useState(false);

  return (
    <HeaderContainer>
      <DesktopHeader className="only-desktop">
        <Logo>
          <Link to="/">
            <span>MY</span> <span>SUB</span>
            <span>WAY</span>
          </Link>
        </Logo>

        <Profile>
          <ProfileImg>
            <img src={profileImg} alt="user-profile" />
          </ProfileImg>
          <p className="username">{user.name}</p>
          <p className="email">{user.email}</p>
        </Profile>

        <Navigation />
        <LogoutBtn onClick={(e) => logoutHandler(e)}>
          <LogoutRoundedIcon className="logout-btn" />
          로그아웃
        </LogoutBtn>
      </DesktopHeader>

      <MobileHeader className="only-mobile">
        <Hamburger
          className={activeHamburger ? "open" : false}
          onClick={(e) => setActiveHamburger(!activeHamburger)}
        >
          <span></span>
          <span></span>
          <span></span>
        </Hamburger>
        <Logo>
          <Link to="/">
            <span>MY</span> <span>SUB</span>
            <span>WAY</span>
          </Link>
        </Logo>
        <Navigation
          activeHamburger={activeHamburger}
          setActiveHamburger={setActiveHamburger}
        />
        <LogoutBtn onClick={(e) => logoutHandler(e)}>
          <LogoutRoundedIcon className="logout-btn" />
        </LogoutBtn>
      </MobileHeader>
    </HeaderContainer>
  );
};

export default Header;
