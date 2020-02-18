import React, { createContext, useReducer } from 'react';
import gridReducer from '../reducers/GridReducer';
import GridCell from '../components/GridCell';

export const GridContext = createContext();

const GridContextProvider = props => {
  const [grid, dispatch] = useReducer(gridReducer, [
    [
      <GridCell mark='-' key={'01'} />,
      <GridCell mark='-' key={'02'} />,
      <GridCell mark='-' key={'03'} />
    ],
    [
      <GridCell mark='-' key={'11'} />,
      <GridCell mark='-' key={'12'} />,
      <GridCell mark='-' key={'13'} />
    ],
    [
      <GridCell mark='-' key={'21'} />,
      <GridCell mark='-' key={'22'} />,
      <GridCell mark='-' key={'23'} />
    ]
  ]);

  return (
    <GridContext.Provider value={{ grid, dispatch }}>
      {props.children}
    </GridContext.Provider>
  );
};

export default GridContextProvider;
