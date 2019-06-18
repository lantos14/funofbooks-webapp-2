import React from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import NavButton from '../NavButton/NavButton';
import { registrationRequested } from '../../../../actions/actions';
import RegistrationModalTypes from './RegistrationModal.types';

function RegistrationModal({ registrationRequested }) {
  const [open, setOpen] = React.useState(false);

  function handleClickOpen() {
    setOpen(true);
  }

  function handleClose() {
    const email = document.querySelector('#address').value;
    const username = document.querySelector('#username').value;
    const pwd = document.querySelector('#password').value;
    registrationRequested(email, username, pwd);
    setOpen(false);
  }

  return (
    <div>
      <NavButton text="Regisztráció" onClickFn={handleClickOpen} />
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Regisztráció</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Kérlek, add meg a regisztrációhoz adatokat.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="address"
            label="E-mail cím"
            type="email"
            fullWidth
          />
          <TextField
            margin="dense"
            id="username"
            label="Felhasználónév"
            type="text"
            fullWidth
          />
          <TextField
            margin="dense"
            id="password"
            label="Jelszó"
            type="password"
            fullWidth
          />
          <TextField
            margin="dense"
            id="password-double"
            label="Jelszó még egyszer"
            type="password"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Regisztrálok
          </Button>
          <Button onClick={handleClose} color="primary">
            Mégsem
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

RegistrationModal.propTypes = RegistrationModalTypes;

const mapStateToProps = store => ({
  bookList: store.bookStore.books,
  selectedBook: store.bookStore.selectedBook,
});

const mapDispatchToProps = {
  registrationRequested,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(RegistrationModal);
