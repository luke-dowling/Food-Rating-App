import React from "react";
import ReactDOM from "react-dom";
import FoodProvider from "./food-hook";
import App from "./components/App";

ReactDOM.render(
  <FoodProvider>
    <App />
  </FoodProvider>,
  document.getElementById("root")
);
