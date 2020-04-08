import React from 'react';
import {
  Container,
  Typography,
  Divider,
  Card,
  CardContent,
  Grid,
} from '@material-ui/core';
import PageContainer from '../../../../shared/containers/PageContainer';

export default function DesktopComponents(){
  return (
    <PageContainer>
    <Container>
      <br/><br/><br/><br/>
      <Grid container>
        <Grid item lg={3} />
        <Grid item lg={6}>
        <Typography variant={'h6'} style={{ color: 'grey'}}>
          Pengenalan
        </Typography>
      <Typography variant={'h4'}>
      Lagu Kebesaran
      </Typography>
      <br/>
      <Divider />
      <br/>
      <Typography variant={'h5'}>
      Berkatlah Yang Dipertuan Besar Negeri Sembilan
      </Typography>
      <br/>
      <Typography variant={'body1'} style={{ textAlign: 'justify' }}>
      Berkatlah Yang Dipertuan Besar Negeri Sembilan adalah lagu kebesaran
      Negeri Sembilan. Lagunya telah digubah oleh
      Andrew Caldecott (1884-1951) dan diperkenankan oleh Yang Di-Pertuan Negeri
      Sembilan pada masa itu, Tuanku Muhammad pada
      tahun 1911.
      <br/><br/>
      Lagu negeri ini mendapat gubahan semula yang lebih diperbaharui oleh Tunku
      Zain Al-'Abidin ibni Tuanku Muhriz iaitu putera kedua Yamtuan Besar Tuanku
      Muhriz ibni Almarhum Tuanku Munawir.[1] dengan kerjasama Orkestra Filharmonik
      Malaysia serta kumpulan koir dari beberapa sekolah serata negeri tersebut.[1]
      Gubahan baru ini diperkenalkan sewaktu pertabalan baginda Tuanku Muhriz serta
      permaisuri baginda Tengku Aishah Rohani Tengku Besar Mahmud pada awal 2009,
      dan kemudiannya dirasmikan pada 27 Oktober 2010.[2]
      <br/><br/>
      </Typography>
      <br/><br/>

          <iframe
            title={'Lagu Kebesaran Negeri Sembilan'}
            width={'100%'}
            height="315"
            src="https://www.youtube.com/embed/iz1nw74rQWs"
            frameborder="0"
            allow="accelerometer;
            autoplay;
            encrypted-media;
            gyroscope;
            picture-in-picture"
            allowfullscreen
          />

          <Card>
            <CardContent>
              <Typography variant={'h5'} align={'center'} style={{ fontStyle: 'italic'}}>
              <br/>
              <strong>Lirik</strong>
              <br/><br/>
              Berkatlah Yang Dipertuan Besar Negeri Sembilan<br/>
              Kurnia sihat dan makmur<br/>
              Kasihi rakyat lanjutkan umur<br/>
              Akan berkati sekalian yang setia<br/>
              Musuhnya habis binasa<br/>
              Berkatlah Yang Dipertuan Besar Negeri Sembilan<br/>
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item lg={3} />
      </Grid>
      <br/><br/><br/><br/>
    </Container>
    </PageContainer>
  )
}
