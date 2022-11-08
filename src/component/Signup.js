import React, {useState} from "react";
import "../css/Signup.css";
import axios from "axios";

const Signup = () => {
  const baseUrl = "http://localhost:8000";
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPW] = useState("");

  const submitSignup = (e) => {
    e.preventDefault();

    if(name && email && password){
      axios.post(`${baseUrl}/customers/signup`,{
        name,
        email,
        password
      })
      .then((res) => res.data)
      .then((data) => {
        if(data.error) alert(data.error)
        else{
          alert(data.result);
        }
      })
      .catch((error) => alert(error));
    } else{
      alert("이름, 이메일, 비밀번호를 입력해주세요.")
    }
  }
  

  return (
    <section id="signup" className="section">
      <h1 className="logo">
        <span>MY</span> <span>SUB</span>
        <span>WAY</span>
      </h1>

      <div className="contents">
        <section class="left">
          <p class="main-txt">Already Signed up?</p>
          <p class="sub-txt">Log in to your account</p>
          <input type="button" value="LOG IN" class="login_btn" />
        </section>

        <section class="right">
          <p class="main-txt">Sign Up for an Account</p>
          <p class="sub-txt">
            Let's go you all set up so you can start creating your first
            onboarding experience.
          </p>
          <form>
            <label for="name">Name</label>
            <input type="text" name="name" id="name" placeholder="Your name" onChange={(e) => {setName(e.target.value)}}/>

            <label for="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Your email"
              onChange={(e) => {setEmail(e.target.value)}}
            />

            <label for="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Your password"
              onChange={(e) => {setPW(e.target.value)}}
            />

            <input type="submit" value="SIGN UP" onClick={submitSignup}/>
          </form>
          <div class="social-login">
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
