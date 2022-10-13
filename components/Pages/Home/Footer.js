import React from 'react';
import { Box, Container, Grid, Typography, Stack, Select, MenuItem } from '@mui/material';
import { grey } from '@mui/material/colors';

const TypographyCustom = ({ text }) => {
  return (
    <Typography
      variant="caption"
      component="a"
      href="#"
      sx={{ '&:hover': { textDecoration: 'underline' } }}
    >
      {text}
    </Typography>
  );
};

const Footer = () => {
  return (
    <Box>
      <Container maxWidth="md" sx={{ py: 6, backgroundColor: 'common.black', color: grey[700] }}>
        <Stack spacing={4}>

          <Typography>Questions? Call 007-803-321-2130</Typography>

          <Box>
            <Grid container spacing={4}>
              <Grid item xs={6} md={3}>
                <Stack spacing={2}>
                  <TypographyCustom text="FAQ" />
                  <TypographyCustom text="Investor Relations" />
                  <TypographyCustom text="Ways to Watch" />
                  <TypographyCustom text="Corporate Information" />
                  <TypographyCustom text="Only on Netflix" />
                </Stack>
              </Grid>
              <Grid item xs={6} md={3}>
                <Stack spacing={2}>
                  <TypographyCustom text="Help Center" />
                  <TypographyCustom text="Jobs" />
                  <TypographyCustom text="Terms of Use" />
                  <TypographyCustom text="Contact Us" />
                </Stack>
              </Grid>
              <Grid item xs={6} md={3}>
                <Stack spacing={2}>
                  <TypographyCustom text="Account" />
                  <TypographyCustom text="Redeem Gift Cards" />
                  <TypographyCustom text="Privacy" />
                  <TypographyCustom text="Speed Test" />
                </Stack>
              </Grid>
              <Grid item xs={6} md={3}>
                <Stack spacing={2}>
                  <TypographyCustom text="Media Center" />
                  <TypographyCustom text="Buy Gift Cards" />
                  <TypographyCustom text="Cookie Preferences" />
                  <TypographyCustom text="Legal Notices" />
                </Stack>
              </Grid>
            </Grid>
          </Box>

          <Box>
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
          </Box>

          <TypographyCustom text="Netflix Indonesia" />
        </Stack>

      </Container>
    </Box>
  );
};

export default Footer;
