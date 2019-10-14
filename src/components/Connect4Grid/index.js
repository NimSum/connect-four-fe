import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

function Connect4Grid(props) {
  
  return (
    <div>
      GRID HERE
    </div>
  )
};

const mapStateToProps = ({ gridSlots }) => ({
  slots: gridSlots
})

export default connect(mapStateToProps)(Connect4Grid);
