import React from "react";
import "../css/Footer.css";
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';

const Footer = () => {
  return(
    <footer>
      <h2 className="logo">
      <span>MY</span> <span>SUB</span>
        <span>WAY</span>
      </h2>
      <small className="copyright">&copy; 2022 subway development. All rights reserved.</small>
      <ul className="sns">
        <li><InstagramIcon className="sns-icon"/></li>
        <li><FacebookIcon className="sns-icon"/></li>
      </ul>
    </footer>
  )
}

export default Footer;