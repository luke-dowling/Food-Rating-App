import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AuthProvider } from "./authentication/Auth";
import LogIn from "./LogIn";
import User from "./User";

import "../css/App.css";
import SignUp from "./authentication/SignUp";
import Home from "./Home";
import Dashboard from "./authentication/Dashboard";

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/user/:user/" component={User} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/login" component={LogIn} />
          {/*<Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/login" component={LogIn} />
          <Route exact path="/signup" component={SignUp} /> */}
        </Switch>
      </Router>
    </AuthProvider>
  );
};

export default App;
