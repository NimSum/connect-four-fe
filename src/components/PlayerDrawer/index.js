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

function PlayerDrawer(props) {
  const classes = useStyles(theme);

const mapStateToProps = ({ currentPlayer }) => ({
  player: currentPlayer.player,
  isActive: currentPlayer.token
});

const mapDispatchToProps = dispatch => ({
  deletePlayer: () => dispatch(saveCurrentPlayer({})),
  resetActiveGame: () => dispatch(leaveActiveGame())
});

export default connect(mapStateToProps, mapDispatchToProps)(PlayerDrawer);
