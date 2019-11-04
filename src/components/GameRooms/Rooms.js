import React, { useState } from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import generateAvatar from '../../utils/nameAvatarGenerator';
import IconButton from '@material-ui/core/IconButton';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import Button from '@material-ui/core/Button';
import LockIcon from '@material-ui/icons/Lock';
import Typography from '@material-ui/core/Typography';
import theme from '../../MUI_theme';
import Input from '@material-ui/core/Input';

function Rooms({allGameRooms, joinHandler, currPlayerName, roomStatus}) { 


const mapStateToProps = ({ allGameRooms, currentPlayer, currentGame }) => ({
  allGameRooms,
  currPlayerName: currentPlayer.player.player_name,
  roomStatus: currentGame.status
})

export default connect(mapStateToProps)(Rooms);