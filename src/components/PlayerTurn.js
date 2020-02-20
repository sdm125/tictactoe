import React, { useContext } from 'react';
import { PlayerContext } from '../contexts/PlayerContext';
import { GridContext } from '../contexts/GridContext';

const PlayerTurn = () => {
  const { players, isDraw } = useContext(PlayerContext);
  const { grid } = useContext(GridContext);
  const [player1, player2] = players;

  return (
    <div style={{ marginTop: '15px' }}>
      {!player1.hasWon && !player2.hasWon && !isDraw(grid)
        ? players.map(player => {
            if (player.active) {
              return `${player.mark} Turn`;
            }
          })
        : ''}
    </div>
  );
};

export default PlayerTurn;
