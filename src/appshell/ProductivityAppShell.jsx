import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';

import Typography from '@material-ui/core/Typography';


const drawerWidth = 60;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    background: theme.palette.primary.dark
  },
  drawerContainer: {
    overflow: 'auto',

  },
  itemPrimary: {
    color: theme.palette.primary.contrastText,
  },
  itemIconRoot: {
    minWidth: 0,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  drawerDividerLight: {
    backgroundColor: theme.palette.primary.contrastText,
    height: theme.spacing(0.1),
  },
}));

export default function ProductivityAppShell({ children, appTitle, appMenu }) {
  const classes = useStyles();
  const AppMenu = appMenu;
  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" noWrap>{appTitle}</Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <Toolbar />
        <div className={classes.drawerContainer}>
          <AppMenu />
        </div>
      </Drawer>
      <main className={classes.content}>
        <Toolbar />
        {children}
      </main>
    </div>
  );
}