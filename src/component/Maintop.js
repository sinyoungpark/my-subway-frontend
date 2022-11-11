import React, { useEffect, useState } from "react";
import SearchIcon from '@mui/icons-material/Search';
import "../css/Maintop.css";
import axios from "axios";

const Maintop = ({logoutHandler}) => {

  return (
    <div className="main-top inner">
      <form action="" className="src-form">
        <label for="src-value">
          <SearchIcon className="search-icon"/>
        </label>
        <input
          type="text"
          name="src-value"
          id="src-value"
          placeholder="search..."
        />
      </form>
      <input type="button" value="로그아웃" className="logout-btn" onClick={logoutHandler}/>
    </div>
  );
};

export default Maintop;
