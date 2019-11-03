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
  return (
    <div className={classes.root}>
    </div>
  );
};

export default PlayerForms;
