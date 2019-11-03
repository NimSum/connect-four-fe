import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import request from '../../requests';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Grow from '@material-ui/core/Grow';
import { makeStyles } from '@material-ui/core/styles';

function PlayerForms(props) {
  const classes = useStyles();
  const [loginValues, setLoginValues] = useState({});
  const [signUpValues, setSignUpValues] = useState({});
  const [showSignUpForm, setShowSignUpForm] = useState(false);
  const [showAnonLoginForm, setShowAnonLoginForm] = useState(false);
  const [errors, setErrors] = useState([]);
  const [isLoading, setLoading] = useState(false);

  const handleLoginForm = ({ target }) => setLoginValues({ ...loginValues, [target.name]: target.value });
  const handleSignUpForm = ({ target }) => {
    const withSpace = target.value.replace(/[^a-zA-Z\s0-9]/g, "");
    const withoutSpace = withSpace.replace(/[\s]/g, "");

    if (target.name === 'secret_one' || target.name === 'secret_two') {
      setSignUpValues({ ...signUpValues, [target.name]: withSpace })
    } else if (target.name === 'email') {
      setSignUpValues({ ...signUpValues, [target.name]: target.value })
    } else {
      setSignUpValues({ ...signUpValues, [target.name]: withoutSpace })
    }
  };

  const verifySignUpParams = () => {
    const errors = [];
    const reqParams = [
      'email',
      'player_name', 
      'password',
      'confirm_password',
      'secret_one', 
      'secret_two',
    ];

    for (let param of reqParams) {
      const readable = param.split('_').join(' ');
      if (!signUpValues[param]) {
        errors.push({ type: 'input', error: `${readable.toUpperCase()} is required.`});
      } else if (signUpValues[param].length < 3) {
        errors.push({ type: 'input', error: `${readable.toUpperCase()} must be at least 3 characters or longer.`});
      } else if (param === 'password') {
        if (signUpValues.password !== signUpValues.confirm_password) {
          errors.push({ type: 'input', error: 'Passwords must match.'})
        }
      }
    }

    if (errors.length > 0) {
      setErrors(errors);
      return false;
    } else {
      return true;
    }
  };

  const loadingIcon = (
    <div className={classes.loadingIcon}>
      <CircularProgress  />
    </div>
  );

  const signUpUser = async (e) => {
    e.preventDefault();
    try {
      if (verifySignUpParams()) {
        const {
          email,
          password,
          player_name,
          secret_one,
          secret_two,
        } = signUpValues;
        const res = await request('signupUser', {
          email,
          password,
          player_name,
          secret_one,
          secret_two,
        });
        if (!res.ok) {
          setLoading(false);
          throw await res.json();
        } else {
          const player = await res.json();
          props.registerPlayer(player);
          setLoading(false);
        };
      }
    } catch(err) {
      setErrors([err]);
    }
  };

  const loginAnonymously = async (e) => {
    e.preventDefault();
    const { player_name } = signUpValues;
    setLoading(true);
    try {
      const res = await request('anonymousLogin', {player_name});
      if (!res.ok) {
        setLoading(false);
        throw await res.json();
      } else {
        const token = await res.json();
        const anon = {
          player: {
            player_name, 
          },
          type: 'anonymous', 
          ...token
        };
        props.registerPlayer(anon);
        setLoading(false);
      };
    } catch(error) {
      setErrors([error]);
    }
  };

  const loginUser = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const player = await request('login', loginValues);
      if (!player.ok) {
        setLoading(false);
        throw await player.json();
      } else {
        props.registerPlayer(await player.json())
        setLoading(false);
      };
    } catch(err) {
      setErrors([err]);
    }
  };
  
  const generateErrors = () => errors.map(err => {
    return (
      <Grow in={!!errors.length} timeout={400}>
        <Typography className={classes.error}>
          {err.error}
        </Typography>
      </Grow>
    )
  });

  return (
    <div className={classes.root}>
    </div>
  );
};

export default PlayerForms;
