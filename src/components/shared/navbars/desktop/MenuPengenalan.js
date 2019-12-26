import React from 'react';
import {
  Container,
  Divider,
  Grid,
} from '@material-ui/core';
import * as ROUTES from './../../../../routes/Pages';
import DesktopLink from './DesktopLink';
import DesktopTitle from './DesktopTitle';

export default function MenuPengenalan({ onMouseLeave }){
    return (
        <div onMouseLeave={onMouseLeave}>
        <Divider />
        <br/>
          <Container>
            <Grid container spacing={2}>
              <Grid item lg={3}>
                <DesktopTitle title={'Sejarah'} />
                <DesktopLink
                  title={'Sejarah Penubuhan'}
                  url={ROUTES.SEJARAH}
                />
                <DesktopLink
                  title={'Peristiwa Penting'}
                  url={'#'}
                />
                <DesktopLink
                  title={'Undang - Undang Tubuh'}
                  url={'#'}
                />
              </Grid>
              <Grid item lg={3}>
                <DesktopTitle title={'Institusi Diraja, Undang, & Adat'} />
                <DesktopLink
                  title={'Institusi Diraja'}
                  url={ROUTES.INSTITUSI}
                />
                <DesktopLink
                  title={'Adat Perpatih'}
                  url={ROUTES.ADAT}
                />
                <DesktopLink
                  title={"Dato' Undang & Lembaga"}
                  url={'#'}
                />
                <DesktopLink
                  title={'Alat Kebesaran'}
                  url={'#'}
                />
                <DesktopLink
                  title={'Istana'}
                  url={ROUTES.ISTANA}
                />
              </Grid>
              <Grid item lg={3}>
                <DesktopTitle title={'Info Negeri'} />
                <DesktopLink
                  title={'Kedudukan & Lokasi'}
                  url={ROUTES.LOKASI}
                />
                <DesktopLink
                  title={'Bendera & Jata'}
                  url={ROUTES.BENDERA}
                />
                <DesktopLink
                  title={'Lagu Kebesaran'}
                  url={ROUTES.LAGU}
                />
                
              </Grid>
              <Grid item lg={3}>
                <DesktopTitle title={'Yamtuan Besar'} />
                <DesktopLink
                  title={'Raja Melewar'}
                  url={ROUTES.RAJAMELEWAR}
                />
                <DesktopLink
                  title={'Raja Hitam'}
                  url={ROUTES.RAJAHITAM}
                />
                <DesktopLink
                  title={'Raja Lenggang'}
                  url={ROUTES.RAJALENGGANG}
                />
                <DesktopLink
                  title={'Yamtuan Radin'}
                  url={ROUTES.RADIN}
                />
                <DesktopLink
                  title={'Yamtuan Imam'}
                  url={ROUTES.IMAM}
                />
                <DesktopLink
                  title={'Yamtuan Antah'}
                  url={ROUTES.ANTAH}
                />
                <DesktopLink
                  title={'Tuanku Muhammad'}
                  url={ROUTES.MUHAMMAD}
                />
                <DesktopLink
                  title={'Tuanku Abdul Rahman'}
                  url={ROUTES.ABDULRAHMAN}
                />
                <DesktopLink
                  title={'Tuanku Munawir'}
                  url={ROUTES.MUNAWIR}
                />
                <DesktopLink
                  title={'Tuanku Jaafar'}
                  url={ROUTES.JAAFAR}
                />
                <DesktopLink
                  title={'Tuanku Muhriz'}
                  url={ROUTES.MUHRIZ}
                />
              </Grid>
            </Grid>
          </Container>
          <br/>
        </div>
    )
}