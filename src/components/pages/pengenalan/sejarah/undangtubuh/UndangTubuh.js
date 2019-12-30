import React from 'react';
import {
  Grid,
  Container,
  Typography,
  Divider,
} from '@material-ui/core';
import PageContainer from './../../../../shared/PageContainer';
import Sidebar from './Sidebar';

export default function UndangTubuh(){
  return (
    <PageContainer>
      <Container>
      <br/><br/><br/><br/>
      <Grid container spacing={6}>
        <Grid item lg={4}>
          <Sidebar />
        </Grid>
        <Grid item lg={8}>
          <Typography variant={'h4'}>
            Undang - Undang Tubuh Kerajaan Negeri Sembilan 1959
          </Typography>
          <br/>
          <Divider />
          <br/>
          <Typography variant={'body1'} style={{ textAlign: 'justify' }}>
          Undang-undang Tubuh Kerajaan Negeri Sembilan 1959 adalah undang-undang asas Negeri Sembilan dan menubuhkan negeri 
          yang ditadbir secara kolektif dengan Yang di-Pertuan Besar Negeri Sembilan sebagai Ketua Negeri dan Undang Yang Empat 
          sebagai pemerintah bersama. Ia mula berkuat kuasa pada Mac 1959 berikutan kemerdekaan Persekutuan Tanah Melayu pada 
          tahun 1957.<br/>
          <br/>
          Undang - undang ini telah ditandatangani oleh:<br/><br/>

          Tuanku Abdul Rahman ibni Tuanku Muhammad<br/>
          Dato' Klana Petra Mohammad Kassim Datuk Nika Haji Abdul Rashid, Dato' Undang Luak Sungai Ujong<br/>
          Dato' Mendika Menteri Akhir Zaman Shahmaruddin Abdul Rahman, Dato' Undang Luak Jelebu<br/>
          Dato' Johan Pahlawan Lela Perkasa Setiawan Abdul Manap Tolok Dato' Undang Luak Johol<br/>
          Dato' Lela Maharaja Haji Ipap Abdullah Dato' Undang Luak Rembau<br/>
          Tunku Syed Abdul Rahman ibni Tunku Syed Ahmad, Tunku Besar Tampin<br/>
          <br/><br/>
          <strong>Komposisi</strong>
          <br/>
          Undang-Undang Tubuh Kerajaan Negeri Sembilan, dalam bentuk semasa (9 JOktober 2003), terdiri daripada 2 Bahagian, 
          17 bab mengandungi 81 artikel dan 4 jadual.[1]
          </Typography>
        </Grid>
      </Grid>
      <br/><br/><br/><br/>
      </Container>
    </PageContainer>
  )
}
