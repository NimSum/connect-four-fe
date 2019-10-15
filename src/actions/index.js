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

export const updateGridSlots = data => ({
  type: 'UPDATE_GAME',
  data
})

export const saveCurrentPlayer = player => ({
  type: 'SAVE_PLAYER_INFO',
  player
})