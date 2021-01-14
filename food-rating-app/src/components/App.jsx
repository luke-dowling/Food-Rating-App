import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AuthProvider } from "../firebase/context";
import LogIn from "./LogIn";
import User from "./User";

import "../css/App.css";
import SignUp from "./authentication/SignUp";
import Home from "./Home";

import AddMealForm from "./AddMealForm";

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/user/:user/" component={User} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/login" component={LogIn} />
          <Route exact path="/addMealForm" component={AddMealForm} />
        </Switch>
      </Router>
    </AuthProvider>
  );
};

export default App;
