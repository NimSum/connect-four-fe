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

export function handleGameUpdate(data) {
  // store.dispatch(updateGridSlots(data));
  const grid = [
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [1, 1, 1, 1, 0, 0, 0]
  ];
  const currentPlayer = 1;
  
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