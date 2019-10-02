import React, {useState} from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import DialogActions from "@material-ui/core/DialogActions";
import {login} from '../UserFunctions'
import  Typography  from "@material-ui/core/Typography";
import Container from '@material-ui/core/Container';


const useStyles = makeStyles(theme => ({
    dialog__content: {
        display: "flex",
        flexDirection: "column"
    },
    dialog__text: {
        margin: "16px 0 0"
    },
    text__field: {
        "& label.Mui-focused": {
            color: "#33b5e5"
        },
        "& .MuiOutlinedInput-root": {
            "&.Mui-focused fieldset": {
                borderColor: "#33b5e5"
            }
        }
    },
    dialog__end: {
      justifyContent: "flex-end",
      padding: "45px 40px 25px"
    },
    login__button: {
      color: "white",
      background: "linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)",
      "&:hover": {
        boxShadow: "0 5px 11px 0 rgba(0,0,0,.18), 0 4px 15px 0 rgba(0,0,0,.15)"
      }
    },

}));

const LoginForm = ({history}) => {
    const classes = useStyles();
    const [username, setUsername] = useState('');
    const [first_password, setFirst_password] = useState('');

    const onSubmit = (e)=>{
      e.preventDefault();
      console.log(username);
      console.log(first_password);
      login({username, first_password}).then(res=>{
        if(res){
          history.push('/admin')
        }
      })
    };
    return (
        <Container maxWidth='sm' className={classes.dialog__content} onSubmit={onSubmit}>
            <Typography className={classes.dialog__text}>
                Ваш логин
            </Typography>
            <TextField
                id="outlined-username-input"
                label="Имя пользователя "
                className={classes.text__field}
                type="username"
                autoComplete="current-username"
                margin="dense"
                variant="outlined"
                name="username"
                onChange={e =>{setUsername(e.target.value)}}
            />
            <Typography className={classes.dialog__text}>
                Ваш пароль
            </Typography>
            <TextField
                id="outlined-password-input"
                label="Пароль"
                className={classes.text__field}
                type="password"
                autoComplete="current-password"
                margin="dense"
                variant="outlined"
                name="password"
                onChange={e =>{setFirst_password(e.target.value)}}
            />
            <DialogActions className={classes.dialog__end}>
              {/*<Button variant="outlined" className={classes.forgot__button}>*/}
              {/*  Забыли пароль ?*/}
              {/*</Button>*/}
              <Button
              variant="contained"
              onClick={onSubmit}
              className={classes.login__button}
              to={'/admin'}
              >
              Войти
              </Button>
            </DialogActions>
        </Container>
    );
};
export default LoginForm;
