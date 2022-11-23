import React from "react";
import { Link } from "react-router-dom";
import { Nav } from "./styles";

export default function Navigation({ activeHamburger, setActiveHamburger }) {
  const makeAccordion = (e) => {
    e.preventDefault();
    e.currentTarget.classList.toggle("active");

    const panel = e.currentTarget.children[0];
    panel.style.maxHeight
      ? (panel.style.maxHeight = null)
      : (panel.style.maxHeight = panel.scrollHeight + "px");
  };

  const openMobileNav = (e) => {
    if (setActiveHamburger !== undefined) {
      setActiveHamburger(!activeHamburger);
    }
  };

  return (
    <Nav className={activeHamburger ? "open" : false}>
      <ul id="gnb">
        <li onClick={(e) => makeAccordion(e)}>
          메뉴소개
          <ul className="gnb-sub-wrap">
            <li>
              <Link to="/menu/sandwich" onClick={(e) => openMobileNav(e)}>
                샌드위치
              </Link>
            </li>
            <li>
              <Link
                to="/menu/ingredients"
                onClick={(e) => openMobileNav(e)}
              >
                재료
              </Link>
            </li>
          </ul>
        </li>
        <li>
          <Link
            to="/order"
            onClick={(e) => openMobileNav(e)}
          >
            주문연습
          </Link>
        </li>
        <li onClick={(e) => makeAccordion(e)}>
          랭킹/게시판
          <ul className="gnb-sub-wrap">
            <li>
              <Link
                to="/ranking"
                onClick={(e) => openMobileNav(e)}
              >
                랭킹
              </Link>
            </li>
            <li>
              <Link
                to="/board"
                onClick={(e) => openMobileNav(e)}
              >
                게시판
              </Link>
            </li>
          </ul>
        </li>
      </ul>
    </Nav>
  );
}
