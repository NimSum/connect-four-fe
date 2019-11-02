import { 
  updateGlobalPlayers,
  updateActiveGame,
  updateGlobalMessages,
  setGlobalPlayers,
  setAllGameRooms,
  updateGameRoomList,
  updateGameRoom,
  updateActiveGameMsgs,
  updateInactiveGame,
  gameOver,
  logoutUser 
} from '../actions';
import store from '../index';

//// WORLD CHAT
export function handleWorldChat(data) {
  const { type } = data;
  if (type === 'player') {
    store.dispatch(updateGlobalPlayers(data));
  } else if (type === 'message'  || type === 'notification') {
    store.dispatch(updateGlobalMessages(data));
  }
};

export function handleAllWorldPlayers(players) {
  store.dispatch(setGlobalPlayers(players));
}


/// GAME ROOM HANDLERS
export function handleAllGameRooms(rooms) {
  store.dispatch(setAllGameRooms(rooms));
} 

export function handleGameRoomUpdate(update) {
  const { updateType } = update;
  if (['addRoom', 'deleteRoom'].includes(updateType)) {
    store.dispatch(updateGameRoomList(update));
  } else if (updateType === 'updateRoom') {
    store.dispatch(updateGameRoom(update))
  }
}
  
  store.dispatch(updateGridSlots({currentPlayer, grid}));
};

export function handleRegisterClient() {
  const player = store.getState('currentGame');
  console.log(player)
};

export function handleRemoveClient() {
  const player = store.getState('currentGame');
  console.log(player)
};