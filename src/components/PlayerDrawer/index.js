import React, { useEffect } from 'react';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import theme from '../../MUI_theme';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import generateAvatar from '../../utils/nameAvatarGenerator';
import Typography from '@material-ui/core/Typography';
import EqualizerIcon from '@material-ui/icons/Equalizer';
import DoneIcon from '@material-ui/icons/Done';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { leaveWorldChat, leaveGame } from '../../websocket-api';
import { saveCurrentPlayer, leaveActiveGame } from '../../actions';
import { connect } from 'react-redux';

const drawerWidth = 230

const useStyles = makeStyles(theme => ({
  drawer: {
    [theme.breakpoints.up('md')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  toolbar: {
    ...theme.mixins.toolbar,
    padding: theme.spacing(1),
    display: 'flex',
    alignItems: 'center'
  },
  drawerPaper: {
    width: drawerWidth,
    background: ({palette}) => palette.light.lighterBlue,
    color: ({palette}) => palette.dark.darkerBlueGray
  },
  fixedMenu: {
    [theme.breakpoints.down('md')]: {
      display: 'none',
    },
  },
  menuList: {
  },
  userName: {
    marginLeft: theme.spacing(3)
  },
  link: {
    textDecoration: 'none',
    color: 'red'
  }
}));

function PlayerDrawer(props) {
  const classes = useStyles(theme);

  const handlePlayerDetails = () => {
    /// SHOW USER DETAILS
  };


  const handlePlayerStats = () => {
    /// SHOW STATS
  };

  const handleAchievements = () => {
    /// HANDLE ACHIEVEMENTS
  };

  const handleFriends = () => {
    /// HANDLE SHOW FRIENDS
  };

  const handleLogout = () => {
    leaveWorldChat();
    leaveGame();
    props.resetActiveGame();
    props.deletePlayer();
    localStorage.removeItem('connect_four_token');
  };
  
  const drawers = (
    <div>
      <div className={classes.toolbar}>
        {generateAvatar(props.player.player_name)}
        <Typography variant="h6" className={classes.userName}>
          {props.player.player_name}
        </Typography>
      </div>
      <Divider />
      <List className={classes.menuList}>
        <ListItem button key={"Stats"} onClick={handlePlayerStats}>
          <ListItemIcon>
            <EqualizerIcon />
          </ListItemIcon>
          <ListItemText primary={"Stats"} />
        </ListItem>
        <ListItem button key={"Achievements"} onClick={handleAchievements}>
          <ListItemIcon>
            <DoneIcon />
          </ListItemIcon>
          <ListItemText primary={"Achievements"} />
        </ListItem>
        <ListItem button key={"Account"} onClick={handlePlayerDetails}>
          <ListItemIcon>
            <PermIdentityIcon />
          </ListItemIcon>
          <ListItemText primary={"Account"} />
        </ListItem>
        <ListItem button key={"Friends"} onClick={handleFriends}>
          <ListItemIcon>
            <PeopleOutlineIcon />
          </ListItemIcon>
          <ListItemText primary={"Friends"} />
        </ListItem>
      </List>
      <Divider />
      <List  className={classes.menuList}>
        <Link to='/' className={classes.link}>
          <ListItem button key={"Logout"} onClick={() => {
            handleLogout();
            props.toggleDrawer();
          }}>
            <ListItemIcon>
              <ExitToAppIcon />
            </ListItemIcon>
            <ListItemText primary={"Logout"} />
          </ListItem> 
        </Link>
      </List>
    </div>
  );

  return (
    <nav className={classes.drawer} aria-label="mailbox folders">
      <Hidden smUp implementation="css">
        <Drawer
          variant="temporary"
          anchor="right"
          open={props.isVisible}
          onClose={props.toggleDrawer}
          classes={{
            paper: classes.drawerPaper,
          }}
          ModalProps={{
            keepMounted: true,
          }}
        >
          {drawers}
        </Drawer>
      </Hidden>
      <Hidden xsDown implementation="css">
        <Drawer
          classes={{
            paper: classes.drawerPaper,
          }}
          className={classes.fixedMenu}
          variant="permanent"
          open
          anchor="right"
        >
          {drawers}
        </Drawer>
      </Hidden>
    </nav>
  );
}

const mapStateToProps = ({ currentPlayer }) => ({
  player: currentPlayer.player,
  isActive: currentPlayer.token
});

const mapDispatchToProps = dispatch => ({
  deletePlayer: () => dispatch(saveCurrentPlayer({})),
  resetActiveGame: () => dispatch(leaveActiveGame())
});

export default connect(mapStateToProps, mapDispatchToProps)(PlayerDrawer);
