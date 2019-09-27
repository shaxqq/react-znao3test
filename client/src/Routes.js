import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import User from './components/UserArea/index'
import Admin from './components/AdminArea/index'

const Routes = () => {
  return (
    <Switch>
      {/*<Redirect exact from="/" to="/reglaments" />*/}
      {/*<Redirect*/}
      {/*  exact*/}
      {/*  from="/admin"*/}
      {/*  to={Admin}*/}
      {/*/>*/}

      <Route component={User} exact path="/" />
      <Route component={Admin} exact path="/admin" />

    </Switch>
  );
};

export default Routes;
