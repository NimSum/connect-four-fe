import React, { useState } from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import generateAvatar from '../../utils/nameAvatarGenerator';
import IconButton from '@material-ui/core/IconButton';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import Button from '@material-ui/core/Button';
import LockIcon from '@material-ui/icons/Lock';
import Typography from '@material-ui/core/Typography';
import theme from '../../MUI_theme';
import Input from '@material-ui/core/Input';

function Rooms({allGameRooms, joinHandler, currPlayerName, roomStatus}) { 
  const [isInRoom, setIsInRoom] = useState(false);
  const [roomPass, setRoomPass] = useState('');
  const [showPassInput, setShowPassInput] = useState(false);
  const classes = useStyles({...theme, isInRoom});

  useEffect(() => {
    roomStatus === 'waiting' || roomStatus === 'full'
    ? setIsInRoom(true)
    : setIsInRoom(false);
  }, [roomStatus, setIsInRoom])

  const passInput = (
    <Input
      placeholder="Password"
      className={classes.input}
      value={roomPass}
      onChange={(e) => setRoomPass(e.target.value)}
      onBlur={() => setShowPassInput(false)}
      autoFocus
      inputProps={{
        'aria-label': 'room password input',
      }}
    />
  );

  const handleJoinClick = (roomId, hasPassword) => {
    if (hasPassword && !roomPass.length) {
      setShowPassInput(true);
    } else {
      joinHandler(roomId, roomPass);
      setRoomPass('');
    }
  };

  const generateGameRooms = () => {
    return allGameRooms.map(room => {
      const { roomId, players, name, status, hasPassword } = room;
      const playerInfo = players[0] || players[1];
      const { player_name } = playerInfo;
      const isFull = status === 'full';
      const isAlreadyInRoom = players.some(p => {
        if (p !== null) {
          return p.player_name === currPlayerName;
        } else {
          return false;
        }
      });

      return (
        <ListItem key={roomId} className={classes.cardItem}>
          <Button
            disabled={isFull || isAlreadyInRoom}
            variant="contained"
            onClick={() => handleJoinClick(roomId, hasPassword)}
            className={classes.joinBtn}
            endIcon={hasPassword || isFull ? <LockIcon/> : <ArrowForwardIcon />}
          >
            {isFull ? 'Full' : 'Join'}
          </Button>
          <ListItemText
            primary={showPassInput ? passInput : name }
            secondary={player_name}
          />
          <ListItemSecondaryAction className={classes.avatarContainer}>
              {/* CALCULATE LATER */}
              <Typography variant="subtitle2">
                Win Rate: 90%
              </Typography>
            <IconButton className={classes.avatarIcon} edge="end" aria-label="requires-password">
              {generateAvatar(player_name)}
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
      );
    }) 
  }
const mapStateToProps = ({ allGameRooms, currentPlayer, currentGame }) => ({
  allGameRooms,
  currPlayerName: currentPlayer.player.player_name,
  roomStatus: currentGame.status
})

export default connect(mapStateToProps)(Rooms);