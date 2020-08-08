import React, { Fragment } from "react";
import {
  makeStyles,
  AppBar,
  Button,
  IconButton,
  CssBaseline,
  List,
  ListItem,
  ListItemText,
  Toolbar,
  Typography,
  Box,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  "@global": {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: "none",
    },
  },
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
    backgroundColor: theme.navbar.default,
    color: theme.palette.text.secondary,
  },
  toolbar: {
    display: "flex",
    flexWrap: "wrap",
  },
  toolbarRight: {
    justifyContent: "right",
    marginLeft: "auto",
  },
  rightButton: {
    margin: theme.spacing(1, 3),
  },
  heroContent: {
    padding: theme.spacing(8, 0, 6),
  },
  cardHeader: {
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[200]
        : theme.palette.grey[700],
  },
  cardPricing: {
    display: "flex",
    justifyContent: "center",
    alignItems: "baseline",
    marginBottom: theme.spacing(2),
  },
}));

const NavBar = (props) => {
  const classes = useStyles();

  return (
    <Fragment>
      <CssBaseline />
      <AppBar
        position="static"
        color="primary"
        elevation={0}
        className={classes.appBar}
      >
        <Toolbar className={classes.toolbar}>
          <IconButton>
            <Typography variant="subtitle1">Anh Pham</Typography>
          </IconButton>
          <List>
            <ListItem component="div">
              <ListItemText inset>ABOUT</ListItemText>
              <ListItemText inset>PROJECTS</ListItemText>
            </ListItem>
          </List>
          <Box className={classes.toolbarRight}>
            <Button
              href="#"
              color="secondary"
              variant="contained"
              className={classes.rightButton}
            >
              CONTACT
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </Fragment>
  );
};

export default NavBar;
