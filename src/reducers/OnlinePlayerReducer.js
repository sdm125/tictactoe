export default (state, action) => {
  switch (action.type) {
    case 'SET_PLAYER_NAME':
      return {
        ...state,
        playerName: action.payload,
      };
    case 'SET_PLAYER_ID':
      return {
        ...state,
        playerId: action.payload,
      };
    case 'SET_JOINED_ONLINE':
      return {
        ...state,
        playerHasJoined: action.payload,
      };
    case 'SET_PENDING_GAME_REQUEST':
      return {
        ...state,
        pendingGameRequest: action.payload,
      };
    case 'SET_CHALLENGER_NAME':
      return {
        ...state,
        challengerName: action.payload,
      };
  }
};
