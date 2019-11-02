import React, { useEffect, useState } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

function App(props) {
  const tokenLogin = async () => {
    const token = JSON.parse(localStorage.getItem('connect_four_token')) || false;

    if (token) {
      try {
        const player = await request('tokenLogin', token);
        if (player.ok) registerPlayer(await player.json());
        else throw await player.json();
      } catch(err) {
        setError(err);
      }
    }
  };

  useEffect(() => {
    tokenLogin();
    return () => removeClient();
  }, [])


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
