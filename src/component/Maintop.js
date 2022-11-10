import React, { useEffect, useState } from "react";
import SearchIcon from '@mui/icons-material/Search';
import "../css/Maintop.css";
import axios from "axios";

const Maintop = () => {
  const baseUrl = "http://localhost:8000";
  const [isLogged, setIsLogged] = useState(false);
  //logout 

  useEffect(() => {
    if(window.sessionStorage.getItem("accesstoken")){
      setIsLogged(true);
    }
  },[]);

  const logOutHandler = (e) => {
    e.preventDefault();
    axios.post(`${baseUrl}/customers/signup`)
    .then((res) => res.data)
    .then((data) => {
      if(data.error) alert(data.error);
      else{
        alert(data.result);
        window.sessionStorage.removeItem("accesstoken");
      }
    })
    .catch((error) => alert(error));
  }

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
      <input type="button" value="로그아웃" className="logout-btn" onClick={logOutHandler}/>
    </div>
  );
};

export default Maintop;
