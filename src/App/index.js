import React, { useEffect, useState } from "react";
import axios from "axios";
import { Outlet } from "react-router-dom";

axios.defaults.withCredentials = true;

export const UserContext = React.createContext([]);
export const RequestUrl = React.createContext([]);

const App = () => {
  const [baseUrl] = useState("https://subway-server.loca.lt");
  const [user, setUser] = useState({});

  useEffect(() => {
    getRefreshToken();
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
          name: data.name,
          email: data.email,
        });
      })
      .catch((error) => console.log(error));
  };

  return (
    <UserContext.Provider value={[user, setUser]}>
      <RequestUrl.Provider value={[baseUrl]}>
        <Outlet />
      </RequestUrl.Provider>
    </UserContext.Provider>
  );
};

export default App;
