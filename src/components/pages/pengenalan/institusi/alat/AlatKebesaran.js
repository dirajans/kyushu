import React from 'react';
import PageContainer from '../../../../shared/containers/PageContainer';
import { 
  Typography, 
  Container,
  Grid,
  Divider,
} from '@material-ui/core';

export default function AlatKebesaran(){
  return (
    <PageContainer>
      <Container>
        <br/><br/><br/><br/>
        <Grid container>
          <Grid item lg={3}>
          </Grid>
          <Grid item lg={6}>
            <Typography variant={'h4'}>
              Alat Kebesaran
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
          </Grid>
          <Grid item lg={3}>
          </Grid>
        </Grid>
        <br/><br/><br/><br/>
      </Container>
    </PageContainer>
  )
}