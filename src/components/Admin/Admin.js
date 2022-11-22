import React, { useContext } from "react";
import Header from "./Header";
import { Outlet, Navigate } from "react-router-dom";
import { UserContext } from "../../App";

export default function Admin() {
  const [user] = useContext(UserContext);

  return (
    <>
      {!user.accesstoken && <Navigate to="/login" replace={true} />}
      <Header />
      <Outlet />
    </>
  );
}
