import React from 'react';
import {
  Container,
  Divider,
  Grid,
} from '@material-ui/core';
import * as ROUTES from './../../../../routes/Pages';
import DesktopLink from './DesktopLink';
import { backdrop } from './../../../images/IndexImages';

export default function MenuPengenalan({ onMouseLeave }){
    return (
        <div onMouseLeave={onMouseLeave}>
        <Divider />
        <br/>
          <Container>
            <Grid container spacing={2}>
              <img src={backdrop} alt={''} style={styles.backdrop} />
              <Grid item lg={3}>
                <DesktopLink
                  header
                  title={'Sejarah'}
                  url={ROUTES.SEJARAH}
                />
                <DesktopLink
                  title={'Sejarah Penubuhan'}
                  url={ROUTES.PENUBUHAN}
                />
                <DesktopLink
                  title={'Peristiwa Penting'}
                  url={ROUTES.PERISTIWA}
                />
                <DesktopLink
                  title={'Undang - Undang Tubuh'}
                  url={ROUTES.UNDANGTUBUH}
                />
              </Grid>
              <Grid item lg={3}>
                <DesktopLink
                  header
                  title={'Institusi Diraja, Undang, & Adat'}
                  url={ROUTES.INSTITUSI}
                />
                <DesktopLink
                  title={'Institusi Diraja'}
                  url={ROUTES.DIRAJA}
                />
                <DesktopLink
                  title={'Adat Perpatih'}
                  url={ROUTES.ADAT}
                />
                <DesktopLink
                  title={"Dato' Undang & Lembaga"}
                  url={ROUTES.UNDANGLEMBAGA}
                />
                <DesktopLink
                  title={"Pembesar - Pembesar"}
                  url={ROUTES.PEMBESAR}
                />
                <DesktopLink
                  title={'Alat Kebesaran'}
                  url={ROUTES.ALATKEBESARAN}
                />
                <DesktopLink
                  title={'Istana'}
                  url={ROUTES.ISTANA}
                />
              </Grid>
              <Grid item lg={3}>
                <DesktopLink
                  header
                  title={'Info Negeri'}
                  url={ROUTES.NEGERI}
                />
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
                <DesktopLink
                  header
                  title={'Yamtuan Besar'}
                  url={ROUTES.YAMTUAN}
                />
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

const styles = {
  backdrop: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 'auto',
    marginBottom: 'auto',
  }
}
