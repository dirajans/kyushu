import React from 'react';
import {
  Toolbar,
  Typography,
  Container,
  Divider,
  Grid
} from '@material-ui/core';
import NavbarLink from './NavbarLink';
import * as ROUTES from './../../../routes/Pages';
import { ns } from './../../images/IndexImages';

export default function DesktopNavbar(){
  return (
    <div>
      <Grid container justify={'center'}>
        <Toolbar>
          <img src={ns} width={100} alt={''}/>
          <Typography variant={'h4'} style={{ fontFamily: 'Great Vibes'}}>
          Portal DiRaja Negeri Sembilan
          </Typography>
          <img src={ns} width={100} alt={''}/>
        </Toolbar>
      </Grid>

      <Divider />

      <Container>
        <Toolbar component="nav" variant="dense">
          <Grid container justify={'space-around'}>

            <Grid item>
              <NavbarLink
                title={'Utama'}
                url={ROUTES.UTAMA}
              />
            </Grid>

            <Grid item>
              <NavbarLink
                title={'Pengenalan'}
                url={ROUTES.PENGENALAN}
              />
            </Grid>

            <Grid item>
              <NavbarLink
                title={'Pentadbiran'}
                url={ROUTES.PENTADBIRAN}
              />
            </Grid>

            <Grid item>
              <NavbarLink
                title={'Terkini'}
                url={ROUTES.TERKINI}
              />
            </Grid>

            <Grid item>
              <NavbarLink
                title={'Galeri'}
                url={ROUTES.GALERI}
              />
            </Grid>

            <Grid item>
              <NavbarLink
                title={'Pertanyaan'}
                url={ROUTES.PERTANYAAN}
              />
            </Grid>
          </Grid>
        </Toolbar>
      </Container>
    </div>
  )
}
