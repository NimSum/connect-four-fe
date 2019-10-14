import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

function WorldChat(props) {

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
