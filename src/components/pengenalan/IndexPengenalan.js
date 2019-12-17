import React, { useState } from 'react';
import {
  Typography,
  Grid,
  Hidden
} from '@material-ui/core';

import { peta } from './../../images/IndexImages';
import { styles } from './Styles';
import { css }from 'aphrodite';
import PageContainer from '../shared/PageContainer';

import DesktopComponents from './desktop/DesktopComponents';
import MobileComponents from './mobile/MobileComponents';

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

      <Grid container className={css(styles.container)}>
        <Grid item xs={12} lg={6}>
          <img
            src={peta}
            alt={''}
            className={css(styles.img)}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          />
        </Grid>
        <Grid item xs={12} lg={6} style={{ paddingTop: 50 }}>
          {reveal && (
            <Info />
          )}
        </Grid>
      </Grid>

      <Hidden smUp>
        <MobileComponents />
      </Hidden>
      <Hidden xsDown>
        <DesktopComponents />
      </Hidden>

    </PageContainer>
  )
}
