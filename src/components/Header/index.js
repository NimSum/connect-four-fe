import React from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import theme from '../../MUI_theme';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    width: '100vw'
  },
  appBar: {
    background: ({palette}) => palette.dark.darkBlueGray,
    display: 'flex',
    justifyContent: 'center',
  },
  title: {
    flexGrow: 1,
    color: ({palette}) => palette.light.lighterGray
  },
  menuButton: {
    marginRight: theme.spacing(2),
    color: theme.palette.primary.contrastText,
    [theme.breakpoints.up('lg')]: {
      display: 'none',
  },
  }
}));

function Header(props) {
  const classes = useStyles(theme.palette);

  const handleLogout = () => {
    leaveWorldChat();
    props.deletePlayer();
    localStorage.removeItem('connect_four_token');
  }

  const handleDetails = () => {
    /// SHOW USER DETAILS
  }

  const menuButtons = (
    <div>
      <RBButton colorType="blue" name="My Details" clickHandler={handleDetails} />
      <RBButton colorType="red" name="Logout" clickHandler={handleLogout} />
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

const mapDispatchToProps = dispatch => ({
  deletePlayer: () => dispatch(saveCurrentPlayer({})),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
