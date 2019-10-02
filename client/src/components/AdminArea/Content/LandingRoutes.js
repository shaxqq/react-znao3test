import React from "react";

import LoginForm from '../'
import { BrowserRouter as Router, Route } from 'react-router-dom'

const Routes = () => {
  return (
    <Router>
      {/*<Redirect exact from="/" to="/reglaments" />*/}
      {/*<Redirect*/}
      {/*  exact*/}
      {/*  from="/admin"*/}
      {/*  to={Admin}*/}
      {/*/>*/}

      <Route component={User} exact path="/" />
      <Route component={Admin} exact path="/admin" />
      <Route component={LoginForm} exact path='/login' />
    </Router>
  );
};

export default Routes;
