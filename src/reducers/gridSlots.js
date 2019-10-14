const grid = [
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0]
];

const gridSlots = (state = grid, action) => {
  switch(action.type) {
    case 'UPDATE_GRID_SLOTS':
      return  action.slots;
    default:
      return state;
  }
};

export default gridSlots;