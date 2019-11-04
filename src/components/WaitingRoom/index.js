import React, { useState, useEffect, useRef } from 'react';
import CloseIcon from '@material-ui/icons/Close';
import Fab from '@material-ui/core/Fab';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import generateAvatar from '../../utils/nameAvatarGenerator';
import colors from '../../MUI_theme';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { setPlayerReady } from '../../websocket-api';
import { Grid } from '@material-ui/core';
import { Grow } from '@material-ui/core';
import { unsubscribeToActiveGame, leaveGame } from '../../websocket-api';
import { leaveActiveGame } from '../../actions';

function WaitingRoom(props) {
  return (
    <Grid className={classes.root} container wrap='wrap'>
    </Grid>
  )
};

const mapStateToProps = ({ currentGame, currentPlayer }) => ({
  players: currentGame.players,
  currPlayerName: currentPlayer.player.player_name,
});

const mapDispatchToProps = dispatch => ({
  resetActiveGame: () => dispatch(leaveActiveGame())
});

export default connect(mapStateToProps, mapDispatchToProps)(WaitingRoom);
