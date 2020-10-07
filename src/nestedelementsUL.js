import { react } from "babel-types";
import React from "react";
import ReactDom from "react-dom";
import "./style.css";

var data = [1, 2, 3, 4, 5];

const ul = React.createElement(
  "ul",
  {},
  data.map((item, index) => {
    return React.createElement("li", { key: index }, item);
  })
);
const divcont = React.createElement("div", { className: "container" }, ul);
const id = document.querySelector("#id");
ReactDom.render(divcont, id);
