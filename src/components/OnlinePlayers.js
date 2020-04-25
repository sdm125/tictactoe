import React, { useEffect, useState } from 'react';
import socketIOClient from 'socket.io-client';

function OnlinePlayers() {
  const [playerName, setPlayerName] = useState('');
  const [playerNames, setPlayerNames] = useState([]);
  const socket = socketIOClient('http://localhost:8080');

  const joinOnline = () => {
    socket.emit('playerJoin', playerName);
    setPlayerName('');
  };

  socket.on('playerHasJoin', (players) => setPlayerNames(players));

  const onUserNameChange = (e) => setPlayerName(e.target.value);

  return (
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
      {playerNames.length > 0 && <h3>Players</h3>}
      {playerNames.map((name, index) => (
        <li key={index}>{name}</li>
      ))}
    </div>
  );
}

export default OnlinePlayers;
