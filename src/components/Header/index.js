import React from 'react'
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { RBButton } from '../Buttons';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import theme from '../../MUI_theme';

const useStyles = makeStyles({
  root: {
    flexGrow: 1
  },
  appBar: {
    background: (props) => props.cyan.light,
  },
  title: {
    flexGrow: 1,
    color: (props) => props.deepPurple.dark
  },
});

function Header(props) {
  const classes = useStyles(theme.palette);

  const handleLogout = () => {
    /// LOGOUT USER
  }

  const handleDetails = () => {
    /// SHOW USER DETAILS
  }

  const menuButtons = (
    <div>
      <RBButton colorType="blue" name="My Details" clickHandler={handleLogout} />
      <RBButton colorType="red" name="Logout" clickHandler={handleDetails} />
    </div>
  )

  return (
    <header className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h5" className={classes.title}>
            {/* LOGO GOES HERE */}
            Connect [ ]
          </Typography>
          {props.isActive && menuButtons}
        </Toolbar>
      </AppBar>
    </header>
  );
}

const mapStateToProps = ({ currentPlayer }) => ({
  player: currentPlayer,
  isActive: currentPlayer.token
});

export default connect(mapStateToProps)(Header);
