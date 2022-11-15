import React, { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import "../styles/App.scss";
import Maintop from "./Maintop";
import { Outlet } from "react-router-dom";
import axios from "axios";

axios.defaults.withCredentials = true;

export const UserContext = React.createContext([]);

const App = () => {
  const baseUrl = "http://localhost:8000";
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.post(`${baseUrl}/customers/refresh_token`)
    .then((res) => res.data)
    .then((data) => {
      setUser({
        accesstoken : data.accesstoken
      });
      setLoading(false);
    })
    .catch((error) => console.log(error));
  }, []);

  // if(loading) return <div>LOading...</div>

  const logoutHandler = () => {
    axios.post(`${baseUrl}/customers/logout`)
    .then((res) => res.data)
    .then((data) => {
      setUser({});
    })
    .catch(error => console.log(error)); 
  }


  return (
    <UserContext.Provider value={[user, setUser]}>
      <div id="wrap">
        {user.accesstoken && <Header />}
        {user.accesstoken && <Maintop logoutHandler={logoutHandler}/>}
        <Outlet />
        {user.accesstoken && <Footer />}
      </div>
    </UserContext.Provider>
  );
};

export default App;
