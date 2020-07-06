import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import PublicIcon from '@material-ui/icons/Public';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import FavoriteIcon from '@material-ui/icons/Favorite';

const useStyles = makeStyles({
  root: {
      position:"absolute",
      left:0,
      right:0,
      bottom:0
  },
});

export default function BottomNavbar({screenConfig}) {
  const classes = useStyles();
  

  return (
    <BottomNavigation
      value={screenConfig[0]}
      onChange={(event, newValue) => {
        screenConfig[1](newValue);
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction label="Global Cases" icon={<PublicIcon />} />
      <BottomNavigationAction label="Country Cases" icon={<FavoriteIcon />} />
      <BottomNavigationAction label="Graphs" icon={<TrendingUpIcon />} />
    </BottomNavigation>
  );
}
