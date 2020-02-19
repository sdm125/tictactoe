import React, { useContext } from 'react';
import { GridContext } from '../contexts/GridContext';

const GridCell = props => {
  const { dispatch } = useContext(GridContext);
  const updateMark = () => {
    dispatch({
      type: 'UPDATE_GRIDCELL_MARK',
      payload: { row: props.row, cell: props.cell, mark: 'X' }
    });
  };

  return (
    <div className='grid-cell' onClick={updateMark}>
      {props.mark}
    </div>
  );
};

export default GridCell;
