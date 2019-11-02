import React, { useEffect, useState } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { registerClient, removeClient } from '../../websocket-api';
import { connect } from 'react-redux';
import { saveCurrentPlayer } from '../../actions';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import WorldChat from '../WorldChat';
import Header from '../Header';
import GameRooms from '../GameRooms';
import Connect4Grid from '../ActiveGame';
import PlayerForms from '../PlayerForms';
import request from '../../requests';
import theme from '../../MUI_theme';
import PlayerDrawer from '../PlayerDrawer';
import Splash from '../Splash';

function App(props) {
  const classes = useStyles(theme);
  const [isDrawerOpen, openDrawer] = useState(false);
  const [error, setError] = useState({});

  const handleDrawerToggle = () => {
    openDrawer(!isDrawerOpen);
  };  

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
