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

  return (
    <div className={classes.root}>
    </div>
  );
};

export default PlayerForms;
