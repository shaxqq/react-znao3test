import React from 'react';
import NavBar from './Navigation/NavBar';
// import UserRoutes from './UserRoutes';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Landing from "./Content/Landing";
import About from "./Content/About";
import LoginForm from "./PersonalArea/LoginForm";
import RegisterForm from "./PersonalArea/RegisterForm";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles( ()=>({
    content__style: {
        marginTop: 80,
    },
}));
const User = ()=>{
  const classes = useStyles();
  return(
    <Router>
    <div>
      <NavBar />
      <Container maxWidth="lg" className={classes.content__style}>
          <Route exact path="/" component={Landing} />
          <Route exact path='/about' component={About} />
          <Route exact path='/login' component={LoginForm} />
          <Route exact path='/register' component={RegisterForm} />
      </Container>
    </div>
    </Router>
  )
};
export default User