import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, Navigate } from "react-router-dom";
import { SignupSection, LeftSection, RightSection } from "./styles";
import { Contents, Form, Logo, MainText, Subtext } from "../Login/styles";

const Signup = () => {
  const baseUrl = "http://localhost:8000";
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPW] = useState("");
  const [success, isSuccess] = useState(false);

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
        .catch((error) => alert(error));
    } else {
      alert("이름, 이메일, 비밀번호를 입력해주세요.");
    }
  };

  return (
    <SignupSection>
      {success && <Navigate to="/login" replace={true} />}
      <Logo>
        <span>MY</span> <span>SUB</span>
        <span>WAY</span>
      </Logo>

      <Contents>
        <LeftSection>
          <MainText>Already Signed up?</MainText>
          <Subtext>Log in to your account</Subtext>
          <Link to="/login" className="login_btn">
            LOG IN
          </Link>
        </LeftSection>

        <RightSection>
          <MainText>Sign Up for an Account</MainText>
          <Subtext>
            Let's go you all set up so you can start creating your first
            onboarding experience.
          </Subtext>
          <Form>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Your name"
              onChange={(e) => {
                setName(e.target.value);
              }}
            />

            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Your email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />

            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Your password"
              onChange={(e) => {
                setPW(e.target.value);
              }}
            />

            <input type="submit" value="SIGN UP" onClick={submitSignup} />
          </Form>
        </RightSection>
      </Contents>
    </SignupSection>
  );
};

export default Signup;
