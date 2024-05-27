import React from "react";
import ReactDOM from "react-dom/client";
import RootPage from "./pages/RootPage";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "./pages/LoginPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
