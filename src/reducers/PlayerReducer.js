export default (state, action) => {
  switch (action.type) {
    case 'TOGGLE_ACTIVE_PLAYER':
      return [...state].map(player => {
        player.active = !player.active;
        return player;
      });
    case 'SET_WINNER':
      return [...state].map(player => {
        if (player.mark === action.payload) {
          player.hasWon = true;
        }
        return player;
      });
    case 'GET_WINNER':
      const winner = [...state].filter(player => player.hasWon);
      return winner;
    case 'RESET_PLAYERS':
      return [
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
      ];
    default:
      return state;
  }
};
