import React, { useContext } from 'react';
import { PlayerContext } from '../contexts/PlayerContext';
import { GridContext } from '../contexts/GridContext';
import { GameContext } from '../contexts/GameContext';

const PlayerTurn = () => {
  const { players } = useContext(PlayerContext);
  const { isGridFull } = useContext(GameContext);
  const { grid } = useContext(GridContext);
  const [player1, player2] = players;

  return (
    <div style={{ marginTop: '15px' }}>
      {!player1.hasWon && !player2.hasWon && !isGridFull(grid)
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
