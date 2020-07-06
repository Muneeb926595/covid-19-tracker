import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { fade, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  navbar: {
    boxShadow: "5px 4px 5px 5px #000"
  },
  inputRoot: {
    color: 'inherit',
  }
}));

export default function Header() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar className={classes.navbar}>
          <Typography className={classes.title} variant="h6" noWrap>
            Coivd-19 Tracker
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}