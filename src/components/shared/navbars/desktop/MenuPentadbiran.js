import React from 'react';
import {
  Container,
  Divider,
  Grid,
} from '@material-ui/core';
import * as ROUTES from './../../../../routes/Pages';
import DesktopLink from './DesktopLink';

export default function MenuPentadbiran({ onMouseLeave, onClick }){
    return (
        <div onMouseLeave={onMouseLeave}>
        <Divider />
          <Container>
            <Grid container spacing={2}>
                <Grid item lg={3}>
                    <DesktopLink
                      header
                      title={'Struktur Pentadbiran Istana'}
                      url={ROUTES.PENTADBIRAN}
                      onClick={onClick}
                    />
                    <DesktopLink
                      title={'Pengelolaan Istana'}
                      url={ROUTES.PENTADBIRAN}
                      onClick={onClick}
                    />
                    <DesktopLink
                      title={'Juruiring'}
                      url={ROUTES.PENTADBIRAN}
                      onClick={onClick}
                    />
                    <DesktopLink
                      title={'Khidmat Pengurusan'}
                      url={ROUTES.PENTADBIRAN}
                      onClick={onClick}
                    />
                    <DesktopLink
                      title={'Protokol'}
                      url={ROUTES.PENTADBIRAN}
                      onClick={onClick}
                    />
                </Grid>
                <Grid item lg={3}>

                </Grid>
                <Grid item lg={3}>

                </Grid>
                <Grid item lg={3}>

                </Grid>
            </Grid>
          </Container>
          <br/>
        </div>
    )
}
