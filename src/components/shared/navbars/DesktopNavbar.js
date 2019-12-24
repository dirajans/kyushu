import React, { useState } from 'react';
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
  const [openMenuPengenalan, setOpenMenuPengenalan] = useState(false);
  const [openMenuPentadbiran, setOpenMenuPentadbiran] = useState(false);

  // pengenalan menu
  const onMouseOverPengenalan = () => {
    setOpenMenuPengenalan(true)
    setOpenMenuPentadbiran(false)
  }
  const onMouseLeavePengenalan = () => {
    setOpenMenuPengenalan(false)
  }

  // pentadbiran menu
  const onMouseOverPentadbiran = () => {
    setOpenMenuPentadbiran(true)
    setOpenMenuPengenalan(false)
  }
  const onMouseLeavePentadbiran = () => {
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
              />
            </Grid>

            <Grid item>
              <NavbarLink
                title={'Pengenalan'}
                url={'#'}
                onMouseOver={onMouseOverPengenalan}
              />
            </Grid>

            <Grid item>
              <NavbarLink
                title={'Pentadbiran'}
                url={ROUTES.PENTADBIRAN}
                onMouseOver={onMouseOverPentadbiran}
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

      {openMenuPengenalan && (
        <div onMouseLeave={onMouseLeavePengenalan}>
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
        <div onMouseLeave={onMouseLeavePentadbiran}>
          <Container>
            <NavbarLink title={'Struktur Pentadbiran Istana'} />
          </Container>
        </div>
      )}

    </div>
  )
}
