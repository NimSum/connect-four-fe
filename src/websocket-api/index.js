import openSocket from 'socket.io-client';
import eventHandlers from './handlers';

const socket = openSocket('http://localhost:3000');

const {
  handleWorldChat,
  handleAllWorldPlayers
} = eventHandlers;

socket.on('world chat update', handleWorldChat);
socket.on('send world chat players', handleAllWorldPlayers);

export function sendWorldMessage(message) {
  socket.emit('broadcast to world chat', message)
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

export function registerClient(player) {
  socket.emit('register client', player);
}

export function leaveWorldChat() {
  socket.emit('leave world chat');
};