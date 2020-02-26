export default (state, action) => {
  switch (action.type) {
    case 'UPDATE_GRIDCELL_MARK':
      const updatedGrid = [...state];
      updatedGrid[action.payload.row][action.payload.col] = action.payload.mark;
      return updatedGrid;
    case 'RESET_GRID':
      return [
        ['', '', ''],
        ['', '', ''],
        ['', '', '']
      ];
    default:
      return state;
  }
};
