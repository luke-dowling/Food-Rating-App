import React from "react";
import { foodPosts } from "../data";

import Posts from "./Posts";

import "../App.css";

const App = () => {
  return (
    <main>
      <h1>Rate My Food</h1>
      <Posts data={foodPosts} />
    </main>
  );
};

export default App;
