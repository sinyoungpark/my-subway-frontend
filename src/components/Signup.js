import React, { useState, useEffect } from "react";
import "../styles/Signup.scss";
import axios from "axios";
import { Link, Navigate } from "react-router-dom";

const Signup = () => {
  const baseUrl = "http://localhost:8000";
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPW] = useState("");
  const [success, isSuccess] = useState(false);

  const [isLogged, setIsLogged] = useState(false);

  useEffect(() => {
    if (window.sessionStorage.getItem("accesstoken")) {
      setIsLogged(true);
    }
  }, []);


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
    <section id="signup" className="section">
      {isLogged && <Navigate to="/" replace={true} />}
      {success && <Navigate to="/login" replace={true} />}
      <h1 className="logo">
        <span>MY</span> <span>SUB</span>
        <span>WAY</span>
      </h1>

      <div className="contents">
        <section className="left">
          <p className="main-txt">Already Signed up?</p>
          <p className="sub-txt">Log in to your account</p>
          <Link to="/login" className="login_btn">
            LOG IN
          </Link>
        </section>

        <section className="right">
          <p className="main-txt">Sign Up for an Account</p>
          <p className="sub-txt">
            Let's go you all set up so you can start creating your first
            onboarding experience.
          </p>
          <form>
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
          </form>
          <div className="social-login">
            <p>Or sign up using</p>
            <ul>
              <li>google</li>
              <li>facebook</li>
              <li>kakao</li>
            </ul>
          </div>
        </section>
      </div>
    </section>
  );
};

export default Signup;
