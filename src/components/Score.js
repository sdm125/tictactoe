import React, { useContext } from 'react';
import { PlayerContext } from '../contexts/PlayerContext';

const Score = () => {
  const { players } = useContext(PlayerContext);
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-evenly',
        width: '100%',
        marginBottom: '20px'
      }}
    >
      {players.map((player, index) => {
        return (
          <span
            key={index}
            style={{
              fontSize: '1.5rem',
              fontWeight: 'bold',
              padding: '10px 30px',
              background: '#fff',
              borderRadius: '20px'
            }}
          >
            {player.mark}: {player.score}
          </span>
        );
      })}
    </div>
  );
};

export default Score;
