import React from "react";
import LoginForm from './PersonalArea/LoginForm'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Landing from "./Content/Landing";
import About from "./Content/About";
import RegisterForm from "./PersonalArea/RegisterForm";

const UserRoutes = () => {
  return (
    <Router>
      <Route exact path="/" component={Landing} />
      <Route exact path='/about' component={About} />
      <Route exact path='/login' component={LoginForm} />
      <Route exact path='/register' component={RegisterForm} />
    </Router>
  );
};

export default UserRoutes;
