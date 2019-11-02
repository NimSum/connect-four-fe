import React, { useState, useEffect, useCallback } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import theme from '../../MUI_theme';
import Box from '@material-ui/core/Box';
import Grow from '@material-ui/core/Grow';

function Splash() {
  return (
    <Box className={classes.root}>
      <Box boxShadow={3} className={classes.gridContainer}>
        {connectFourGrid}
      </Box>
    </Box>
  )
};
export default Splash
