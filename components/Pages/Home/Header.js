import React from 'react';
import Image from 'next/image';
import { Box,
  Button,
  Container,
  Typography,
  Grid,
  TextField,
  AppBar,
  Toolbar,
  Select,
  MenuItem, } from '@mui/material';
import BorderedBottom from '../../Wrapper/BorderedBottom';

const Header = () => {
  return (
    <BorderedBottom>
      <AppBar
        sx={{
          backgroundColor: 'transparent',
          padding: '25px 20px',
          position: 'absolute'
        }}
        elevation={0}
      >
        <Toolbar>
          <Grid container alignItems="center" spacing={2}>
            <Grid item xs>
              <Image
                priority
                src="/__images/netflix.svg"
                height="45px"
                width="167px"
                layout="intrinsic"
                alt="Netflix logo"
              />
            </Grid>
            <Grid item xs="auto">
              <Select
                name="language"
                variant="outlined"
                size="small"
                defaultValue="ID"
                sx={{
                  border: '2px solid #FFF',
                  color: 'common.white',
                  '& .MuiSelect-icon': {
                    color: 'common.white'
                  },
                  '& .MuiOutlinedInput-notchedOutline': {
                    border: 'none'
                  }
                }}
              >
                <MenuItem value="ID">Bahasa Indonesia</MenuItem>
                <MenuItem value="EN">English</MenuItem>
              </Select>
            </Grid>
            <Grid item xs="auto">
              <Button variant="contained" color="primary">sign in</Button>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>

      <Box
        sx={{
          position: 'relative',
          height: '80vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          '&::after': {
            position: 'absolute',
            content: '""',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'rgba(0, 0, 0, 0.4)',
            backgroundImage: `linear-gradient(
              to bottom,
              rgba(0, 0, 0, 0.6) 0,
              rgba(0, 0, 0, 0) 60%,
              rgba(0, 0, 0, 0.8) 100%
            )`
          }
        }}>

        <Image
          priority
          src="/__images/backdrop.jpg"
          layout="fill"
          objectFit="cover"
          alt="Backdrop Netflix"
        />

        <Container maxWidth="md" sx={{ position: 'relative', zIndex: '2' }}>
          <Typography
            variant="h2"
            color="common.white"
            component="h1"
            fontWeight="600"
            textAlign="center"
          >
            Unlimited movies, TV shows, and more
          </Typography>
          <Typography
            variant="h5"
            color="common.white"
            component="p"
            textAlign="center"
            gutterBottom
          >
            Watch anywhere. Cancel anytime.
          </Typography>
          <Typography
            variant="h6"
            color="common.white"
            component="p"
            textAlign="center"
            sx={{ my: 3 }}
          >
            Ready to watch? Enter your email to create or restart your membership.
          </Typography>
          <Grid container>
            <Grid item xs>
              <TextField
                variant="filled"
                label="Email address"
                fullWidth
                sx={{ bgcolor: 'common.white' }}
              />
            </Grid>
            <Grid item xs="auto">
              <Button
                variant="contained"
                size="large"
                color="primary"
                sx={{ height: '100%', borderRadius: '2px' }}
              >Get Started</Button>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </BorderedBottom>
  );
};

export default Header;
