import { setGlobalPlayers } from '../actions';
import store from '../index';

function handleAllWorldPlayers(players) {
  store.dispatch(setGlobalPlayers(players));
}


export default {
  handleAllWorldPlayers
}