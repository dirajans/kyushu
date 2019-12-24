import React, { useState } from 'react';
import {
  Toolbar,
  Typography,
  Container,
  Divider,
  Grid,
} from '@material-ui/core';
import NavbarLink from './NavbarLink';
import * as ROUTES from './../../../routes/Pages';
import { ns } from './../../images/IndexImages';

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
                onMouseOver={closeMenu}
                onMouseLeave={closeMenu}
              />
            </Grid>

            <Grid item>
              <NavbarLink
                title={'Pengenalan'}
                url={ROUTES.SEJARAH}
                onMouseOver={onMouseOverPengenalan}
                onMouseLeave={closeMenu}
              />
            </Grid>

            <Grid item>
              <NavbarLink
                title={'Pentadbiran'}
                url={ROUTES.PENTADBIRAN}
                onMouseOver={onMouseOverPentadbiran}
                onMouseLeave={closeMenu}
              />
            </Grid>

            <Grid item>
              <NavbarLink
                title={'Terkini'}
                url={ROUTES.TERKINI}
                onMouseOver={closeMenu}
                onMouseLeave={closeMenu}
              />
            </Grid>

            <Grid item>
              <NavbarLink
                title={'Galeri'}
                url={ROUTES.GALERI}
                onMouseOver={closeMenu}
                onMouseLeave={closeMenu}
              />
            </Grid>

            <Grid item>
              <NavbarLink
                title={'Pertanyaan'}
                url={ROUTES.PERTANYAAN}
                onMouseOver={closeMenu}
                onMouseLeave={closeMenu}
              />
            </Grid>
          </Grid>
        </Toolbar>
      </Container>

      {openMenuPengenalan && (
        <div onMouseLeave={closeMenu}>
        <Divider />
          <Container>
            <NavbarLink
              title={'Sejarah Penubuhan'}
              url={ROUTES.SEJARAH}
            />
            <NavbarLink
              title={'Institusi Diraja & Undang'}
              url={ROUTES.INSTITUSI}
            />
            <NavbarLink
              title={'Adat Perpatih'}
              url={ROUTES.ADAT}
            />
            <NavbarLink
              title={'Bendera & Jata'}
              url={ROUTES.BENDERA}
            />
            <NavbarLink
             title={'Lagu Kebesaran'}
             url={ROUTES.LAGU}
            />
            <NavbarLink
             title={'YAM'}
             url={ROUTES.YAM}
            />
          </Container>
        </div>
      )}

      {openMenuPentadbiran && (
        <div onMouseLeave={closeMenu}>
        <Divider />
          <Container>
            <NavbarLink
              title={'Struktur Pentadbiran Istana'}
              url={ROUTES.PENTADBIRAN}
            />
          </Container>
        </div>
      )}

    </div>
  )
}
