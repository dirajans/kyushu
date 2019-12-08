import React, { useState } from 'react';
import {
  Typography,
  Grid
} from '@material-ui/core';

import { peta } from './../../images/IndexImages';
import PageContainer from '../shared/PageContainer';

export default function IndexPengenalan(){
  const [reveal, setReveal] = useState(false);

  const handleMouseEnter = () => {
    setReveal(true)
  }
  const handleMouseLeave = () => {
    setReveal(false)
  }

  const Info = () => {
    return (
      <>
      <Typography variant={'h5'} gutterBottom>
        Negeri Sembilan Darul Khusus
      </Typography>
      <Typography variant={'subtitle1'}>
        Terdiri daripada ... mukim
      </Typography>
      </>
    )
  }
  return (
    <PageContainer>

      <Grid container style={styles.container}>
        <Grid item xs={12} lg={6}>
          <img src={peta} alt={''} style={styles.img} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} />
        </Grid>
        <Grid item xs={12} lg={6} style={{ paddingTop: 50 }}>
          {reveal && (
            <Info />
          )}
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
