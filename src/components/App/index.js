import React, { useEffect, useState } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

function App(props) {
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
            </div>)
        })}
      />
      <Route 
        exact path='/home'
        render={(() => {
          return (
            <div>
            </div>)
        })}
      />
      <Route 
        exact path='/active_game'
        render={(() => {
          return (
            <div>
            </div>)
        })}
      />
    </div>
  );
}

const mapDispatchToProps = dispatch => ({
});

export default connect(null, mapDispatchToProps)(App);
