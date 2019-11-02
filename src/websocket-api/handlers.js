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
  


//// ACTIVE GAME
export function handleActiveGameUpdate(data) {
  const {type} = data;

  if (type === 'message' || type === 'notification') {
    store.dispatch(updateActiveGameMsgs(data));
  } else if (type === 'inactiveUpdate') {
    store.dispatch(updateInactiveGame(data));
  } else if (type === 'activeUpdate') {
    store.dispatch(updateActiveGame(data));
  } else if (type === 'gameOver') {
    store.dispatch(gameOver(data));
  }
};

export function handleRegisterClient() {
  const player = store.getState('currentGame');
  console.log(player)
};

//// OTHER
export function handleDisconnect() {
  store.dispatch(logoutUser());
}