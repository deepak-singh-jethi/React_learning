import React from "react";
import ReactDom from "react-dom/client";

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement(
    "div",
    { id: "child" },
    React.createElement("h1", {}, "h1 inside the cascaded div's")
  )
);

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(parent);
