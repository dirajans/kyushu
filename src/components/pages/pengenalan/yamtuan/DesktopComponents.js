import React from 'react';
import {
  Grid,
} from '@material-ui/core';
import { 
  slideInRight,
  slideInDown,
  slideInUp,
  slideInLeft,
} from 'react-animations';
import { StyleSheet, css } from 'aphrodite';
import { ns } from './../../../images/IndexImages';

export default function DesktopComponents(){
  return (
    <Grid container style={{ height: 1000 }}>
      <Grid item lg={1}>
        <div className={css(styles.slideInLeft)}>
          <img src={ns} alt={''}/>
        </div>
      </Grid>
      <Grid item lg={1}>
        <div className={css(styles.slideInUp)}>
          <img src={ns} alt={''} style={{ marginLeft: -50 }}/>
        </div>
      </Grid>
      <Grid item lg={1}>
        <div className={css(styles.slideInDown)}>
          <img src={ns} alt={''} style={{ marginLeft: -100 }} />
        </div>
      </Grid>
      <Grid item lg={1}>
        <div className={css(styles.slideInRight)}>
          <img src={ns} alt={''} style={{ marginLeft: -150 }} />
        </div>
      </Grid>
    </Grid>
  )
}

const styles = StyleSheet.create({
  slideInRight: {
    marginTop: 200,
    animationName: slideInRight,
    animationDuration: '2s',
  },
  slideInLeft: {
    marginTop: 200,
    animationName: slideInLeft,
    animationDuration: '2s',
  },
  slideInUp: {
    marginTop: 200,
    animationName: slideInUp,
    animationDuration: '2s',
  },
  slideInDown: {
    marginTop: 200,
    animationName: slideInDown,
    animationDuration: '2s',
  }
})
