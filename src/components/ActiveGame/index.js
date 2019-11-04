import React, { useState } from 'react';
import theme from '../../MUI_theme';
import Box from '@material-ui/core/Box';
import GameGrid from './GameGrid';
import ChatBox from '../ChatBox';
import Switch from '@material-ui/core/Switch';
import { makeStyles } from '@material-ui/core/styles';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { sendInGameMessage } from '../../websocket-api';
import { leaveActiveGame, resetGrid } from '../../actions';

  return (
    <Box className={classes.root}>
    </Box>
  )
};

const mapStateToProps = ({ currentGame }) => ({
  grid: currentGame.grid,
  status: currentGame.status,
  messages: currentGame.messages,
});

const mapDispatchToProps = dispatch => ({
  resetGame: () => dispatch(leaveActiveGame()),
  resetGameGrid: () => dispatch(resetGrid())
});

export default connect(mapStateToProps, mapDispatchToProps)(ActiveGame);
