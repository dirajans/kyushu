import React from 'react';
import {
  Container,
  Typography,
  Grid,
} from '@material-ui/core';
import FooterLink from './FooterLink';
import FooterTitle from './FooterTitle';
import * as ROUTES from './../../../routes/Pages';

const ns = require('./../../images/ns.png')

export default function Footer() {
  return (
    <footer style={styles.container}>
    <Container maxWidth = "lg" >
      <Grid container spacing={2}>
        <Grid item lg={3} xs={12}>
          <FooterTitle title={'Pautan'} />

          <FooterLink title={'Utama'} url={ROUTES.UTAMA} />
          <FooterLink title={'Pengenalan'} url={ROUTES.SEJARAH} />
          <FooterLink title={'Pentadbiran'} url={ROUTES.PENTADBIRAN} />
          <FooterLink title={'Terkini'} url={ROUTES.TERKINI} />
          <FooterLink title={'Galeri'} url={ROUTES.GALERI} />
          <FooterLink title={'Pertanyaan'} url={ROUTES.PERTANYAAN} />

        </Grid>
        <Grid item lg={3} xs={12}>
          <FooterTitle title={'Portal Berkenaan'} />
          <FooterLink title={'Portal Daerah'} url={'#'} />
          <FooterLink title={'Portal Info'} url={'#'} />
        </Grid>
        <Grid item lg={3} xs={12}>
          <FooterTitle title={'Media Sosial'} />
          <FooterLink title={'Facebook'} url={'http://www.facebook.com'} newTab/>
          <FooterLink title={'Twitter'} url={'http://www.twitter.com'}  newTab/>
          <FooterLink title={'Instagram'} url={'http://www.instagram.com'}  newTab/>
        </Grid>
        <Grid item lg={3} xs={12} align={'center'}>
          <img src={ns} width={300} alt={''}/>
        </Grid>
      </Grid>

      <br/>

      <Typography variant={"body2"} align={"center"}>
        <span style={{ color: 'white'}}>
          Hakcipta Kerajaan Negeri Sembilan Darul Khusus
          {' © '}
          {new Date().getFullYear()}
        </span>
      </Typography>

    </Container>
    </footer>
  )
}

const styles = {
  container: {
    paddingTop: 30,
    paddingBottom: 30,
    backgroundColor: 'black',
  },
}
