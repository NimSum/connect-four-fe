import React, { useEffect, useState } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

function App(props) {

  const registerPlayer = (player) => {
    props.savePlayer(player);
    registerClient(player.token);
    if (player.type !== 'anonymous') {
      localStorage.setItem('connect_four_token', JSON.stringify(player.token));
    }
  };

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
          if (props.player.token) return <Redirect to='/home'/>;
          return (
            <div className={classes.loginPageContainer}>
              <Splash />
              <PlayerForms registerPlayer={registerPlayer} />
            </div>)
        })}
      />
      <Route 
        exact path='/home'
        render={(() => {
          if (!props.player.token) return <Redirect to='/'/>;
          return (
            <Grid className={classes.homePgContainer} container wrap='wrap-reverse'>
              <Grid item xs={6} className={classes.homePgItem}>
                <WorldChat />
              </Grid>
              <Grid item xs={6} className={classes.homePgItem}>
                <GameRooms />
              </Grid>
            </Grid>)
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
