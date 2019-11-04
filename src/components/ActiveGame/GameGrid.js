import React, { useState, useEffect, useRef } from 'react';
import theme from '../../MUI_theme';
import Box from '@material-ui/core/Box';
import Fade from '@material-ui/core/Fade';
import Grow from '@material-ui/core/Grow';
import AddIcon from '@material-ui/icons/Add';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import WaitingRoom from '../WaitingRoom';
import { rematchReset, resetReady } from '../../actions';
import { connect } from 'react-redux';
import { placePlayerChip } from '../../websocket-api';
import { makeStyles } from '@material-ui/core/styles';

function GameGrid(props) {
  const { 
    grid, 
    gameStatus, 
    currentTurn, 
    currentPlayer, 
    players, 
    prevSlot, 
    winner, 
    resetGame, 
    resetPlayerReady
  } = props;
  const isPlayerTurn = currentTurn === currentPlayer;
  const isActive = gameStatus === 'active';
  const [main, setMain] = useState({});
  const [opponent, setOpponent] = useState({});
  const [showWaitRoom, setShowWaitRoom] = useState(false);
  const mainWin = main.player_name === winner;
  const oppWin = opponent.player_name === winner;
  const prevState = useRef({winner, grid, players});
  const [xCoordinate, setCoordinate] = useState(null);

  const classes = useStyles({
    ...theme, 
    main: main.chipColor, 
    mainWin,
    opp: opponent.chipColor,
    oppWin,
    isPlayerTurn,
    isActive
  });

  if (showWaitRoom && players[0].isReady && players[1].isReady) {
    setShowWaitRoom(false);
    resetGame();
  };

  useEffect(() => {
    const playerCheck = (!main.player_name || !opponent.player_name || players !== prevState.current.players);

    if (playerCheck && isActive) {
      if (players[0].player_name === currentPlayer) {
        setMain({...players[0], slot: 1 });
        setOpponent({...players[1], slot: 2 });
      } else if (players[1].player_name === currentPlayer) {
        setMain({...players[1], slot: 2 });
        setOpponent({...players[0], slot: 1});
      };
      prevState.current.players = players;
    };
  }, [currentPlayer, players, main, opponent, isActive]);

  useEffect(() => {
    if (winner !== prevState.current.winner && winner !== null && isActive) {
      setMain({...main, isReady: false});
      setOpponent({...opponent, isReady: false});
      resetPlayerReady();
      setShowWaitRoom(true);
    }
    prevState.current.winner = winner;
  }, [
    winner, 
    resetPlayerReady, 
    main,
    opponent,
    setShowWaitRoom,
    isActive
  ]);
  const handleHovered = ({target}) => {
    const colId = (target.id || target.parentElement.id).split(':');
    setCoordinate(parseInt(colId[1]));
  };

  const handleChipPlacement = () => {
    placePlayerChip(xCoordinate);
  };

  return (
    <div className={classes.root}>
    </div>
  )
};
const mapStateToProps = ({ currentGame, currentPlayer }) => ({
  grid: currentGame.gridX,
  currentTurn: currentGame.currentPlayer
    ? currentGame.currentPlayer.player_name
    : currentGame.currentPlayer,
  currentPlayer: currentPlayer.player
    ? currentPlayer.player.player_name
    : null,
  players: currentGame.players,
  prevSlot: currentGame.prevSlot,
  winner: currentGame.winner,
  gameStatus: currentGame.status
});

const mapDispatchToProps = dispatch => ({
  resetGame: () => dispatch(rematchReset()),
  resetPlayerReady: () => dispatch(resetReady())
})

export default connect(mapStateToProps, mapDispatchToProps)(GameGrid);
