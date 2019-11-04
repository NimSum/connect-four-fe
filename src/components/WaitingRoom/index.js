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
  const hues = Object.values(colors.palette.chips);
  const [isReady, setIsReady] = useState(false);
  const [mainPlayer, setMainPlayer] = useState({});
  const [opponent, setOpponent] = useState({});
  const [playerColor, setPlayerColor] = useState('');
  const [oppColor, setOppColor] = useState('');
  const { players, currPlayerName, resetActiveGame } = props;
  const prevPlayers = useRef(props.players);
  const classes = useStyles({...colors, oppColor, playerColor});

  const pickRandomColor = () => {
    const cleared = [...hues].filter(c => c !== oppColor);
    return cleared[Math.floor(Math.random() * cleared.length)];
  }
    
  const handleLeave = () => {
    unsubscribeToActiveGame();
    leaveGame();
    resetActiveGame();
  };

  const handleColorSelect = (color) => {
    if (color !== oppColor) {
      setPlayerColor(color);
    }
  };

  const generateChips = () => hues.map(hue => {
    const isPlayer = hue === playerColor;
    const isOpp = hue === oppColor;
    return (
      <Box 
        onClick={() => handleColorSelect(hue)} 
        boxShadow={3} 
        key={hue} 
        borderRadius="50%" 
        bgcolor={hue} 
        className={chipStyleSelector(isPlayer, isOpp)}>
      </Box>
    )
  });

  useEffect(() => {
    if (players !== prevPlayers) {
      for (let player of players) {
        const p = player || {};
        if (p.player_name === currPlayerName) {
          setMainPlayer(p);
          setPlayerColor(p.chipColor || '');
        } else {
          setOpponent(p);
          setOppColor(p.chipColor || '');
        }
      }
    }
  }, [players, prevPlayers, currPlayerName])

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
