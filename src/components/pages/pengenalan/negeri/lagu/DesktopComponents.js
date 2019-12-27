import React from 'react';
import {
  Container, 
  Typography,
  Divider,
  Card,
  CardContent,
  Grid,
} from '@material-ui/core';

export default function DesktopComponents(){
  return (
    <Container>
      <br/><br/><br/><br/>
      <Typography variant={'h4'}>
      Berkatlah Yang Dipertuan Besar Negeri Sembilan
      </Typography>
      <br/>
      <Divider />
      <br/>
      <Typography variant={'body1'}>
      Berkatlah Yang Dipertuan Besar Negeri Sembilan adalah lagu kebesaran Negeri Sembilan. Lagunya telah digubah oleh 
      Andrew Caldecott (1884-1951) dan diperkenankan oleh Yang Di-Pertuan Negeri Sembilan pada masa itu, Tuanku Muhammad pada 
      tahun 1911.
      <br/><br/>
      Lagu negeri ini mendapat gubahan semula yang lebih diperbaharui oleh Tunku Zain Al-'Abidin ibni Tuanku Muhriz iaitu putera kedua Yamtuan Besar Tuanku Muhriz ibni Almarhum Tuanku Munawir.[1] dengan kerjasama Orkestra Filharmonik Malaysia serta kumpulan koir dari beberapa sekolah serata negeri tersebut.[1] Gubahan baru ini diperkenalkan sewaktu pertabalan baginda Tuanku Muhriz serta permaisuri baginda Tengku Aishah Rohani Tengku Besar Mahmud pada awal 2009, dan kemudiannya dirasmikan pada 27 Oktober 2010.[2]
      <br/><br/>
      </Typography>

      <Grid container>
        <Grid item lg={3} />
        <Grid item lg={6}>
          <Card>
            <CardContent>
              <Typography variant={'h6'} align={'center'}>
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
      
    </Container>
  )
}
