import React from 'react';

import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

import Navbar from './Navbar';
import Footer from './Footer';
import MainFeaturePost from './MainFeaturePost';
import SubFeaturePost from './SubFeaturePost';

import useStyles from './Styles';

export default function Utama() {
  const classes = useStyles();

  return (
    <div>
      <Navbar />

      <MainFeaturePost />

      <Container maxWidth="lg">
        <SubFeaturePost />

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