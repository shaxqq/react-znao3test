import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from "@material-ui/core";
import NavBar from './NavBar';
import LoginForm from "./LoginForm";
const useStyles = makeStyles( ()=>({
    box: {
        backgroundColor: '#54fc2d',
        height: '100hv',
    }
}));

const Landing = ()=>{
    return(
        <div>
            <NavBar />
            <Container maxWidth="sm">
                <Typography component="div" style={useStyles.box} />
            </Container>
            <LoginForm />
        </div>
    )
};
export default Landing