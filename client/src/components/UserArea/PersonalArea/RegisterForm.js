import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import DialogActions from "@material-ui/core/DialogActions";
import { register } from "../UserFunctions";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

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
  }
}));
const RegisterForm = ({ history }) => {
  const classes = useStyles();
  const [username, setUsername] = useState("");
  const [first_password, setFirst_password] = useState("");

  const onSubmit = e => {
    e.preventDefault();
    const newUser = {
      username: username,
      first_password: first_password,
    };
    register(newUser).then(res => {
      if (res) {
        history.push("/login");
      }
    });
  };

  return (
    <Container
      maxWidth="sm"
      className={classes.dialog__content}
      onSubmit={onSubmit}
    >
      <Typography className={classes.dialog__text}>Ваш логин</Typography>
      <TextField
        id="outlined-username-input"
        label="Имя пользоватея "
        className={classes.text__field}
        type="username"
        autoComplete="current-username"
        margin="dense"
        variant="outlined"
        value={username}
        onChange={e => {
          setUsername(e.target.value);
        }}
      />
      <Typography className={classes.dialog__text}>Ваш пароль</Typography>
      <TextField
        id="outlined-password-input"
        label="Пароль"
        className={classes.text__field}
        type="password"
        autoComplete="current-password"
        margin="dense"
        variant="outlined"
        value={first_password}
        onChange={e => {
          setFirst_password(e.target.value);
        }}
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
    </Container>
  );
};
export default RegisterForm;
