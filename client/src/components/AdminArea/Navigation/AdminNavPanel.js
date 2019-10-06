import React from "react";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import LogOutButton from "./LogOutButton";
import menuList from "./menuList";
import { Link } from "react-router-dom";
import CreatePage from "../Content/CreatePage";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },

  drawerWidth: {
    width: 240
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(2)
  }
}));

const AdminNavPanel = () => {
  const menu = menuList;
  const classes = useStyles();

  const listItem = menu.list.map(subOption => {
    return (
      <ListItem button key={subOption.id} component={Link} to={subOption.url}>
        <ListItemText primary={subOption.title} />
      </ListItem>
    );
  });

  return (
    <div className={classes.root}>
      <Drawer variant="permanent" anchor="left" className={classes.drawerWidth}>
        <Divider />
        <List className={classes.drawerWidth}>{listItem}</List>
        <Divider />
        <LogOutButton />
      </Drawer>
      <Container className={classes.content}>
        <CreatePage />
      </Container>
    </div>
  );
};
export default AdminNavPanel;
