import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./Products.css";
import "./Productgame.css";
import App from "./App";
import Dashboard from "./Dashboard";
import Products from "./Products";
import Productgame from "./Productgame";
import Contact from "./Contact";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";

// Moving from one page to another
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "Dashboard",
    element: <Dashboard />,
  },
  {
    // Games list
    path: "Products",
    element: <Products />,
  },
  {
    // The clicked game
    path: "Products/:productId",
    element: <Productgame />,
  },
  {
    path: "Contact",
    element: <Contact />,
  },
]);

// Creating pages
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
