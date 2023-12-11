import React from "react";

export const NotFoundRoute = () => {
  let notFoundRoute = {
    path: "/*",
    element: <p>Not found any routes</p>,
  };
  return { notFoundRoute };
};
