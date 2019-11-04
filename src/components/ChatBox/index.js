import React, { useRef, useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Send from '@material-ui/icons/Send';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import theme from '../../MUI_theme';
import uuidv4 from 'uuid/v4';

function ChatBox(props) {
  const classes = useStyles(theme);
  const { messages, sendMessage, title } = props;
  const messagesEndRef = useRef(null);
  const [newMessage, setNewMessage] = useState('');  
  const [autoScroll, switchAutoScroll] = useState(false);
  return (
    <Box boxShadow={3} className={classes.root}>
    </Box>
  );
}

export default ChatBox;