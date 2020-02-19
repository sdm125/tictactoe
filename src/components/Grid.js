import React, { useContext } from 'react';
import { GridContext } from '../contexts/GridContext';
import GridRow from './GridRow';

const Grid = () => {
  const { grid } = useContext(GridContext);

  return (
    <div className='grid'>
      {grid.map((gridcells, index) => (
        <GridRow key={index} row={index} gridcells={gridcells} />
      ))}
    </div>
  );
};

export default Grid;
