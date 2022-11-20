import React from "react";
import { Link } from "react-router-dom";

export default function Navigation() {
  const makeAccordion = (e) => {
    e.preventDefault();
    e.currentTarget.classList.toggle("active");

    const panel = e.currentTarget.children[0];

    panel.style.maxHeight
      ? (panel.style.maxHeight = null)
      : (panel.style.maxHeight = panel.scrollHeight + "px");
  };

  return (
    <nav className="nav">
      <ul id="gnb">
        <li onClick={(e) => makeAccordion(e)}>
          메뉴소개
          <ul className="gnb-sub-wrap">
            <li>
              <Link to="/menu/sandwich">샌드위치</Link>
            </li>
            <li>
              <Link to="/menu/ingredients">재료</Link>
            </li>
          </ul>
        </li>
        <li><Link to="/order">주문연습</Link></li>
        <li onClick={(e) => makeAccordion(e)}>
          랭킹/게시판
          <ul className="gnb-sub-wrap">
            <li>
              <Link to="/ranking">랭킹</Link>
            </li>
            <li>
              <Link to="/board">게시판</Link>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  );
}
