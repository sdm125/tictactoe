import React, { useContext } from 'react';
import { PlayerContext } from '../contexts/PlayerContext';
import { GridContext } from '../contexts/GridContext';
import { GameContext } from '../contexts/GameContext';

const GameOutcome = () => {
  const { players } = useContext(PlayerContext);
  const { isGridFull } = useContext(GameContext);
  const [player1, player2] = players;
  const { grid } = useContext(GridContext);

  // TODO I think this is where the draw issue is
  return (
    <div>
      {!player1.hasWon && !player2.hasWon && isGridFull(grid) ? (
        <div style={{ textAlign: 'center' }}>Draw!</div>
      ) : (
        players.map((player, index) => {
          return (
            <div style={{ textAlign: 'center' }} key={index}>
              {player.hasWon ? `${player.mark} wins!` : ''}
            </div>
          );
        })
      )}
    </div>
  );
};

export default GameOutcome;
