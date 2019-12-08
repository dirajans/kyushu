import React from 'react';
import {
  Grid,
  Container,
  Typography,
} from '@material-ui/core';

import PageContainer from '../shared/PageContainer';

import {styles} from './Styles';

export default function IndexUtama() {

  return (
    <PageContainer>

      <div style={styles.container}>
        <div style={styles.content}>
        <Container maxWidth="lg">

        </Container>
        </div>
      </div>
      <div style={styles.sectionIntro} />
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
          <Grid item lg={12} align={'center'}>
            <Typography variant={'h1'}>
              Daulat Tuanku
            </Typography>
          </Grid>
        </Grid>
      </div>
    </PageContainer>
  );
}
