import { updateContact } from "../../redux/contacts/operations";
import { useDispatch } from "react-redux";
import { useState } from "react";
import PropTypes from 'prop-types';
import { toast } from 'react-hot-toast';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import TextField from '@mui/material/TextField';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
// import {
//     Dialog,
//     Button,
//     TextField,
//     DialogTitle,
//     DialogContent,
//     DialogActions,
//   } from '@mui/material';
import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const defaultTheme = createTheme();

const ContactEdit = ({ id, name, number, onClose, open }) => {
  const dispatch = useDispatch();

  const [userName, setUserName] = useState(name);
  const [userNumber, setUserNumber] = useState(number);

  const handleEdit = () => {
    if (userName === '' || userNumber === '') {
      toast.error('Please enter the field values');
      return;
    }

    dispatch(
      updateContact({ id, name: userName.trim(), number: userNumber.trim() })
    );
    onClose();
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Dialog open={open} onClose={onClose}>
        <DialogTitle>Edit Contact</DialogTitle>
        <DialogContent>
          <TextField
            label="Name"
            value={userName}
            onChange={({ target: { value } }) => setUserName(value)}
            fullWidth
            variant="outlined"
            margin="normal"
          />
          <TextField
            label="Number"
            value={userNumber}
            onChange={({ target: { value } }) => setUserNumber(value)}
            fullWidth
            variant="outlined"
            margin="normal"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose}>Cancel</Button>
          <Button onClick={handleEdit}>
            Save changes
          </Button>
        </DialogActions>
      </Dialog>
    </ThemeProvider>
  );
};

ContactEdit.propTypes = {
    id: PropTypes.string,
    name: PropTypes.string,
    number: PropTypes.string,
    onClose: PropTypes.func,
    open: PropTypes.bool,
};

export default ContactEdit;
