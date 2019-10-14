import React from 'react';
import { Route, Switch } from 'react-router-dom';
import WorldChat from '../WorldChat';
import Connect4Grid from '../Connect4Grid';
import { connect } from 'react-redux';

function App(props) {

  return (
    <div className="App">
      <header className="App-header">
        Connect Four!
        <button onClick={() => props.test('HI')}>TEST</button>
      </header>
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
