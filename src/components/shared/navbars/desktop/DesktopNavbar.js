import React, { useState } from 'react';
import {
  Toolbar,
  Typography,
  Container,
  Divider,
  Grid,
} from '@material-ui/core';
import DesktopLink from './DesktopLink';
import MenuPengenalan from './MenuPengenalan';
import MenuPentadbiran from './MenuPentadbiran';

import * as ROUTES from './../../../../routes/Pages';
import { ns } from './../../../images/IndexImages';

export default function DesktopNavbar(){
  const [openMenuPengenalan, setOpenMenuPengenalan] = useState(false);
  const [openMenuPentadbiran, setOpenMenuPentadbiran] = useState(false);

  // pengenalan menu
  const onMouseOverPengenalan = () => {
    setOpenMenuPengenalan(true)
    setOpenMenuPentadbiran(false)
  }

  // pentadbiran menu
  const onMouseOverPentadbiran = () => {
    setOpenMenuPentadbiran(true)
    setOpenMenuPengenalan(false)
  }
  const closeMenu = () => {
    setOpenMenuPengenalan(false)
    setOpenMenuPentadbiran(false)
  }

  return (
    <div>
      <Grid container justify={'center'} onMouseOver={closeMenu}>
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
              <DesktopLink
                title={'Utama'}
                url={ROUTES.UTAMA}
                onMouseOver={closeMenu}
                onMouseLeave={closeMenu}
              />
            </Grid>

            <Grid item>
              <DesktopLink
                title={'Pengenalan'}
                url={'#'}
                onMouseOver={onMouseOverPengenalan}
                onMouseLeave={closeMenu}
              />
            </Grid>

            <Grid item>
              <DesktopLink
                title={'Pentadbiran'}
                url={'#'}
                onMouseOver={onMouseOverPentadbiran}
                onMouseLeave={closeMenu}
              />
            </Grid>

            <Grid item>
              <DesktopLink
                title={'Terkini'}
                url={ROUTES.TERKINI}
                onMouseOver={closeMenu}
                onMouseLeave={closeMenu}
              />
            </Grid>

            <Grid item>
              <DesktopLink
                title={'Galeri'}
                url={ROUTES.GALERI}
                onMouseOver={closeMenu}
                onMouseLeave={closeMenu}
              />
            </Grid>

            <Grid item>
              <DesktopLink
                title={'Pertanyaan'}
                url={ROUTES.PERTANYAAN}
                onMouseOver={closeMenu}
                onMouseLeave={closeMenu}
              />
            </Grid>

            <Grid item>
              <DesktopLink
                title={'Admin Sign in'}
                url={ROUTES.SIGNIN}
                onMouseOver={closeMenu}
                onMouseLeave={closeMenu}
              />
            </Grid>

          </Grid>
        </Toolbar>
      </Container>

      {openMenuPengenalan && (
        <MenuPengenalan onMouseLeave={closeMenu} />
      )}

      {openMenuPentadbiran && (
        <MenuPentadbiran onMouseLeave={closeMenu} />
      )}

    </div>
  )
}
