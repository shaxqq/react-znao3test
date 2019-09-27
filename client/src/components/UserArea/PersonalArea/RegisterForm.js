import React, { useState } from "react";
import DialogContentText from "@material-ui/core/DialogContentText";
import TextField from "@material-ui/core/TextField";
import DialogContent from "@material-ui/core/DialogContent";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import DialogActions from "@material-ui/core/DialogActions";
import {register} from "../UserFunctions";
import FormControl from '@material-ui/core/FormControl';


const useStyles = makeStyles(() => ({
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
    padding: "35px 30px 25px"
  },
  login__button: {
    color: "white",
    background: "linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)",
    "&:hover": {
      boxShadow: "0 5px 11px 0 rgba(0,0,0,.18), 0 4px 15px 0 rgba(0,0,0,.15)"
    }
  },
}));
const RegisterForm = ({history}) => {
    const classes = useStyles();
    const [username, setUsername] = useState('');
    const [first_password, setFirst_password] = useState('');
    const [last_password, setLast_password] = useState('');

    const onSubmit =(e)=>{
      e.preventDefault();
      const newUser = {
          username: username,
          first_password: first_password,
          last_password: last_password,
      };
      register(newUser).then(res =>{
        if (res){
          history.push('/login');
        }
      })
    };

    return (
      <FormControl onSubmit={onSubmit}>
        <DialogContent className={classes.dialog__content}>
            <DialogContentText className={classes.dialog__text}>
                Ваш логин
            </DialogContentText>
            <TextField
                id="outlined-username-input"
                label="Имя пользоватея "
                className={classes.text__field}
                type="username"
                autoComplete="current-username"
                margin="dense"
                variant="outlined"
                onChange={e=>{setUsername(e.target.value)}}
            />
            <DialogContentText className={classes.dialog__text}>
                Ваш пароль
            </DialogContentText>
            <TextField
                id="outlined-password-input"
                label="Пароль"
                className={classes.text__field}
                type="password"
                autoComplete="current-password"
                margin="dense"
                variant="outlined"
                onChange={e=>{setFirst_password(e.target.value)}}
            />
            <DialogContentText className={classes.dialog__text}>
                Повторить пароль
            </DialogContentText>
            <TextField
                id="outlined-password-repeat-input"
                label="Пароль"
                className={classes.text__field}
                type="password"
                autoComplete="current-password-repeat"
                margin="dense"
                variant="outlined"
                onChange={e=>{setLast_password(e.target.value)}}
            />
          <DialogActions className={classes.dialog__end}>
            {/*<Button variant="outlined" className={classes.forgot__button}>*/}
            {/*  Забыли пароль ?*/}
            {/*</Button>*/}
            <Button
              variant="contained"
              onClick={onSubmit}
              className={classes.login__button}
            >
              Войти
            </Button>
          </DialogActions>
        </DialogContent>
      </FormControl>
    );
};
export default RegisterForm;
