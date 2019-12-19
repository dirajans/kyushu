import React, { useState } from 'react';
import {
  Grid,
  Typography,
} from '@material-ui/core';
import { styles } from './Styles';
import { css } from 'aphrodite';
import { peta } from './../../../images/IndexImages';

export default function DesktopComponents(){
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
    <>
      <div className={css(styles.sectionDefault)}>

      </div>
      <div className={css(styles.sectionDefault)}>
        <Grid container>
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
      </div>
      <div className={css(styles.sectionBlack)}>
        <Grid container>
          <Grid item lg={6} />
          <Grid item lg={6}>
            <Typography variant={'h4'} style={{ paddingTop: 400, paddingRight: 200, textAlign: 'center' }}>
              <span style={{ color: 'white' }}>
                Warna hitam melambangkan<br/><br/>
                DATO'-DATO' UNDANG<br/>
                dan<br/>
                DATO'-DATO' LEMBAGA
              </span>
            </Typography>
          </Grid>
        </Grid>
      </div>
      <div className={css(styles.sectionRed)}>
        <Grid container>
          <Grid item lg={6}>
            <Typography variant={'h4'} style={{ paddingTop: 400, paddingLeft: 200, textAlign: 'center' }}>
              <span style={{ color: 'white' }}>
                Warna merah melambangkan<br/><br/>
                RAKYAT
              </span>
            </Typography>
          </Grid>
          <Grid item lg={6} />
        </Grid>
      </div>
      <div className={css(styles.sectionYellow)}>
        <Grid container>
          <Grid item lg={6} />
          <Grid item lg={6}>
            <Typography variant={'h4'} style={{ paddingTop: 400, paddingRight: 200, textAlign: 'center' }}>
              <span style={{ color: 'black' }}>
                Warna kuning melambangkan<br/><br/>
                RAJA
              </span>
            </Typography>
          </Grid>
        </Grid>
      </div>
      <div className={css(styles.sectionDefault)}>

      </div>
    </>
  )
}
