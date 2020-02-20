import React, { createContext, useReducer } from 'react';
import playerReducer from '../reducers/PlayerReducer';

export const PlayerContext = createContext();

const isRowWin = grid => {
  for (let i = 0; i < grid.length; i++) {
    if (
      grid[i][0] !== '' &&
      grid[i][1] !== '' &&
      grid[i][1] !== '' &&
      grid[i][2] !== ''
    ) {
      if (grid[i][0] === grid[i][1] && grid[i][1] === grid[i][2]) {
        return true;
      } else {
        return false;
      }
    }
  }
};

const isColumnWin = grid => {
  for (let i = 0; i < grid.length; i++) {
    if (
      grid[0][i] !== '' &&
      grid[1][i] !== '' &&
      grid[1][i] !== '' &&
      grid[2][i] !== ''
    ) {
      if (grid[0][i] === grid[1][i] && grid[1][i] === grid[2][i]) {
        return true;
      } else {
        return false;
      }
    }
  }
};

const isDiagonalWin = grid => {
  if (grid[0][0] !== '' && grid[1][1] !== '' && grid[2][2] !== '') {
    if (grid[0][0] === grid[1][1] && grid[1][1] === grid[2][2]) {
      return true;
    } else {
      return false;
    }
  }

  if (grid[0][2] !== '' && grid[1][1] !== '' && grid[2][0] !== '') {
    if (grid[0][2] === grid[1][1] && grid[1][1] === grid[2][0]) {
      return true;
    } else {
      return false;
    }
  }
};

const isDraw = grid => {
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === '') {
        return false;
      }
    }
  }
  return true;
};

const PlayerContextProvider = props => {
  const [players, playerDispatch] = useReducer(playerReducer, [
    {
      mark: 'X',
      active: true,
      hasWon: false
    },
    {
      mark: 'O',
      active: false,
      hasWon: false
    }
  ]);

  return (
    <PlayerContext.Provider
      value={{
        players,
        playerDispatch,
        isRowWin,
        isColumnWin,
        isDiagonalWin,
        isDraw
      }}
    >
      {props.children}
    </PlayerContext.Provider>
  );
};

export default PlayerContextProvider;
