import React, { useContext } from 'react';
import { GridContext } from '../contexts/GridContext';
import { PlayerContext } from '../contexts/PlayerContext';

const ResetButton = () => {
  const { gridDispatch } = useContext(GridContext);
  const { playerDispatch } = useContext(PlayerContext);

  return (
    <button
      className='reset-btn'
      onClick={() => {
        gridDispatch({ type: 'RESET_GRID' });
        playerDispatch({ type: 'RESET_PLAYERS' });
      }}
      style={{ marginTop: '10px' }}
    >
      Restart Game
    </button>
  );
};

export default ResetButton;
