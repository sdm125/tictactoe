import React, { createContext, useReducer } from 'react';
import OnlinePlayerReducer from '../reducers/OnlinePlayerReducer';

export const OnlinePlayerContext = createContext();

export const OnlinePlayerContextProvider = (props) => {
  const [onlinePlayer, onlinePlayerDispatch] = useReducer(OnlinePlayerReducer, {
    playerName: '',
    playerId: '',
    playerHasJoined: false,
    pendingGameRequest: false,
    challengerName: '',
  });

  return (
    <OnlinePlayerContext.Provider
      value={{
        playerName: onlinePlayer.playerName,
        playerId: onlinePlayer.playerId,
        playerHasJoined: onlinePlayer.playerHasJoined,
        pendingGameRequest: onlinePlayer.pendingGameRequest,
        challengerName: onlinePlayer.challengerName,
        onlinePlayerDispatch,
      }}
    >
      {props.children}
    </OnlinePlayerContext.Provider>
  );
};

export default OnlinePlayerContextProvider;
