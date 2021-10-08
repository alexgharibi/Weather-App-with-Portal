import React from "react";
import { render, fireEvent } from "@testing-library/react";
import ReactDOM from "react-dom";
import Weather from "./Weather";

it("renders correctly", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Weather />, div);
});
