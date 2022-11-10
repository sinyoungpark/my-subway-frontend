import React, { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import "../css/App.css";
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
      console.log(data);
      setUser({
        accesstoken : data.accesstoken
      });
      setLoading(false);
      console.log(user);
    })
    .catch((error) => alert(error));
  }, []);

  if(loading) return <div>Loading</div>

  return (
    <UserContext.Provider value={[user, setUser]}>
      <div id="wrap">
        {
          console.log(user.accesstoken)
        }
        {user.accesstoken && <Header />}
        {user.accesstoken && <Maintop />}
        <Outlet />
        {user.accesstoken && <Footer />}
      </div>
    </UserContext.Provider>
  );
};

export default App;
