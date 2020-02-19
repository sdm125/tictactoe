import React, { createContext, useReducer } from 'react';
import gridReducer from '../reducers/GridReducer';

export const GridContext = createContext();

const GridContextProvider = props => {
  const [grid, dispatch] = useReducer(gridReducer, [
    ['-', '-', '-'],
    ['-', '-', '-'],
    ['-', '-', '-']
  ]);

  return (
    <GridContext.Provider value={{ grid, dispatch }}>
      {props.children}
    </GridContext.Provider>
  );
};

export default GridContextProvider;
