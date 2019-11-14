import React from 'react'
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import Grow from '@material-ui/core/Grow';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';

function PlayerDetails({player}) {
  const classes = useStyles();
  const {
    win_streak,
    wins,
    losses,
    games_played,
    email,
    game_history
  } = player;
  return (
  )
}

export default PlayerDetails
