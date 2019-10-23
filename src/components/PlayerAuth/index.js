import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import request from '../../requests';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    width: "30%",
    justifyContent: 'right'
  }
}));

function PlayerAuth(props) {
  const classes = useStyles();
  const [loginValues, setLoginValues] = useState({});
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState({});

  const handleLoginForm = ({ target })=> setLoginValues({ ...loginValues, [target.name]: target.value });

  const loginUser = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const player = await request('login', loginValues);
      if (!player.ok) throw await player.json()
      else props.registerPlayer(await player.json());
    } catch(err) {
      setError(err);
    }
    setLoading(false);
  };

  const loginForm = (
    <form autoComplete="off" className={classes.container} onSubmit={loginUser}>
      <TextField
        id="outlined-email"
        label="Email"
        className={classes.textField}
        type="email"
        name="email"
        value={loginValues.email || ''}
        onChange={handleLoginForm}
        margin="normal"
        variant="outlined"
      />
      <TextField
        id="outlined-password"
        label="Password"
        className={classes.textField}
        name="password"
        type="password"
        value={loginValues.password || ''}
        onChange={handleLoginForm}
        margin="normal"
        variant="outlined"
      />
      <h4>{isLoading && 'Logging in...'}</h4>
      <h4>{error.error && error.error}</h4>
      <button type="submit">Login</button>
    </form>
  );

  return (
    <div>
      { loginForm }
    </div>
  )
};

const mapDispatchToProps = dispatch => ({
});

export default connect(null, mapDispatchToProps)(PlayerAuth);
