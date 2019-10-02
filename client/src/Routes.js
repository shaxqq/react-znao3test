import React from "react";
import User from './components/UserArea/index'
import Admin from './components/AdminArea/index'
import { BrowserRouter as Router, Route } from 'react-router-dom'

const Routes = () => {
  return (
    <Router>
      <Route component={User} exact path="/" />
      <Route component={Admin} exact path="/admin" />
    </Router>
  );
};

export default Routes;
