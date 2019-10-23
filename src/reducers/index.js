import { combineReducers } from 'redux';
import worldChat from './worldChat';
import currentGame from './currentGame';
import currentPlayer from './currentPlayer';

const rootReducer = combineReducers({
  worldChat,
  currentGame,
  currentPlayer
})

export default rootReducer;