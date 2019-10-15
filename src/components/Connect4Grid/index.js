import React, { useState, useEffect } from 'react';
import logic from './logic';
import { updateCurrentGame } from '../../websocket-api';
import { connect } from 'react-redux';

function Connect4Grid(props) {
  const { checkWinner } = logic(props.grid);

  console.log(checkWinner(props.currentPlayer));
  useEffect(() => updateCurrentGame(), []);
  
  return (
    <div>
      GRID HERE
    </div>
  )
};

const mapStateToProps = ({ currentGame }) => ({
  grid: currentGame.grid,
  currentPlayer: currentGame.currentPlayer
})

export default connect(mapStateToProps)(Connect4Grid);
