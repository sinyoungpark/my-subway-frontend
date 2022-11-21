import React from "react";
import {Link} from "react-router-dom";

export default function Header(){
  return(
    <header>
      <h1>Admin Board</h1>
      <nav>
        <ul className="gnb">
          <li><Link to="user">사용자 관리</Link></li>
          <li><Link to="menu">메뉴 관리</Link></li>
          <li></li>
        </ul>
      </nav>
    </header>
  )
}