import openSocket from 'socket.io-client';
import eventHandlers from './handlers';

const socket = openSocket('http://localhost:3000');

const {
  handleWorldChat,
  handleAllWorldPlayers
} = eventHandlers;

socket.on('world chat update', handleWorldChat);
socket.on('send world chat players', handleAllWorldPlayers);

