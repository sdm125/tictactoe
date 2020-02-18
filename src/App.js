import React from 'react';
import GridContextProvider from './contexts/GridContext';
import Grid from './components/Grid';
import './App.css';

function App() {
  return (
    <div className='App'>
      <GridContextProvider>
        <Grid />
      </GridContextProvider>
    </div>
  );
}

export default App;
