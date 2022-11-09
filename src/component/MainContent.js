import React, {useState, useEffect} from "react";
import Maintop from "./Maintop";
import "../css/MainContent.css";
import Signup from "./Signup";
import Login from "./Login";
import Home from "./Home";
import {
  createBrowserRouter, RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path : "/",
    element : <Home/>,
  },
  {
    path : "/signup",
    element : <Signup/>,
  },
  {
    path : "/login",
    element : <Login/>,
  },
])

const MainContent = () => {


  return(
    <main>
      <RouterProvider router={router}></RouterProvider>
    </main>
  )
}

export default MainContent;