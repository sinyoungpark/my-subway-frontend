import axios from "axios";
import React, {useState} from "react";
import "../css/Login.css";

const Login = () => {
  const baseUrl = "http://localhost:8000";
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
          alert(data.error);
        }
      })
      .catch((e) => console.error(e));
    }
    else{
      alert("이메일, 비밀번호를 입력해주세요.");
    }

  }

  return (
    <section id="login" class="section">
      <h1 class="logo">
        <span>MY</span> <span>SUB</span>
        <span>WAY</span>
      </h1>
      <div class="contents">
        <section class="left">
          <p class="main-txt">Log in Your Account</p>
          <p class="sub-txt">
            Log in to your account so you can continue building and editing your
            onboarding flows.
          </p>

          <form>
            <label for="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email address"
              onChange={(e) => setEmail(e.target.value)}
            />

            <label for="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Enter your password"
              onChange={(e) => setPw(e.target.value)}
            />

            <input type="submit" value="LOG IN" onClick={submitLogin}/>
          </form>

          <div class="social-login">
            <p>Or log in using</p>
            <ul>
              <li>google</li>
              <li>facebook</li>
              <li>kakao</li>
            </ul>
          </div>
        </section>
        <section class="right">
          <p class="main-txt">Don't Have an Account Yet?</p>
          <p class="sub-txt">
            Let's get you all set up so you can start creating your first
            experience
          </p>
          <input type="button" value="SIGN UP" class="signup_btn" />
        </section>
      </div>
    </section>
  );
};

export default Login;
