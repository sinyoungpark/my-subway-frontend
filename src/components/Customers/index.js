import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import { FootLogo, Footer, Sns, Container, LogoutBtn } from "./styles";
import axios
 from "axios";
import { UserContext } from "../../App";

export default function Customers() {
  const baseUrl = "http://localhost:8000";
  const [setUser] = useContext(UserContext);

  const logoutHandler = (e) => {
    e.preventDefault();
    axios
      .post(`${baseUrl}/customers/logout`)
      .then((res) => res.data)
      .then((data) => {
        setUser({});
      })
      .catch((error) => console.log(error));
  };

  return (
    <Container>
      <Header />
      <LogoutBtn onClick={(e) => logoutHandler(e)}>로그아웃</LogoutBtn>
      <Outlet />
      <Footer>
        <FootLogo>
          <span>MY</span> <span>SUB</span>
          <span>WAY</span>
        </FootLogo>
        <small className="copyright">
          &copy; 2022 subway development. All rights reserved.
        </small>
        <Sns>
          <li>
            <InstagramIcon className="sns-icon" />
          </li>
          <li>
            <FacebookIcon className="sns-icon" />
          </li>
        </Sns>
      </Footer>
    </Container>
  );
}
