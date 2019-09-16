import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import {login} from './UserFunctions';
import Button from '@material-ui/core/Button';



const useStyles = makeStyles(theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
    },
    dense: {
        marginTop: theme.spacing(2),
    },
    menu: {
        width: 200,
    },
}));

const LoginForm = () => {
    const classes = useStyles();
    const [values, setValues] = useState({
        user_name: '',
        password: '',
        errors: {},
    });
    const [submit, setSubmit] = useState({
        user_name: user_name,
        password: password,
    });

    const onSubmit = ()=>{
        setSubmit(login(submit).then(res =>{
            if(res){
                this.props.history.push(`/profile`)
            }
        }))
    };

    const handleChange = user_name => event => {
        setValues({ ...values, [user_name]: event.target.value });
    };

    return (
        <form className={classes.container} noValidate autoComplete="off" onSubmit={onSubmit}>
            <TextField
                id="outlined-name"
                label="Name"
                className={classes.textField}
                onChange={handleChange('user_name')}
                value={values.user_name}
                margin="normal"
                variant="outlined"
                name='user_name'
                type='user_name'
            />
            <TextField
                id="outlined-password-input"
                label="Password"
                className={classes.textField}
                onChange={handleChange('password')}
                value={values.password}
                type="password"
                autoComplete="current-password"
                margin="normal"
                variant="outlined"
                name='password'
            />
            <Button variant="contained" color="primary" type="submit">
                logIn
            </Button>
        </form>
    );
};
export default LoginForm
