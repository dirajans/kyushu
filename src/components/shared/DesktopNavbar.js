import React from 'react';
import {
  Toolbar,
  Typography,
  Container,
  Divider,
  Grid
} from '@material-ui/core';
import NavbarLink from './NavbarLink';
import pages from './../Pages';

import {ns} from './../../images/IndexImages';

export default function DesktopNavbar(){
  return (
    <div>
      <Grid container justify={'center'}>
        <Toolbar>
          <img src={ns} width={100} alt={''}/>
          <Typography variant={'h5'}>
          Portal DiRaja Negeri Sembilan
          </Typography>
          <img src={ns} width={100} alt={''}/>
        </Toolbar>
      </Grid>

      <Divider />

      <Container>
        <Toolbar component="nav" variant="dense">
          <Grid container justify={'space-around'}>
            {pages.map(page => (
              <Grid item key={page.name+'navbar'}>
                <NavbarLink
                  title={page.name}
                  url={page.href}
                />
              </Grid>
            ))}
          </Grid>
        </Toolbar>
      </Container>
    </div>
  )
}
