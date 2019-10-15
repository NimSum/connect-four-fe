import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import WorldChat from '../WorldChat';
import { registerClient, removeClient } from '../../websocket-api';
import Connect4Grid from '../Connect4Grid';
import { connect } from 'react-redux';
import Login from '../Login';

function App(props) {
  const player = {
    id: 'Date.now().toString()',
    player_name: Date.now().toString()
  }
  useEffect(() => {
    registerClient(player);
    return () => removeClient(player);
  }, [player])

  return (
    <div className="App">
      <header className="App-header">
        Connect Four!
        <button onClick={() => props.test('HI')}>TEST</button>
      </header>
      <Route 
        exact path='/'
        render={(() => {
          return (
            <div>
              <Login />
            </div>)
        })}
      />
      <Route 
        exact path='/home'
        render={(() => {
          return (
            <div>
              <WorldChat />
            </div>)
        })}
      />
      <Route 
        exact path='/play_game'
        render={(() => {
          return (
            <div>
              <Connect4Grid />
            </div>)
        })}
      />
    </div>
  );
}

const mapDispatchToProps = dispatch => ({
});

export default connect(null, mapDispatchToProps)(App);
