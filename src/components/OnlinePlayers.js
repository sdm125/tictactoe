import React, { useState, useContext } from 'react';
import { OnlinePlayerContext } from '../contexts/OnlinePlayerContext';
import socketIOClient from 'socket.io-client';

function OnlinePlayers(props) {
  const {
    playerName,
    playerId,
    playerHasJoined,
    pendingGameRequest,
    challengerName,
    onlinePlayerDispatch,
  } = useContext(OnlinePlayerContext);
  const [players, setPlayers] = useState([]);
  const socket = socketIOClient('http://localhost:8080/waiting');

  socket.on('playerHasJoin', (players) => setPlayers(players));
  socket.on('wouldYouLikeToPlay', (name) => {
    onlinePlayerDispatch({ type: 'SET_PENDING_GAME_REQUEST', payload: true });
    onlinePlayerDispatch({ type: 'SET_CHALLENGER_NAME', payload: name });
  });

  const joinOnline = () => {
    socket.emit('playerJoin', playerName);
    onlinePlayerDispatch({ type: 'SET_JOINED_ONLINE', payload: true });
    onlinePlayerDispatch({ type: 'SET_PLAYER_ID', payload: socket.id });
  };

  const onUserNameChange = (e) => {
    onlinePlayerDispatch({
      type: 'SET_PLAYER_NAME',
      payload: e.target.value,
    });
  };

  const challengeToGame = (id) => {
    socket.emit('challengeToGame', { requestPlayer: id, name: playerName });
  };

  return (
    <div>
      {!playerHasJoined && (
        <div>
          <div style={{ marginBottom: '5px' }}>
            <label style={{ paddingLeft: '10px' }} htmlFor='username'>
              Name
            </label>
          </div>
          <input
            type='text'
            name='username'
            value={playerName}
            style={{ width: '100%' }}
            onChange={onUserNameChange}
          />
          <button
            className='btn'
            style={{ display: 'block', marginTop: '10px' }}
            onClick={joinOnline}
          >
            Join
          </button>
        </div>
      )}
      {players.length > 1 ? (
        <h3>Players</h3>
      ) : (
        playerHasJoined && (
          <h3>Sorry there are no other players at this time</h3>
        )
      )}
      <ul>
        {players
          .filter((player) => player.id !== playerId)
          .map((player) => (
            <li
              key={player.id}
              onClick={() => challengeToGame(player.id)}
              style={{ cursor: 'pointer' }}
            >
              {player.name}
            </li>
          ))}
      </ul>

      {pendingGameRequest && (
        <div>
          {challengerName} has challenged you to a game!
          <button className='btn'>Accept</button>
          <button className='btn'>No Thanks</button>
        </div>
      )}

      <button className='btn' onClick={() => props.setShowOnlinePlayers(false)}>
        Go Back
      </button>
    </div>
  );
}

export default OnlinePlayers;
