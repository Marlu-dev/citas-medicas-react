import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Inicio from "./components-principales/Inicio";
import Home from "./components-principales/Home";
import Pagina2 from "./components-principales/Pagina2";
import Pagina3 from "./components-principales/Pagina3";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Inicio />,
  },
  {
    path: "/home",
    element: <Home />,
  },

  {
    path: "/pagina2",
    element: <Pagina2 />,
  },

  {
    path: "/pagina3",
    element: <Pagina3 />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
