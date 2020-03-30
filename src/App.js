import React from 'react';
import GridContextProvider from './contexts/GridContext';
import PlayerContextProvider from './contexts/PlayerContext';
import GameContextProvider from './contexts/GameContext';
import PlayerTurn from './components/PlayerTurn';
import Grid from './components/Grid';
import GameOutcome from './components/GameOutcome';
import Score from './components/Score';
import ResetButton from './components/ResetButton';
import './App.css';

function App() {
  return (
    <div className='App'>
      <h1>Tic Tac Toe</h1>
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
    </div>
  );
}

export default App;
