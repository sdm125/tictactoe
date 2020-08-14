import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Game from './components/pages/Game';
import './App.css';

function App() {
  return (
    <div className='App'>
      <h1>Tic Tac Toe</h1>
      <Router>
        <Switch>
          <Route exact path='/' component={Game} />
          {/* <Route exact path='/game/:type' component={Game} /> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
