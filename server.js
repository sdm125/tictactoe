const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const socketio = require('socket.io');
const io = socketio(server);
const players = [];

const waiting = io.of('/waiting');

waiting.on('connection', (socket) => {
  socket.emit('message', 'socket connected');

  socket.on('playerJoin', (name) => {
    players.push({ id: socket.id, name });

    waiting.emit('playerHasJoin', players);
  });

  socket.on('playGame', (gameRequest) => {
    waiting
      .to(gameRequest.requestPlayer)
      .emit('wouldYouchallengeToGameLikeToPlay', gameRequest.name);
  });
});

const PORT = 8080 || process.env.PORT;
server.listen(PORT, () => console.log(`Listening on port ${PORT}`));
