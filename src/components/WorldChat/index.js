import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { joinWorldChat, sendWorldMessage, leaveWorldChat, getWorldChatPlayers } from '../../websocket-api';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import WorldChatPlayers from './WorldChatPlayers';
import Switch from '@material-ui/core/Switch';
import theme from '../../MUI_theme';
import ChatBox from '../ChatBox';


function WorldChat(props) {
  const classes = useStyles(theme);
  const [isChatActive, setChatActive] = useState(true);
  const {
    me,
    messages,
  } = props;
  const { player_name, win_streak, _id, wins, losses } = me;

  const leaveChat = () => {
    leaveWorldChat();
  }
  const handleChatToggle = () => {
    if (isChatActive) {
      leaveChat();
    } else {
      joinWorldChat({player_name, win_streak, _id, wins, losses });
    }
    setChatActive(!isChatActive);
  };
  
  useEffect(() => joinChat(), []);

  const generateChatElements = () => props.messages.map(({ message, player_name }) => <div>
    <h4>{ player_name }: </h4>
    <p>{ message }</p>
  </div>);

  const generateAvailablePlayers = () => props.players.map(({ player_name }) => <h4>{ player_name }: </h4>);

  useEffect(() => {
    joinWorldChat({player_name, win_streak, _id, wins, losses });
    getWorldChatPlayers();
  }, [player_name, win_streak, _id, wins, losses]);
  
  return (
    <Box className={classes.container}>
      <Switch
        checked={isChatActive}
        onChange={handleChatToggle}
        className={classes.chatToggle}
        value="checkedB"
        color="primary"
        inputProps={{ 'aria-label': 'Join/leave world chat' }}
      />
      <Box className={classes.chatBox}>
        < ChatBox messages={messages} sendMessage={handleSendMessage}title={'World Chat:'} />
      </Box>
      <WorldChatPlayers />
    </Box>
  )
};

const mapStateToProps = ({ worldChat }) => ({
  messages: worldChat.messages,
  players: worldChat.players
})

export default connect(mapStateToProps)(WorldChat)
