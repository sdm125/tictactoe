import React, { useContext } from 'react';
import { GridContext } from '../contexts/GridContext';
import { PlayerContext } from '../contexts/PlayerContext';

const GridCell = props => {
  const { gridDispatch } = useContext(GridContext);
  const { players, playerDispatch } = useContext(PlayerContext);
  const [activePlayer] = players.filter(player => player.active);

  const setMark = () => {
    gridDispatch({
      type: 'UPDATE_GRIDCELL_MARK',
      payload: { mark: activePlayer.mark, row: props.row, col: props.col }
    });

    playerDispatch({ type: 'TOGGLE_ACTIVE_PLAYER' });
  };

  return (
    <div className='grid-cell' col={props.col} onClick={setMark}>
      {props.mark}
    </div>
  );
};

export default GridCell;
