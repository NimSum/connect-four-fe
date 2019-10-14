import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { joinWorldChat, sendWorldMessage, leaveWorldChat, getWorldChatPlayers } from '../../websocket-api';


function WorldChat(props) {
  const [ newMessage, setNewMessage ] = useState([]);

  const joinChat = () => {
    const user = { player_name: Date.now() };
    joinWorldChat(user);
    getWorldChatPlayers();
  };

  useEffect(() => joinChat(), []);

  const generateChatElements = () => props.messages.map(({ message, player_name }) => <div>
    <h4>{ player_name }: </h4>
    <p>{ message }</p>
  </div>);

  const generateAvailablePlayers = () => props.players.map(({ player_name }) => <h4>{ player_name }: </h4>);

  
  return (
    <div>
      <button onClick={() => {
        sendWorldMessage(newMessage);
      }}> SEND </button>
      <input type='text' onChange={(e) => setNewMessage(e.target.value)} />

      { generateChatElements() }

      <h3>Available Players</h3>
      { generateAvailablePlayers() }
    </div>
  )
};

const mapStateToProps = ({ worldChat }) => ({
  messages: worldChat.messages,
  players: worldChat.players
})

export default connect(mapStateToProps)(WorldChat)
