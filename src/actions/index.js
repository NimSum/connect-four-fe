/// GLOBAL CHAT ACTIIONS
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

/// APPLICATION ACTION
export const logoutUser = () => ({
  type: 'LOGOUT_USER'
})

/// PLAYER INFO
export const saveCurrentPlayer = player => ({
  type: 'SAVE_PLAYER_INFO',
  player
})


/// GAME ROOMS ACTIONS
export const setAllGameRooms = room => ({
  type: 'SET_ALL_GAME_ROOMS',
  room
})

export const updateGameRoomList = room => ({
  type: 'UPDATE_GAME_ROOM_LIST',
  room
})

export const updateGameRoom = room => ({
  type: 'UPDATE_A_GAME_ROOM',
  room
})

