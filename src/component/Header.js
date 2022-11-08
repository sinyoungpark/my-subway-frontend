import React from "react";
import profileImg from "../img/user-profile.jpg";
import "../css/header.css";

const Header = () => {

  const makeAccordion = (e) => {
      e.preventDefault();
      e.target.classList.toggle("active");

      const panel = e.target.children[0];
  
      panel.style.maxHeight ? panel.style.maxHeight = null : panel.style.maxHeight = panel.scrollHeight + "px";
  }


  return (
    <header>
      <h1 className="logo">
        <span>MY</span> <span>SUB</span>
        <span>WAY</span>
      </h1>

      <div className="user-profile">
        <img src={profileImg} alt="user-profile" />
        <p className="username">user name</p>
        <p className="email">email@naver.com</p>
      </div>

      <nav className="nav">
        <ul id="gnb">
          <li onClick={makeAccordion}>메뉴소개
            <ul className="gnb-sub-wrap">
              <li><a>샌드위치</a></li>
              <li><a>재료</a></li>
            </ul>
          </li>
          <li>주문연습</li>
          <li onClick={makeAccordion}>랭킹/게시판
            <ul className="gnb-sub-wrap">
              <li><a>랭킹</a></li>
              <li><a>게시판</a></li>
            </ul>
          </li>
          <li>이벤트/뉴스</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
