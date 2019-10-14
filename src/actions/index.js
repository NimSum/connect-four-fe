export const updateGlobalPlayers = player => ({
  type: 'UPDATE_GLOBAL_PLAYERS',
  player
});

export const setGlobalPlayers = players => ({
  type: 'SET_GLOBAL_PLAYERS',
  players
})

export const updateGlobalMessages = message => ({
  type: 'UPDATE_GLOBAL_MESSAGES',
  message
});
