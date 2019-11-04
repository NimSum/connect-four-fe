import React, { useState, useEffect } from 'react'
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { unsubscribeToActiveGame, createNewGameRoom, joinGameRoom, listenToActiveGame, leaveGame } from '../../websocket-api';
import { leaveActiveGame } from '../../actions';
import Rooms from './Rooms';
import NewRoomDialog from './NewRoomDialog';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import WaitingRoom from '../WaitingRoom';
import theme from '../../MUI_theme';
import Box from '@material-ui/core/Box';

function GameRooms(props) {
  const [formVisible, showForm] = useState(false);
  const {currRoomStatus, resetActiveGame} = props;
  const [isInRoom, setIsInRoom] = useState(false);
  const classes = useStyles({...theme, isInRoom});
  
  const handleFormSubmit = ({roomName, roomPassword}) => {
    createNewGameRoom(roomName, roomPassword);
    listenToActiveGame();
    showForm(false);
  };

  
  useEffect(() => {
    currRoomStatus === 'waiting' || currRoomStatus === 'full'
    ? setIsInRoom(true)
    : setIsInRoom(false);
  }, [currRoomStatus, setIsInRoom])

  const joinRoom = (roomId, password = '') => {
    if (isInRoom) {
      handleLeave();
      joinGameRoom(roomId, password);
      listenToActiveGame();
    } else {
      joinGameRoom(roomId, password);
      listenToActiveGame();
    }
  };

  const handleShowForm = (bool) => {
    showForm(bool);
  };
  
  const handleLeave = () => {
    unsubscribeToActiveGame();
    leaveGame();
    resetActiveGame();
  };
  return (
    <div>
      
    </div>
  )
}

const mapStateToProps = ({ allGameRooms, currentGame }) => ({
  allGameRooms,
  currRoomStatus: currentGame.status
});

const mapDispatchToProps = dispatch => ({
  resetActiveGame: () => dispatch(leaveActiveGame())
});

export default connect(mapStateToProps, mapDispatchToProps)(GameRooms)
