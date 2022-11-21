import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./error-page";
import Home from "./components/Customers/Home";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Sandwich from "./components/Customers/Menu/Sandwich";
import Ingredients from "./components/Customers/Menu/Ingredients";
import Ranking from "./components/Customers/Ranking";
import Board from "./components/Customers/Board";
import Order from "./components/Customers/Order";
import Customers from "./components/Customers";
import Admin from "./components/Admin/Admin";
import "./index.scss";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path : "/",
        element : <Customers/>,
        children : [
          {
            path: "/",
            element: <Home />,
          },
          {
            path: "menu",
            children: [
              {
                path: "sandwich",
                element: <Sandwich />,
              },
              {
                path: "ingredients",
                element: <Ingredients />,
              },
            ],
          },
          {
            path: "ranking",
            element: <Ranking />,
          },
          {
            path : "board",
            element : <Board/>
          },
          {
            path : 'order',
            element : <Order/>
          },
        ]
      },
      {
        path: "signup",
        element: <Signup />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path : "admin",
        element : <Admin/>,
      //   children : [
      //     {
      //       path : "user",
      //       element : <AdminUser/>
      //     },
      //     {
      //       path : "menu",
      //       element : <AdminMenu/>
      //     },
      //     {
      //       path : "ad",
      //       element :  <AdminAd/>
      //     }
      //   ]
      }
    ],
  },
]);

const root = createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
