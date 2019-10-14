import openSocket from 'socket.io-client';
import eventHandlers from './handlers';

const socket = openSocket('http://localhost:3000');

const {
  handleWorldChat,
  handleAllWorldPlayers
} = eventHandlers;

