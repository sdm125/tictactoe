import React, { useContext } from 'react';
import { GridContext } from '../contexts/GridContext';
import GridRow from './GridRow';

const Grid = () => {
  const { grid } = useContext(GridContext);
  return (
    <div className='grid'>
      {grid.map((cells, index) => (
        <GridRow key={index} cells={cells} />
      ))}
    </div>
  );
};

export default Grid;
