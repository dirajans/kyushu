import React from 'react';
import {
  Container,
  Typography,
  Grid,
} from '@material-ui/core';
import FooterLink from './FooterLink';
import FooterTitle from './FooterTitle';

export default function Footer() {
  return (
    <footer style={styles.container}>
    <Container maxWidth = "lg" >
      <Grid container spacing={2}>
        <Grid item lg={3} xs={12}>
          <FooterTitle title={'Pautan'} />
          <FooterLink title={'Utama'} url={'/utama'} />
          <FooterLink title={'Pengenalan'} url={'/pengenalan'} />
          <FooterLink title={'Galeri'} url={'/galeri'} />
          <FooterLink title={'Pertanyaan'} url={'/pertanyaan'} />
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
        <Grid item lg={3} xs={12}>
          <img src={'/images/ns.png'} width={300} alt={''}/>
        </Grid>
      </Grid>

      <br/>

      <Typography variant={"body2"} align={"center"}>
        <span style={{ color: 'white'}}>
          Hak Cipta Kerajaan Negeri Sembilan Darul Khusus
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
  // center: {
  //   display: 'block',
  //   marginLeft: 'auto',
  //   marginRight: 'auto',
  //   width: '50%',
  // },
}
