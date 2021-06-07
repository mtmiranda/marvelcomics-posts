import React from "react";

import { Router, Route, Switch } from "react-router";

import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Home from "../Pages/Home/Home";
import { NotFound } from "../Components/NotFound";

import PrivateRoute from "./privateRoute";

import { history } from "./history";

const Routes = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route component={Login} exact path="/login" />
        <Route component={Register} exact path="/register" />
        <Route component={Home} exact path="/" />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
};

export default Routes;
