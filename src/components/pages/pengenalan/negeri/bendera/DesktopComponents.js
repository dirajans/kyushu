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
    </>
  )
}
