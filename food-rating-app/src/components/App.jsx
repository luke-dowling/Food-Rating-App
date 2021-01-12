import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import LogIn from "./LogIn";
import User from "./User";

import "../css/App.css";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={LogIn} />
        <Route path="/User/:user/" exact component={User} />
      </Switch>
    </Router>
  );
};

export default App;
