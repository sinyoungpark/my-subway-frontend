import React, { useEffect, useState } from "react";
import {Navigate} from "react-router-dom";

export default function Home(){

  const [isLogged, setIsLogged] = useState(false);

  useEffect(() => {
    if(window.sessionStorage.getItem("accesstoken")){
      setIsLogged(true);
    }
  },[])

  return(
    <div>
      Home
    </div>
  )
}

