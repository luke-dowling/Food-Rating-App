import React from "react";
import ReactDOM from "react-dom";
import FoodProvider from "./food-hook";
import App from "./components/App";
import { ChakraProvider } from "@chakra-ui/react";

ReactDOM.render(
  <ChakraProvider>
    <FoodProvider>
      <App />
    </FoodProvider>
  </ChakraProvider>,
  document.getElementById("root")
);
