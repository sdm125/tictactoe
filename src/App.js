import React from 'react';
import GridContextProvider from './contexts/GridContext';
import PlayerContextProvider from './contexts/PlayerContext';
import PlayerTurn from './components/PlayerTurn';
import Grid from './components/Grid';
import GameOutcome from './components/GameOutcome';
import ResetButton from './components/ResetButton';
import './App.css';

function App() {
  return (
    <div className='App'>
      <PlayerContextProvider>
        <GridContextProvider>
          <Grid />
          <div className='game-status-msg'>
            <PlayerTurn />
            <GameOutcome />
          </div>
          <ResetButton />
        </GridContextProvider>
      </PlayerContextProvider>
    </div>
  );
}

export default App;
