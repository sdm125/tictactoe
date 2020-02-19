export default (state, action) => {
  switch (action.type) {
    case 'UPDATE_GRIDCELL_MARK':
      const updatedGrid = [...state];
      updatedGrid[action.payload.row][action.payload.cell] =
        action.payload.mark;
      return updatedGrid;
    default:
      return state;
  }
};
