import { useState } from 'react';
import {
  Modal,
  Typography,
  Box,
  TextField,
  Button,
  FormHelperText,
  FormControl,
  InputAdornment, } from '@mui/material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'rgb(0,0,0.5,0.9)',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const LoginModal = ({ isOpenModal, closeModal }) => {

  const [showPass, setShowPass] = useState(false);

  return (
    <Modal
      open={isOpenModal}
      onClose={closeModal}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography variant="h3" component="h1" sx={{ mb: 4 }}>Sign in</Typography>
        <form>
          <FormControl sx={{ mb:2 }} fullWidth>
            <TextField
              id="email"
              name="email"
              label="Email or phone number"
              variant="filled"
              autoComplete="off"
              defaultValue=""
            />
            <FormHelperText>Your password must contain between 4 and 60 characters.</FormHelperText>
          </FormControl>

          <FormControl sx={{ mb:4 }} fullWidth>
            <TextField
              id="password"
              name="password"
              type={ showPass ? 'text' : 'password'}
              label="Password"
              variant="filled"
              autoComplete="off"
              defaultValue=""
              inputProps={{
                endAdornment: (
                  <InputAdornment>
                    <Button onClick={() => setShowPass(!showPass)}>{showPass ? 'Hide': 'Show'}</Button>
                  </InputAdornment>
                )
              }}
            />
            <FormHelperText>Your password must contain between 4 and 60 characters.</FormHelperText>
          </FormControl>

          <Button size="large" type="submit" variant="contained" fullWidth>Sign in</Button>
        </form>
      </Box>
    </Modal>
  );
};

export default LoginModal;
