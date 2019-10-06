import React, { useState } from "react";
import IconButton from "@material-ui/core/IconButton";
import AccountCircle from "@material-ui/icons/AccountCircle";
import { makeStyles } from "@material-ui/core/styles";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { Link } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  icon__button: {
    marginLeft: theme.spacing(2)
  },
  user__button_active: {
    background: "#33b5e5!important",
    color: "white",
    width: 182,
    "&:hover": {
      boxShadow: "0 5px 11px 0 rgba(0,0,0,.18), 0 4px 15px 0 rgba(0,0,0,.15)"
    }
  },
  user__button: {
    width: 182,
    marginLeft: 40,
    "&:hover": {
      boxShadow: "0 5px 11px 0 rgba(0,0,0,.18), 0 4px 15px 0 rgba(0,0,0,.15)"
    }
  },

  dialog: {
    justifyContent: "space-around",
    padding: "25px 40px 12px"
  }

  // forgot__button: {
  //   color: "#33b5e5!important",
  //   border: "2px solid #33b5e5!important",
  //   "&:hover": {
  //     backgroundColor: fade(theme.palette.common.white, 0.25),
  //     boxShadow: "0 5px 11px 0 rgba(0,0,0,.18), 0 4px 15px 0 rgba(0,0,0,.15)"
  //   }
  // }
}));

const LogRegArea = [
  {
    id: 1,
    name: "Войти",
    url: "/login"
  },
  {
    id: 2,
    name: "Регистрация",
    url: "/register"
  }
];

const NavButton = () => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton
        className={classes.icon__button}
        color="inherit"
        edge="end"
        onClick={handleClick}
      >
        <AccountCircle />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {LogRegArea.map(option => (
          <MenuItem
            key={option.id}
            to={option.url}
            component={Link}
            onClick={handleClose}
          >
            {option.name}
          </MenuItem>
        ))}
      </Menu>
      {/*<Button aria-controls="simple-menu" aria-haspopup="true" >*/}
      {/*  Open Menu*/}
      {/*</Button>*/}
    </div>
  );
};
export default NavButton;
