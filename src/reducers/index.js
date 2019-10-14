import { combineReducers } from 'redux';
import worldChat from './worldChat';
import gridSlots from './gridSlots';

const rootReducer = combineReducers({
  worldChat,
  gridSlots
})

export default rootReducer;