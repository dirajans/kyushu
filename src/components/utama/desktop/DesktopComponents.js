import React from 'react';
import {
  Grid,
  Typography,
} from '@material-ui/core';
import { styles } from './Styles';
import { css } from 'aphrodite';

export default function DesktopComponents(){
  return (
    <>
    <div className={css(styles.sectionBlack)} />
    <div className={css(styles.sectionRed)} />
    <div className={css(styles.sectionYellow)} />
    <div className={css(styles.sectionLast)}>
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
