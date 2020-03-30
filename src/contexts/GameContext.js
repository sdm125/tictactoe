import React, { createContext } from 'react';

export const GameContext = createContext();

const GameContextProvider = props => {
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
      }
    }

    if (grid[0][2] !== '' && grid[1][1] !== '' && grid[2][0] !== '') {
      if (grid[0][2] === grid[1][1] && grid[1][1] === grid[2][0]) {
        return true;
      }
    }

    return false;
  };

  const isGridFull = grid => {
    for (let i = 0; i < grid.length; i++) {
      for (let j = 0; j < grid[i].length; j++) {
        if (grid[i][j] === '') {
          return false;
        }
      }
    }
    return true;
  };

  return (
    <GameContext.Provider
      value={{ isRowWin, isColumnWin, isDiagonalWin, isGridFull }}
    >
      {props.children}
    </GameContext.Provider>
  );
};

export default GameContextProvider;
