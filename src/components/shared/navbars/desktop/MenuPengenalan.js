import React from 'react';
import {
  Container,
  Divider,
  Grid,
} from '@material-ui/core';
import * as ROUTES from './../../../../routes/Pages';
import DesktopLink from './DesktopLink';
import { backdrop } from './../../../images/IndexImages';

export default function MenuPengenalan({ onMouseLeave, onClick }){
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
                  url={ROUTES.PENUBUHAN}
                  onClick={onClick}
                />
                <DesktopLink
                  title={'Sejarah Penubuhan'}
                  url={ROUTES.PENUBUHAN}
                  onClick={onClick}
                />
                <DesktopLink
                  title={'Peristiwa Penting'}
                  url={ROUTES.PERISTIWA}
                  onClick={onClick}
                />
                <DesktopLink
                  title={'Undang - Undang Tubuh'}
                  url={ROUTES.UNDANGTUBUH}
                  onClick={onClick}
                />
              </Grid>
              <Grid item lg={3}>
                <DesktopLink
                  header
                  title={'Institusi Diraja, Undang, & Adat'}
                  url={ROUTES.INSTITUSI}
                  onClick={onClick}
                />
                <DesktopLink
                  title={'Institusi Diraja'}
                  url={ROUTES.DIRAJA}
                  onClick={onClick}
                />
                <DesktopLink
                  title={'Adat Perpatih'}
                  url={ROUTES.ADAT}
                  onClick={onClick}
                />
                <DesktopLink
                  title={"Luak Berundang & Lembaga"}
                  url={ROUTES.UNDANGLEMBAGA}
                  onClick={onClick}
                />
                <DesktopLink
                  title={"Pembesar - Pembesar"}
                  url={ROUTES.PEMBESAR}
                  onClick={onClick}
                />
                <DesktopLink
                  title={'Alat Kebesaran'}
                  url={ROUTES.ALATKEBESARAN}
                  onClick={onClick}
                />
                <DesktopLink
                  title={'Istana'}
                  url={ROUTES.ISTANA}
                  onClick={onClick}
                />
              </Grid>
              <Grid item lg={3}>
                <DesktopLink
                  header
                  title={'Info Negeri'}
                  url={ROUTES.NEGERI}
                  onClick={onClick}
                />
                <DesktopLink
                  title={'Kedudukan & Lokasi'}
                  url={ROUTES.LOKASI}
                  onClick={onClick}
                />
                <DesktopLink
                  title={'Bendera & Jata'}
                  url={ROUTES.BENDERA}
                  onClick={onClick}
                />
                <DesktopLink
                  title={'Lagu Kebesaran'}
                  url={ROUTES.LAGU}
                  onClick={onClick}
                />

              </Grid>
              <Grid item lg={3}>
                <DesktopLink
                  header
                  title={'Yamtuan Besar'}
                  url={ROUTES.YAMTUAN}
                  onClick={onClick}
                />
                <DesktopLink
                  title={'Raja Melewar'}
                  url={ROUTES.RAJAMELEWAR}
                  onClick={onClick}
                />
                <DesktopLink
                  title={'Raja Hitam'}
                  url={ROUTES.RAJAHITAM}
                  onClick={onClick}
                />
                <DesktopLink
                  title={'Raja Lenggang'}
                  url={ROUTES.RAJALENGGANG}
                  onClick={onClick}
                />
                <DesktopLink
                  title={'Yamtuan Radin'}
                  url={ROUTES.RADIN}
                  onClick={onClick}
                />
                <DesktopLink
                  title={'Yamtuan Imam'}
                  url={ROUTES.IMAM}
                  onClick={onClick}
                />
                <DesktopLink
                  title={'Yamtuan Antah'}
                  url={ROUTES.ANTAH}
                  onClick={onClick}
                />
                <DesktopLink
                  title={'Tuanku Muhammad'}
                  url={ROUTES.MUHAMMAD}
                  onClick={onClick}
                />
                <DesktopLink
                  title={'Tuanku Abdul Rahman'}
                  url={ROUTES.ABDULRAHMAN}
                  onClick={onClick}
                />
                <DesktopLink
                  title={'Tuanku Munawir'}
                  url={ROUTES.MUNAWIR}
                  onClick={onClick}
                />
                <DesktopLink
                  title={'Tuanku Jaafar'}
                  url={ROUTES.JAAFAR}
                  onClick={onClick}
                />
                <DesktopLink
                  title={'Tuanku Muhriz'}
                  url={ROUTES.MUHRIZ}
                  onClick={onClick}
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
