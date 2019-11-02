import React, { useState, useEffect, useCallback } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import theme from '../../MUI_theme';
import Box from '@material-ui/core/Box';
import Grow from '@material-ui/core/Grow';

function Splash() {
  const randomizedColors = Object.values(theme.palette.chips)
    .sort(() => .5 - Math.random());
  const [chipOne] = useState(randomizedColors[0]);
  const [chipTwo] = useState(randomizedColors[1]);
  const [currSlot, setCurrSlot] = useState([0, 0]);
  const [currChip, setCurrChip] = useState(1);
  const [grid, setGrid] = useState([
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 2 ], 
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 1 ],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 1 ], 
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 1 ],
    [0, 0, 0, 0, 0, 0, 0, 1, 2, 2 ], 
    [0, 0, 0, 0, 0, 0, 0, 0, 2, 2 ],
    [0, 0, 0, 0, 0, 0, 0, 0, 1, 1 ], 
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 2 ],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 2 ], 
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 1 ],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 1 ],
  ]);
  const classes = useStyles({
    ...theme,
    chipOne,
    chipTwo
  });

  const placeRandomChip = useCallback(() => {
    const randIdx = Math.floor(Math.random() * grid.length);

    for (let i = grid[randIdx].length - 1; i >= 0; i--) {
      if (grid[randIdx][i] === 0) {
        const copy = [...grid];
        copy[randIdx][i] = currChip;
        setGrid(copy);
        setCurrSlot([randIdx, i]);
        currChip === 1 ? setCurrChip(2) :  setCurrChip(1) ;
        break;
      };
    };
  }, [setCurrChip, currChip, grid]);
  return (
    <Box className={classes.root}>
      <Box boxShadow={3} className={classes.gridContainer}>
        {connectFourGrid}
      </Box>
    </Box>
  )
};
export default Splash
