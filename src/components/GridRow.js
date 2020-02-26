import React from 'react';
import GridCell from './GridCell';

const GridRow = props => {
  return (
    <div className='grid-row'>
      {props.gridMarks.map((mark, index) => (
        <GridCell
          key={`${props.row}${index}`}
          row={props.row}
          col={index}
          mark={mark}
        />
      ))}
    </div>
  );
};

export default GridRow;
