import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import LogOutButton from "./Navigation/LogOutButton";

const Admin = ()=>{
  return(
    <Router>
      <div>
        <Route exact path="/admin" component={LogOutButton} />
      </div>
    </Router>
  )
};
export default Admin