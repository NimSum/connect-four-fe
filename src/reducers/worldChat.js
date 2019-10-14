export const worldChat = (state = { players: [], messages: [] } , action) => {
  let { players, messages } = state;

  switch(action.type) {
    case 'SET_GLOBAL_PLAYERS':
      return { players: action.players, messages };
    case 'UPDATE_GLOBAL_PLAYERS':
    case 'UPDATE_GLOBAL_MESSAGES':
      return { players, messages: [...messages, action.message] };
    case 'UPDATE_GLOBAL_CHAT':
      return { players: action.players, messages: action.messages };
    default:
      return state;
  }
};