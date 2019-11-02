const allGameRooms = (state = [], action) => {
  const rooms = [...state];

  switch(action.type) {
    case 'SET_ALL_GAME_ROOMS':
      return  action.room;
    case 'UPDATE_GAME_ROOM_LIST':
    case 'LOGOUT_USER':
      return [];
    default:
      return state;
  }
};

export default allGameRooms;