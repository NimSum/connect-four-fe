export default function(grid) {
  const gridY = [
    [grid[0][0], grid[1][0], grid[2][0], grid[3][0], grid[4][0], grid[5][0]],
    [grid[0][1], grid[1][1], grid[2][1], grid[3][1], grid[4][1], grid[5][1]],
    [grid[0][2], grid[1][2], grid[2][2], grid[3][2], grid[4][2], grid[5][2]],
    [grid[0][3], grid[1][3], grid[2][3], grid[3][3], grid[4][3], grid[5][3]],
    [grid[0][4], grid[1][4], grid[2][4], grid[3][4], grid[4][4], grid[5][4]],
    [grid[0][5], grid[1][5], grid[2][5], grid[3][5], grid[4][5], grid[5][5]],
    [grid[0][6], grid[1][6], grid[2][6], grid[3][6], grid[4][6], grid[5][6]]
  ];
  const botLeftTopRight = [
    [grid[3][0], grid[2][1], grid[1][2], grid[0][3]],
    [grid[4][0], grid[3][1], grid[2][2], grid[1][3], grid[0][4]],
    [grid[5][0], grid[4][1], grid[3][2], grid[2][3], grid[1][4], grid[0][5]],
    [grid[5][1], grid[4][2], grid[3][3], grid[2][4], grid[1][5], grid[0][6]],
    [grid[5][2], grid[4][3], grid[3][4], grid[2][5], grid[1][6]],
    [grid[5][3], grid[4][4], grid[3][5], grid[2][6]]
  ];
  const topLeftBotRight = [
    [grid[2][0], grid[3][1], grid[4][2], grid[5][3]],
    [grid[1][0], grid[2][1], grid[3][2], grid[4][3], grid[5][4]],
    [grid[0][0], grid[1][1], grid[2][2], grid[3][3], grid[4][4], grid[5][5]],
    [grid[0][1], grid[1][2], grid[2][3], grid[3][4], grid[4][5], grid[5][6]],
    [grid[0][2], grid[1][3], grid[2][4], grid[3][5], grid[4][6]],
    [grid[0][3], grid[1][4], grid[2][5], grid[3][6]]
  ];

  const checkWinner = player => {
    const gridMap = [
      ...grid,
      ...gridY,
      ...botLeftTopRight,
      ...topLeftBotRight
    ];

    for (let row of gridMap) {
      let inOrderCounter = 0;
      let prevSlot = 0;

      for (let slot of row) {
        prevSlot === player && slot === prevSlot
          ? inOrderCounter++
          : inOrderCounter = 0;
        prevSlot = slot;
        
        if (inOrderCounter >= 3) {
          return true;
        };
      }
      inOrderCounter = 0;
      prevSlot = 0;
    };

    return false;
  };

  return {
    checkWinner
  };
};