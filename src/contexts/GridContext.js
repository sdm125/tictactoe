import React, { createContext, useReducer } from 'react';
import gridReducer from '../reducers/GridReducer';

export const GridContext = createContext();

const GridContextProvider = props => {
  const [grid, gridDispatch] = useReducer(gridReducer, [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
  ]);

  return (
    <GridContext.Provider value={{ grid, gridDispatch }}>
      {props.children}
    </GridContext.Provider>
  );
};

export default GridContextProvider;
