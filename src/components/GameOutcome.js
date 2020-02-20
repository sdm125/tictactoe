import React, { useContext } from 'react';
import { PlayerContext } from '../contexts/PlayerContext';
import { GridContext } from '../contexts/GridContext';
import ResetButton from './ResetButton';

const GameOutcome = () => {
  const { players, isDraw } = useContext(PlayerContext);
  const { grid } = useContext(GridContext);

  return (
    <div>
      {!isDraw(grid) ? (
        players.map((player, index) => {
          return (
            <div style={{ textAlign: 'center' }} key={index}>
              {player.hasWon ? `${player.mark} wins!` : ''}
            </div>
          );
        })
      ) : (
        <div style={{ textAlign: 'center' }}>Draw!</div>
      )}
      <ResetButton />
    </div>
  );
};

export default GameOutcome;
