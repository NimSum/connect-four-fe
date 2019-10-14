import { updateGlobalPlayers, updateGlobalMessages, setGlobalPlayers } from '../actions';
import store from '../index';


function handleWorldChat(data) {
  const { type } = data;
  if (type === 'player') {
    store.dispatch(updateGlobalPlayers(data));
  } else if (type === 'message'  || type === 'notification') {
    store.dispatch(updateGlobalMessages(data));
  }
};

function handleAllWorldPlayers(players) {
  store.dispatch(setGlobalPlayers(players));
}


export default {
  handleWorldChat,
  handleAllWorldPlayers
}