import React from "react";
import User from './components/UserArea/User'
import Admin from './components/AdminArea/Admin'
import { Route, Switch } from 'react-router-dom'


const Routes = () => {
  return (
    <Switch>

      <Route component={Admin} exact path="/admin" />
      <Route component={User} />
    </Switch>
  );
};

export default Routes;
