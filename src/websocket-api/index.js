import openSocket from 'socket.io-client';
import {
  handleWorldChat,
  handleAllWorldPlayers,
  handleAllGameRooms,
  handleGameRoomUpdate,
  handleActiveGameUpdate,
  handleDisconnect
} from './handlers';

const socket = openSocket('http://ec2-34-205-32-52.compute-1.amazonaws.com:3000');

//// AUTO WORLD CHAT 
socket.on('world chat update', handleWorldChat);
socket.on('send world chat players', handleAllWorldPlayers);
//// AUTO GAME ROOMS
socket.on('send all game rooms', handleAllGameRooms);
socket.on('game rooms update', handleGameRoomUpdate);
socket.on('disconnect', handleDisconnect);

/// WORLD CHAT
export function sendWorldMessage(message) {
  socket.emit('broadcast to world chat', message)
};

export function leaveWorldChat() {
  socket.emit('leave world chat');
};

export function joinWorldChat(player) {
  socket.emit('join world chat', player);
};

export function getWorldChatPlayers() {
  socket.emit('get world chat players');
}

export function subscribeToWorldChat() {
  socket.on('world chat update', handleWorldChat);
};


/// CLIENT REGISTRATION
export function registerClient(token) {
  socket.emit('register client', token);
}

export function removeClient(token) {
  socket.emit('remove client', token);
};



/// GAME ROOMS
export function createNewGameRoom(name, password = '') {
  socket.emit('create game room', { name, password });
};

export function joinGameRoom(roomId, password = '') {
  socket.emit('join game room', {roomId, password});
};

export function leaveGame() {
  socket.emit('leave game room');
};


//// Active Game
export function listenToActiveGame() {
  socket.on('active game update', handleActiveGameUpdate);
};

export function unsubscribeToActiveGame() {
  socket.removeListener('active game update')
}

export function setPlayerReady(data) {
  socket.emit('set player ready', data);
};

export function placePlayerChip(xCoordinate) {
  socket.emit('place player chip', xCoordinate);
};

export function sendInGameMessage(payload) {
  socket.emit('send in game message', payload);
};
