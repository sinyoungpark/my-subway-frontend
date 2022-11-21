import axios from "axios";
import React, { useContext, useState } from "react";
// import "../styles/Login.scss";
import { Link, Navigate } from "react-router-dom";
import { UserContext } from "../../App";
import {
  Logo,
  Contents,
  Form,
  LeftSection,
  LoginSection,
  MainText,
  RightSection,
  Subtext,
} from "./styles";
const Login = () => {
  const baseUrl = "http://localhost:8000";
  const [user, setUser] = useContext(UserContext);
  const [email, setEmail] = useState("");
  const [password, setPw] = useState("");

  const submitLogin = (e) => {
    e.preventDefault();
    if (email && password) {
      axios
        .post(`${baseUrl}/customers/login`, {
          email,
          password,
        })
        .then((res) => res.data)
        .then((data) => {
          if (data.error) alert(data.error);
          else {
            setUser({
              accesstoken: data.accesstoken,
              name: data.name,
              email: data.email,
            });
          }
        })
        .catch((e) => console.error(e));
    } else {
      alert("이메일, 비밀번호를 입력해주세요.");
    }
  };

  return (
    <LoginSection>
      {user.accesstoken && <Navigate to="/" replace={true} />}
      <Logo>
        <span>MY</span> <span>SUB</span>
        <span>WAY</span>
      </Logo>
      <Contents>
        <LeftSection>
          <MainText>Log in Your Account</MainText>
          <Subtext>
            Log in to your account so you can continue building and editing your
            onboarding flows.
          </Subtext>
          <Form>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email address"
              onChange={(e) => setEmail(e.target.value)}
            />

            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Enter your password"
              onChange={(e) => setPw(e.target.value)}
            />

            <input type="submit" value="LOG IN" onClick={submitLogin} />
          </Form>
        </LeftSection>
        <RightSection>
          <MainText>Don't Have an Account Yet?</MainText>
          <Subtext>
            Let's get you all set up so you can start creating your first
            experience
          </Subtext>
          <Link to="/signup" className="signup_btn">
            SIGN UP
          </Link>
        </RightSection>
      </Contents>
    </LoginSection>
  );
};

export default Login;
