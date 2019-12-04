import React from 'react';

import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

import Navbar from './../shared/Navbar';
import Footer from './../shared/Footer';

import useStyles from './Styles';

export default function IndexUtama() {
  const classes = useStyles();

  return (
    <div>
      <Navbar />

      <Container maxWidth="lg">
        <Grid container spacing={5} className={classes.mainGrid}>
          {/* Main content */}
          <Grid item xs={12} md={8}>

          </Grid>
          {/* End main content */}
        </Grid>

      </Container>

      <Footer />
    </div>
  );
}