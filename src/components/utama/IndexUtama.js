import React from 'react';
import {
  Grid,
  Container,
  Typography,
} from '@material-ui/core';

import { bg, backdrop } from './../../images/IndexImages';
import PageContainer from '../shared/PageContainer';

export default function IndexUtama() {

  return (
    <PageContainer>

      <div style={styles.container}>
        <div style={styles.content}>
        <Container maxWidth="lg">

        </Container>
        </div>
      </div>
      <div style={styles.sectionIntro}>

      </div>
      <div style={styles.sectionOne} />
      <div style={styles.sectionTwo} />
      <div style={styles.sectionThree}>

      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justify="center"
        style={{ minHeight: '100%' }}
      >
        <Grid item lg={12}>
          <Typography variant={'h1'}>
            Daulat Tuanku
          </Typography>
        </Grid>
      </Grid>

      </div>
    </PageContainer>
  );
}

const styles = {
  container: {
    backgroundImage: `url(${bg})`,
    height: '90vh',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover'
  },
  content: {
    height: '100%',
    width: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    color: 'white',
  },
  sectionIntro: {
    height: 600,
    backgroundImage: `url(${backdrop})`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundColor: 'white',
    backgroundAttachment: 'fixed',
  },
  sectionOne: {
    height: 600,
    backgroundImage: `url(${backdrop})`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundColor: '#cf0820',
    backgroundAttachment: 'fixed',
  },
  sectionTwo: {
    height: 600,
    backgroundImage: `url(${backdrop})`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundColor: 'black',
    backgroundAttachment: 'fixed',
  },
  sectionThree: {
    height: 600,
    backgroundImage: `url(${backdrop})`,
    backgroundPosition: 'left',
    backgroundRepeat: 'no-repeat',
    backgroundColor: '#fcd20e',
  },
}
