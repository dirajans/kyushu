import React from 'react';
import {
  Typography,
  Grid
} from '@material-ui/core';

import { peta } from './../../images/IndexImages';
import PageContainer from '../shared/PageContainer';

export default function IndexPengenalan(){
    return (
      <PageContainer>

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
        
      </PageContainer>
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
