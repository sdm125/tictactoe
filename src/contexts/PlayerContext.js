import React, { createContext, useReducer } from 'react';
import playerReducer from '../reducers/PlayerReducer';

export const PlayerContext = createContext();

const PlayerContextProvider = props => {
  const [players, playerDispatch] = useReducer(playerReducer, [
    {
      mark: 'X',
      active: true,
      hasWon: false,
      score: 0
    },
    {
      mark: 'O',
      active: false,
      hasWon: false,
      score: 0
    }
  ]);

  return (
    <PlayerContext.Provider
      value={{
        players,
        playerDispatch
      }}
    >
      {props.children}
    </PlayerContext.Provider>
  );
};

export default PlayerContextProvider;
