import React from 'react';
import {
  Container,
  Typography,
  Grid,
} from '@material-ui/core';
import FooterLink from './FooterLink';
import FooterTitle from './FooterTitle';

function Copyright() {
  return (
    <Typography
    variant = "body2"
    color = "textSecondary"
    align = "center"
    > {'Copyright © '}
    Your Website
    {' '} {new Date().getFullYear()}
    </Typography>
  );
}

export default function Footer() {
  return (
    <footer style={styles.container}>
    <Container maxWidth = "lg" >
      <Grid container spacing={2}>
        <Grid item lg={3}>
          <FooterTitle title={'Pautan'} />
          <FooterLink title={'Utama'} url={'/utama'} />
          <FooterLink title={'Pengenalan'} url={'/pengenalan'} />
          <FooterLink title={'Galeri'} url={'/galeri'} />
          <FooterLink title={'Pertanyaan'} url={'/pertanyaan'} />
        </Grid>
        <Grid item lg={3}>
          <FooterTitle title={'Pautan'} />
          <FooterLink title={'Utama'} url={'/utama'} />
          <FooterLink title={'Pengenalan'} url={'/utama'} />
          <FooterLink title={'Galeri'} url={'/utama'} />
          <FooterLink title={'Pertanyaan'} url={'/utama'} />
        </Grid>
        <Grid item lg={3}>
          <FooterTitle title={'Pautan'} />
          <FooterLink title={'Utama'} url={'/utama'} />
          <FooterLink title={'Pengenalan'} url={'/utama'} />
          <FooterLink title={'Galeri'} url={'/utama'} />
          <FooterLink title={'Pertanyaan'} url={'/utama'} />
        </Grid>
        <Grid item lg={3}>
          <img src={'/images/ns.png'} width={300} />
        </Grid>
      </Grid>

      <Copyright />

    </Container>
    </footer>
  )
}

const styles = {
  container: {
    paddingTop: 30,
    paddingBottom: 30,
    backgroundColor: 'black',
    color: 'white'
  }
}
