import { combineReducers } from 'redux';
import worldChat from './worldChat';
import currentGame from './currentGame';

const rootReducer = combineReducers({
  worldChat,
  currentGame
})

export default rootReducer;