import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { joinWorldChat, sendWorldMessage, leaveWorldChat, getWorldChatPlayers } from '../../websocket-api';


function WorldChat(props) {
  const joinChat = () => {
    const user = { player_name: Date.now() };
    joinWorldChat(user);
    getWorldChatPlayers();
  };
  
  useEffect(() => joinChat(), []);

  return (
    <div>

    </div>
  )
};

const mapStateToProps = ({ worldChat }) => ({
  messages: worldChat.messages,
  players: worldChat.players
})

export default connect(mapStateToProps)(WorldChat)
