import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { makeStyles } from '@material-ui/core/styles';

export default function NewRoomDialog({submitHandler, isVisible, showForm }) {
  const classes = useStyles();
  const [formFields, setFormFields] = useState({roomName: '', roomPassword: ''});

  const handleForm = ({ target }) => setFormFields({ ...formFields, [target.name]: target.value });

  const handleCreate = () => {
    if (formFields.roomName.length > 2) {
      submitHandler(formFields);
      setFormFields({roomName: '', roomPassword: ''});
    }
  };

  return (
    <Dialog open={isVisible} onClose={() => showForm(false)} aria-labelledby="Create new room">
      <DialogTitle id="Create new room">Create New Room</DialogTitle>
      <DialogContent className={classes.inputContainer}>
        <TextField
          autoFocus
          required
          margin="dense"
          onChange={handleForm}
          label="Name (3-35 Chars)"
          type="text"
          name="roomName"
          inputProps={{'maxLength': '45', 'autoComplete': 'off'}}
        />
        <TextField
          margin="dense"
          onChange={handleForm}
          label="Password (Optional)"
          type="text"
          name="roomPassword"
          inputProps={{'maxLength': '15', 'autoComplete': 'off'}}
        />
      </DialogContent>
    </Dialog>
  );
}