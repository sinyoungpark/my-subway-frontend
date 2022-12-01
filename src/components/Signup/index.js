import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { Link, Navigate } from "react-router-dom";
import { SignupSection, LeftSection, RightSection, Subtext } from "./styles";
import {
  Contents,
  Error,
  Form,
  Logo,
  MainText,
  SubmitBtn,
  UserInput,
} from "../Login/styles";
import LockRoundedIcon from "@mui/icons-material/LockRounded";
import { RequestUrl } from "../../App";

const Signup = () => {
  const [baseUrl] = useContext(RequestUrl);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPW] = useState("");
  const [success, isSuccess] = useState(false);
  const [error, setError] = useState("");

  const submitSignup = (e) => {
    e.preventDefault();

    if (name && email && password) {
      axios
        .post(`${baseUrl}/customers/signup`, {
          name,
          email,
          password,
        })
        .then((res) => res.data)
        .then((data) => {
          if (data.error) alert(data.error);
          else {
            alert(data.result);
            isSuccess(true);
          }
        })
        .catch((error) => {
          console.log(error);
          setError("이미 사용중인 이메일입니다.");
        });
    } else {
      setError("이름, 이메일, 비밀번호를 입력해주세요.");
    }
  };

  return (
    <SignupSection>
      {success && <Navigate to="/login" replace={true} />}
      <Logo>
        <Link to="/">
          <span>MY</span> <span>SUB</span>
          <span>WAY</span>
        </Link>
      </Logo>

      <Contents>
        <LeftSection className="only-desktop">
          <Subtext>이미 계정이 있으신가요?</Subtext>
          <Link to="/login" className="login_btn login">
            로그인
          </Link>
        </LeftSection>

        <RightSection>
          <MainText>
            <LockRoundedIcon className="icon" />
            회원가입
          </MainText>
          <Subtext></Subtext>
          <Form>
            <label htmlFor="name">Name</label>
            <UserInput
              type="text"
              name="name"
              id="name"
              placeholder="이름 *"
              onChange={(e) => {
                setName(e.target.value);
              }}
            />

            <label htmlFor="email">Email</label>
            <UserInput
              type="email"
              name="email"
              id="email"
              placeholder="이메일 *"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />

            <label htmlFor="password">Password</label>
            <UserInput
              type="password"
              name="password"
              id="password"
              placeholder="비밀번호 *"
              onChange={(e) => {
                setPW(e.target.value);
              }}
            />
            <Error className="signup-error">{error}</Error>
            <Link to="/login" className="only-mobile login">로그인</Link>
            <SubmitBtn type="submit" value="SIGN UP" onClick={submitSignup} />
          </Form>
        </RightSection>
      </Contents>
    </SignupSection>
  );
};

export default Signup;
