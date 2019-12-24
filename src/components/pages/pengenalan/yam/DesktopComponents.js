import React from 'react';
import {
  Grid,
  Container
} from '@material-ui/core';
import { slideInRight } from 'react-animations';
import { StyleSheet, css } from 'aphrodite';
import { ns } from './../../../images/IndexImages';

export default function DesktopComponents(){
  return (
    <Grid container>
      <Grid item lg={1}>
        <div className={css(styles.fadeIn)}>
          <img src={ns} alt={''}/>
        </div>
      </Grid>
      <Grid item lg={1}>
        <div className={css(styles.fadeIn)}>
          <img src={ns} alt={''} style={{ marginLeft: -50 }}/>
        </div>
      </Grid>
      <Grid item lg={1}>
        <div className={css(styles.fadeIn)}>
          <img src={ns} alt={''} style={{ marginLeft: -100 }} />
        </div>
      </Grid>
      <Grid item lg={1}>
        <div className={css(styles.fadeIn)}>
          <img src={ns} alt={''} style={{ marginLeft: -150 }} />
        </div>
      </Grid>
    </Grid>
  )
}

const styles = StyleSheet.create({
  fadeIn: {
    animationName: slideInRight,
    animationDuration: '2s',
  }
})
