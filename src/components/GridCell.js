import React, { useContext, useEffect } from 'react';
import { GridContext } from '../contexts/GridContext';
import { PlayerContext } from '../contexts/PlayerContext';

const GridCell = props => {
  const { grid, gridDispatch } = useContext(GridContext);
  const {
    players,
    playerDispatch,
    isRowWin,
    isColumnWin,
    isDiagonalWin,
    isDraw
  } = useContext(PlayerContext);
  const [activePlayer] = players.filter(player => player.active);
  const [inactivePlayer] = players.filter(player => !player.active);
  const { mark } = activePlayer;

  useEffect(() => {
    if (isRowWin(grid) || isColumnWin(grid) || isDiagonalWin(grid)) {
      playerDispatch({ type: 'SET_WINNER', payload: inactivePlayer.mark });
    } else if (isDraw(grid)) {
      playerDispatch({ type: 'SET_WINNER', payload: 'Draw!' });
    }
  }, [
    grid,
    isRowWin,
    isColumnWin,
    isDiagonalWin,
    isDraw,
    playerDispatch,
    inactivePlayer
  ]);

  const update = () => {
    if (props.mark === '' && !activePlayer.hasWon && !inactivePlayer.hasWon) {
      gridDispatch({
        type: 'UPDATE_GRIDCELL_MARK',
        payload: { row: props.row, cell: props.cell, mark: mark }
      });

      playerDispatch({
        type: 'TOGGLE_ACTIVE_PLAYER'
      });
    }
  };

  return (
    <div
      className='grid-cell'
      style={{
        cursor:
          !activePlayer.hasWon && !inactivePlayer.hasWon ? 'pointer' : 'default'
      }}
      onClick={update}
    >
      {props.mark}
    </div>
  );
};

export default GridCell;
