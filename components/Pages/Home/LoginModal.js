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
  bgcolor: 'rgb(0,0,0,.75)',
  border: '2px solid #000',
  borderRadius: '5px',
  color: 'common.white',
  boxShadow: 24,
  p: 4,
};

const styleInput = {
  backgroundColor: '#333',
  '& .MuiFormLabel-root.MuiInputLabel-root': {
    color: '#8c8c8c'
  },
  '& .MuiInputBase-root.MuiFilledInput-root': {
    color: 'common.white',
    backgroundColor: '#333',
  }
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
              id="emailNetflix"
              name="emailNetflix"
              label="Email or phone number"
              variant="filled"
              autoComplete="off"
              sx={styleInput}
            />
            <FormHelperText sx={{ color: 'primary.main', mx: 0 }}>
              Your password must contain between 4 and 60 characters.
            </FormHelperText>
          </FormControl>

          <FormControl sx={{ mb:4 }} fullWidth>
            <TextField
              id="passwordNetflix"
              name="passwordNetflix"
              type={ showPass ? 'text' : 'password'}
              label="Password"
              variant="filled"
              autoComplete="off"
              sx={styleInput}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <Button onClick={() => setShowPass(!showPass)}>{showPass ? 'Hide': 'Show'}</Button>
                  </InputAdornment>
                )
              }}
            />
            <FormHelperText sx={{ color: 'primary.main', mx: 0 }}>
              Your password must contain between 4 and 60 characters.
            </FormHelperText>
          </FormControl>

          <Button size="large" type="submit" variant="contained" fullWidth>Sign in</Button>
        </form>
      </Box>
    </Modal>
  );
};

export default LoginModal;
