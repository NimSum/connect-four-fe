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

  const availableRooms = (
    <Box boxShadow={3} className={classes.roomsContainer}>
      <Box className={classes.titleContainer}>
        <Typography variant="h6">
          Available Rooms: 
        </Typography>
        { !isInRoom && 
            <Button 
              variant="outlined" 
              color="primary" 
              onClick={() => handleShowForm(true)}
              startIcon={<AddIcon/>}>
              New Room
            </Button>
        }
      </Box>
      <Rooms isInRoom={isInRoom} joinHandler={joinRoom}/>
    </Box>
  );

  if (currRoomStatus === 'active') {
    return <Redirect to={'/active_game'} />
  }

  return (
    <article className={classes.root}>
      <NewRoomDialog 
        submitHandler={handleFormSubmit} 
        isVisible={formVisible}
        showForm={handleShowForm}/>
      {
        isInRoom && <WaitingRoom leaveHandler={handleLeave} />
      }
      {availableRooms}
    </article>
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
