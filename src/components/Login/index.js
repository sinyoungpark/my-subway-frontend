import axios from "axios";
import React, { useContext, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { RequestUrl, UserContext } from "../../App";
import {
  Logo,
  Contents,
  Form,
  LeftSection,
  LoginSection,
  MainText,
  RightSection,
  Subtext,
  UserInput,
  SubmitBtn,
  Error,
} from "./styles";
import LockOpenRoundedIcon from "@mui/icons-material/LockOpenRounded";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";

const Login = () => {
  const [baseUrl] = useContext(RequestUrl);
  const [user, setUser] = useContext(UserContext);
  const [email, setEmail] = useState("");
  const [password, setPw] = useState("");
  const [error, setError] = useState("");

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
        .catch((e) => {
          console.log(e);
          setError("아이디 또는 비밀번호를 잘못 입력했습니다.");
        });
    } else {
      setError("이메일, 비밀번호를 입력해주세요.");
    }
  };

  return (
    <LoginSection>
      {user.accesstoken && <Navigate to="/" replace={true} />}
      <Logo>
        <Link to="/">
          {" "}
          <span>MY</span> <span>SUB</span>
          <span>WAY</span>
        </Link>
      </Logo>
      <Contents>
        <LeftSection>
          <MainText>
            <LockOpenRoundedIcon className="icon" />
            로그인
          </MainText>
          <Subtext></Subtext>
          <Form>
            <label htmlFor="email">Email</label>
            <UserInput
              type="email"
              name="email"
              id="email"
              placeholder="이메일 *"
              onChange={(e) => setEmail(e.target.value)}
            />

            <label htmlFor="password">Password</label>
            <UserInput
              type="password"
              name="password"
              id="password"
              placeholder="비밀번호 *"
              onChange={(e) => setPw(e.target.value)}
            />
            <Error className="login-error">{error}</Error>
            <Link to="/signup" className="only-mobile link">
              회원가입
            </Link>
            <SubmitBtn type="submit" value="LOG IN" onClick={submitLogin} />
          </Form>
        </LeftSection>
        <RightSection className="only-desktop">
          <Subtext>아직 계정이 없으신가요?</Subtext>
          <Link to="/signup" className="signup_btn">
            회원가입
          </Link>
        </RightSection>
      </Contents>
    </LoginSection>
  );
};

export default Login;
