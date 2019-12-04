import React from 'react';

import Navbar from './../shared/Navbar';
import Footer from './../shared/Footer';
import MobileNavbar from './../shared/MobileNavbar';
import {
  Hidden,
  Typography,
  Grid
} from '@material-ui/core';

const peta = '/images/peta.png';

export default function IndexPengenalan(){
    return (
      <>
        <Hidden smUp>
          <MobileNavbar />
        </Hidden>
        <Hidden xsDown>
          <Navbar />
        </Hidden>

        <Grid container style={styles.container}>
          <Grid item xs={12} lg={6}>
            <img src={peta} alt={''} style={styles.img} />
          </Grid>
          <Grid item xs={12} lg={6} style={{ paddingTop: 50 }}>
            <Typography variant={'h5'} gutterBottom>
              Negeri Sembilan Darul Khusus
            </Typography>

            <Typography variant={'subtitle1'}>
              Terdiri daripada ... mukim
            </Typography>
          </Grid>
        </Grid>

        <Footer />
      </>
    )
}

const styles = {
  container: {
    paddingTop: 50,
    paddingBottom: 50,
    paddingLeft: 20,
    paddingRight: 20,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
}
