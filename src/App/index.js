import React, { useEffect, useState } from "react";
import axios from "axios";
import Customers from "../components/Customers";
import Admin from "../components/Admin";
import { Navigate, Outlet } from "react-router-dom";
import Login from "../components/Login";

axios.defaults.withCredentials = true;

export const UserContext = React.createContext([]);
export const AdContext = React.createContext([]);

const App = () => {
  const baseUrl = "http://localhost:8000";
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);
  const [adData, setAdData] = useState([]);
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    getRefreshToken();
    getAdData();
  }, []);

  const config = {
    headers: {
      authorization: `Bearer ${user.accesstoken}`,
    },
  };

  const getRefreshToken = () => {
    axios
      .post(`${baseUrl}/customers/refresh_token`)
      .then((res) => res.data)
      .then((data) => {
        setUser({
          accesstoken: data.accesstoken,
        });
        setLoading(false);
      })
      .catch((error) => console.log(error));
  };

  const getAdData = () => {
    axios
      .get(`${baseUrl}/ad`, config)
      .then((res) => res.data)
      .then((data) => {
        setAdData(data.adData);
      })
      .catch((error) => console.log(error));
  };

  return (
    <UserContext.Provider value={[user, setUser]}>
      <AdContext.Provider value={[adData, setAdData]}>
        <Outlet />
      </AdContext.Provider>
    </UserContext.Provider>
  );
};

export default App;
