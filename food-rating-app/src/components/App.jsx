import React from "react";
import { foodPosts } from "../data/data";

import Posts from "./Posts";

import "../css/App.css";

const App = () => {
  return (
    <main>
      <h1>Rate My Food</h1>
      <Posts data={foodPosts} />
    </main>
  );
};

export default App;
