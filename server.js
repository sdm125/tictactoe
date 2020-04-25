const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const socketio = require('socket.io');
const io = socketio(server);
const players = [];

io.on('connection', (socket) => {
  socket.emit('message', 'socket connected');

  socket.on('playerJoin', (name) => {
    players.push(name);
    io.emit('playerHasJoin', players);
  });
});

const PORT = 8080 || process.env.PORT;
server.listen(PORT, () => console.log(`Listening on port ${PORT}`));
