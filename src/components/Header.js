import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import NavigationIcon from "@material-ui/icons/PhoneInTalk";
import CloseIcon from "@material-ui/icons/Close";
import Fab from "@material-ui/core/Fab";
import Button from "@material-ui/core/Button";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import Hidden from "@material-ui/core/Hidden";

const useStyles = makeStyles(theme => ({
  grow: {
    flexGrow: 1
  },
  SearchButton: {
    marginRight: theme.spacing(2),
    marginLeft: theme.spacing(2)
  },
  extendedIcon: {
    marginRight: theme.spacing(1)
  },
  fab: {
    background: "white",
    border: "1px solid rgba(0, 0, 0, 0.23)",
    boxShadow: "none"
  },
  button: {
    margin: theme.spacing(1)
  }
}));

export default function ButtonAppBar() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false
  });

  const toggleDrawer = (side, open) => event => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [side]: open });
  };

  return (
    <div className={classes.root}>
      <div className="logo">
        <img src="https://i.ibb.co/HptfmLY/Capture1.png" alt="logoImg" />
      </div>
      <AppBar position="static" color="inherit" position="fixed">
        <Toolbar>
          <div className={classes.grow} />
          <Hidden smDown>
            <Fab
              variant="extended"
              size="small"
              aria-label="Add"
              className={classes.fab}
            >
              <NavigationIcon className={classes.extendedIcon} />
              7992356845
            </Fab>
          </Hidden>
          <IconButton
            edge="start"
            className={classes.SearchButton}
            color="inherit"
            aria-label="Menu"
          >
            <SearchIcon />
          </IconButton>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="Menu"
            onClick={toggleDrawer("top", true)}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <SwipeableDrawer
        anchor="top"
        open={state.top}
        onClose={toggleDrawer("top", false)}
        onOpen={toggleDrawer("top", true)}
      >
        <div
          className={classes.fullList}
          role="presentation"
          onClick={toggleDrawer("top", false)}
          onKeyDown={toggleDrawer("top", false)}
        >
          <List>
            <ListItem style={{ display: "flex", justifyContent: "flex-end" }}>
              <IconButton aria-label="Delete">
                <CloseIcon />
              </IconButton>
            </ListItem>
            {[
              "Home",
              "Our Story",
              "Meet the Doctor",
              "Our Services",
              "Updates",
              "More Information",
              "Contact"
            ].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
          <Divider />
          <Button
            color="primary"
            variant="contained"
            className={classes.button}
            style={{ textTransform: "none" }}
          >
            Get Appointment
          </Button>
          <Button
            color="primary"
            variant="outlined"
            className={classes.button}
            style={{ textTransform: "none" }}
          >
            Call +917992356845
          </Button>
        </div>
      </SwipeableDrawer>
    </div>
  );
}
