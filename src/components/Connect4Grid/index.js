import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

function Connect4Grid(props) {
  
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
