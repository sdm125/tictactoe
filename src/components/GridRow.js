import React, { useContext } from 'react';
import GridCell from './GridCell';

const GridRow = props => {
  return (
    <div className='grid-row'>
      {props.gridcells.map((mark, index) => (
        <GridCell
          key={`${props.row}${index}`}
          row={props.row}
          cell={index}
          mark={mark}
        />
      ))}
    </div>
  );
};

export default GridRow;
