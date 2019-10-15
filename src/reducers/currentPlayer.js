const currentPlayer = (state = {}, action) => {
  switch(action.type) {
    case 'SAVE_PLAYER_INFO':
      return  action.player;
    default:
      return state;
  }
};

export default currentPlayer;