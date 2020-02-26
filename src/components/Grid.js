import React, { useContext, useEffect } from 'react';
import { GridContext } from '../contexts/GridContext';
import GridRow from './GridRow';
import { PlayerContext } from '../contexts/PlayerContext';

const Grid = () => {
  const { grid } = useContext(GridContext);
  const {
    players,
    playerDispatch,
    isRowWin,
    isColumnWin,
    isDiagonalWin,
    isBoardFull
  } = useContext(PlayerContext);
  const [inactivePlayer] = players.filter(player => !player.active);

  useEffect(() => {
    if (isRowWin(grid) || isColumnWin(grid) || isDiagonalWin(grid)) {
      playerDispatch({ type: 'SET_WINNER', payload: inactivePlayer.mark });
    } else if (isBoardFull(grid)) {
      playerDispatch({ type: 'SET_WINNER', payload: 'Draw!' });
    }
  }, [
    grid,
    isRowWin,
    isColumnWin,
    isDiagonalWin,
    isBoardFull,
    playerDispatch,
    inactivePlayer
  ]);

  return (
    <div className='grid'>
      <div className='grid-container'>
        {grid.map((gridMarks, index) => (
          <GridRow key={index} row={index} gridMarks={gridMarks} />
        ))}
      </div>
    </div>
  );
};

export default Grid;
