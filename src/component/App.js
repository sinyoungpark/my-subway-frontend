import React, { useEffect, useState } from "react";
import Header from "./Header";
import MainContent from "./MainContent";
import Footer from "./Footer";
import "../css/App.css";
import Maintop from "./Maintop";
import { Outlet } from "react-router-dom";

const App = () => {
  const [isLogged, setIsLogged] = useState(false);

  useEffect(() => {
    if (window.sessionStorage.getItem("accesstoken")) {
      setIsLogged(true);
    }
  }, []);

  return (
    <div id="wrap">
      {isLogged && <Header />}
      {isLogged && <Maintop />}
      <Outlet />
      {isLogged && <Footer />}
    </div>
  );
};

export default App;
