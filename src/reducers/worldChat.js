export const worldChat = (state = { players: [], messages: [] } , action) => {
  let { players, messages } = state;

  switch(action.type) {
    case 'SET_GLOBAL_PLAYERS':
    case 'UPDATE_GLOBAL_PLAYERS':
    case 'UPDATE_GLOBAL_MESSAGES':
    case 'UPDATE_GLOBAL_CHAT':
    default:
      return state;
  }
};