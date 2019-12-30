import React from 'react';
import { 
  Typography, 
  Container,
  Grid,
  Divider,
} from '@material-ui/core';
import { peta } from './../../../../images/IndexImages';

export default function DesktopComponent(){
  return (
      <Container>
        <br/><br/><br/><br/>
        <Grid container>
          <Grid item lg={3}>
          </Grid>
          <Grid item lg={6}>
            <Typography variant={'h4'}>
              Kedudukan dan Lokasi Negeri Sembilan
            </Typography>
            <br/>
            <Divider />
            <br/>
          <Typography variant={'h6'}>
            Pengenalan
          </Typography>
          <Typography variant={'body1'} style={{ textAlign: 'justify' }}>
            Description
          </Typography>
          <br/>
          <img src={peta} alt={''} style={{ maxWidth: '100%', height: 'auto' }} />
          <br/>
          </Grid>
          <Grid item lg={3}>
          </Grid>
        </Grid>
        <br/><br/><br/><br/>
      </Container>
  )
}
