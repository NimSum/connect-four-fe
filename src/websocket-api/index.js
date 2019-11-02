import openSocket from 'socket.io-client';
import {
  handleWorldChat,
  handleAllWorldPlayers,
  handleAllGameRooms,
  handleGameRoomUpdate,
  handleActiveGameUpdate,
  handleDisconnect
} from './handlers';

const socket = openSocket('http://localhost:3000');
// const socket = openSocket('http://ec2-34-205-32-52.compute-1.amazonaws.com:3000');

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



};

export function leaveWorldChat() {
  socket.emit('leave world chat');
};

export function updateCurrentGame() {
  socket.on('game update', handleGameUpdate);
  socket.emit('update the game');
} 