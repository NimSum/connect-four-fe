const grid = [
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0]
];

const initialState = {
  grid,
  currentPlayer: null
};

const currentGame = (state = initialState, action) => {
  switch(action.type) {
    case 'UPDATE_GAME':
      return  action.data;
    default:
      return state;
  }
};

export default currentGame;