import React from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { Divider } from '@material-ui/core';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import generateAvatar from '../../utils/nameAvatarGenerator';
import theme from '../../MUI_theme';
import uuidv4 from 'uuid/v4';

function WorldChatPlayers(props) {
const mapStateToProps = ({ worldChat }) => ({
  players: worldChat.players,
})

export default connect(mapStateToProps)(WorldChatPlayers);
