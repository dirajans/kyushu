import React from 'react';
import {
  Grid,
  Typography,
  Container,
  Divider,
} from '@material-ui/core';
import { styles } from './Styles';
import { css } from 'aphrodite';

export default function DesktopComponents(){
  return (
    <>
      <Container>
        <br/><br/><br/><br/>
        <Grid container>
          <Grid item lg={4}>
          </Grid>
          <Grid item lg={4}>
            <Typography variant={'h4'}>
            Bendera dan Jata
            </Typography>
            <br/>
            <Divider />
            <br/>
            <Typography variant={'h6'}>
            Bendera Negeri
            </Typography>
            <Typography variant={'body1'}>
            Description
            </Typography>
            <br/>
            <Typography variant={'h6'}>
            Jata Negeri
            </Typography>
            <Typography variant={'body1'}>
            Description
            </Typography>
          </Grid>
          <Grid item lg={4}>
          </Grid>
        </Grid>
        <br/><br/><br/><br/>
      </Container>
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
