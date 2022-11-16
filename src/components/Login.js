import axios from "axios";
import React, {useContext, useState} from "react";
import "../styles/Login.scss";
import {Link, Navigate} from "react-router-dom";
import { UserContext } from "../App";

const Login = () => {
  const baseUrl = "http://localhost:8000";
  const [user, setUser] = useContext(UserContext);
  const [email, setEmail] = useState("");
  const [password, setPw] = useState(""); 

  const submitLogin = (e) => {
    e.preventDefault();
    if(email && password){
      axios.post(`${baseUrl}/customers/login`,{
        email, 
        password
      })
      .then((res) => res.data)
      .then((data) => {
        if(data.error) alert(data.error);
        else{
          setUser({
            accesstoken : data.accesstoken
          });
        }
      })
      .catch((e) => console.error(e));

    }
    else{
      alert("이메일, 비밀번호를 입력해주세요.");
    }
  }
  return (
    <section id="login" className="section">
      {
        user.accesstoken && <Navigate to="/" replace={true}/>
      }
      <h1 className="logo">
        <span>MY</span> <span>SUB</span>
        <span>WAY</span>
      </h1>
      <div className="contents">
        <section className="left">
          <p className="main-txt">Log in Your Account</p>
          <p className="sub-txt">
            Log in to your account so you can continue building and editing your
            onboarding flows.
          </p>

          <form>
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

            <input type="submit" value="LOG IN" onClick={submitLogin}/>
          </form>

          <div className="social-login">
            <p>Or log in using</p>
            <ul>
              <li>google</li>
              <li>facebook</li>
              <li>kakao</li>
            </ul>
          </div>
        </section>
        <section className="right">
          <p className="main-txt">Don't Have an Account Yet?</p>
          <p className="sub-txt">
            Let's get you all set up so you can start creating your first
            experience
          </p>
          <Link to="/signup" className="signup_btn">SIGN UP</Link>
        </section>
      </div>
    </section>
  );
};

export default Login;
