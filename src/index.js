import React from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./error-page";
import Home from "./components/Home";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Menu from "./components/Menu";
import Sandwich from "./components/Sandwich";
import Ingredients from "./components/Ingredients";
import Ranking from "./components/Ranking";

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
    ],
  },
]);

const root = createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
