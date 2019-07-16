import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import NavButton from '../NavButton/NavButton';
import loginModalTypes from './LoginModal.types';

function LoginModal({ loginRequested }) {
  const [open, setOpen] = React.useState(false);

  function handleClickOpen() {
    setOpen(true);
  }

  function handleLogin() {
    const email = document.querySelector('#address').value;
    const pwd = document.querySelector('#password').value;
    loginRequested(email, pwd);
    setOpen(false);
  }

  function handleClose() {
    setOpen(false);
  }

  return (
    <div>
      <NavButton text="Bejelentkezés" onClickFn={handleClickOpen} />
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Bejelentkezés</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Ahhoz, hogy hozzászólásokat és egyéb tevékenységeket tudj végezni az oldalon,
            regisztráció szükséges. Kérlek add meg az ehhez szükséges adatokat.
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
            id="password"
            label="Jelszó"
            type="password"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleLogin} color="primary">
            Bejelentkezés
          </Button>
          <Button onClick={handleClose} color="primary">
            Mégsem
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

LoginModal.propTypes = loginModalTypes;

export default LoginModal;
