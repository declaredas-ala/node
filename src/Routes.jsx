import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
import Authentification from "pages/Authentification";

const ProjectRoutes = () => {
  let element = useRoutes([
    { path: "/", element: <Home /> },
    { path: "*", element: <NotFound /> },
    {
      path: "authentification",
      element: <Authentification />,
    },
  ]);

  return element;
};

export default ProjectRoutes;
