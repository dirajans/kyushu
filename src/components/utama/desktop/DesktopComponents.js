import React from 'react';
import {
  Grid,
  Typography,
} from '@material-ui/core';
import {styles} from './Styles';

export default function DesktopComponents(){
  return (
    <>
    <div style={styles.sectionBlack} />
    <div style={styles.sectionRed} />
    <div style={styles.sectionYellow} />
    <div style={styles.sectionLast}>
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
    </>
  )
}
