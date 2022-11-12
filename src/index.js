import React from "react";
import { createRoot } from "react-dom/client";

import App from "./component/App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./error-page";
import Home from "./component/Home";
import Signup from "./component/Signup";
import Login from "./component/Login";
import Menu from "./component/Menu";
import Sandwich from "./component/Sandwich";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
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
        path: "menu",
        children : [
          {
            path : "sandwich",
            element : <Sandwich/>
          }
        ]
      },
    ],
  },
]);

const root = createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
