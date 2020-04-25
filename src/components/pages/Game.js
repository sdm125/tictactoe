import React from 'react';
import GridContextProvider from '../../contexts/GridContext';
import PlayerContextProvider from '../../contexts/PlayerContext';
import GameContextProvider from '../../contexts/GameContext';
import PlayerTurn from '../PlayerTurn';
import Grid from '../Grid';
import GameOutcome from '../GameOutcome';
import Score from '../Score';
import ResetButton from '../ResetButton';

function Game() {
  return (
    <GameContextProvider>
      <PlayerContextProvider>
        <GridContextProvider>
          <Score />
          <Grid />
          <div className='game-status-msg'>
            <PlayerTurn />
            <GameOutcome />
          </div>
          <ResetButton />
        </GridContextProvider>
      </PlayerContextProvider>
    </GameContextProvider>
  );
}

export default Game;
