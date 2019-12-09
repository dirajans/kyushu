import React from 'react';
import {
  Container,
  Typography,
  Grid,
} from '@material-ui/core';
import FooterLink from './FooterLink';
import FooterTitle from './FooterTitle';

import pages from './../Pages';

const ns = require('./../../images/ns.png')

export default function Footer() {
  return (
    <footer style={styles.container}>
    <Container maxWidth = "lg" >
      <Grid container spacing={2}>
        <Grid item lg={3} xs={12}>
          <FooterTitle title={'Pautan'} />
          {pages.map( (page) => (
            <FooterLink key={page.name+'footer'} title={page.name} url={page.href} />
          ))}
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
