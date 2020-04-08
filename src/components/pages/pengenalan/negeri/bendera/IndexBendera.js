import React from 'react';
import {
  Grid,
  Typography,
  Container,
  Divider,
} from '@material-ui/core';
import { styles } from './Styles';
import { css } from 'aphrodite';
import { bendera, ns } from './../../../../images/IndexImages';
import PageContainer from '../../../../shared/containers/PageContainer';

export default function DesktopComponents(){
  return (
    <PageContainer>
      <Container>
        <br/><br/><br/><br/>
        <Grid container>
          <Grid item lg={3}>
          </Grid>
          <Grid item lg={6}>
            <Typography variant={'h6'} style={{ color: 'grey'}}>
              Pengenalan
            </Typography>
            <Typography variant={'h4'}>
            Bendera dan Jata
            </Typography>
            <br/>
            <Divider />
            <br/>
            <img src={bendera} alt={''} style={{ maxWidth: '100%', margin: 'auto'}}/>
            <br/><br/>
            <Typography variant={'h6'}>
            Bendera Negeri
            </Typography>
            <Typography variant={'body1'} style={{ textAlign: 'justify' }}>
            Tiga warna yang terkandung dalam bendera Negeri Sembilan itu setakat ini belum ada tokoh-tokoh sejarah yang 
            telah memberikan tafsiran yang agak boleh diyakini akan asal usulnya, meskipun tafsiran warnanya sudah diketahui 
            umum dan dipelajari di sekolah-sekolah.<br/>
            <br/>
            Warna merah bererti pemerintah Inggeris, hitam warna kebesaran Datuk-Datuk Undang dan Lembaga manakala warna 
            kuning adalah warna diraja. Setelah negara mencapai kemerdekaan tafsiran warna merah yang melambangkan kekuasaan 
            penjajah Inggeris itu telah diubah dan ditukar maknanya kepada rakyat sesuai dengan semangat perlembagaan yang 
            telah memberi hak kepada rakyat mentadbirkan negara. Dewan Keadilan dan Undang telah meluluskan cadangan ini 
            pada 29hb Disember, 1960.<br/>

            </Typography>
            <br/>
            <Divider />
            <br/>
            <img src={ns} alt={''} style={{ maxWidth: '100%', margin: 'auto'}}/>
            <br/>
            <Typography variant={'h6'}>
            Jata Negeri
            </Typography>
            <Typography variant={'body1'} style={{ textAlign: 'justify' }}>
            Sembilan Tangkai Padi di dalam perisai bermaksud sembilan buah
            negeri dalam gabungan Negeri Sembilan yang lama. Warna Merah dalam
            perisai menunjukkan hubungan-hubungan pada masa lalu dengan British.
            Warna Hitam bermaksud Dato'-Dato' Undang Yang Empat dan Tunku Besar
            Tampin. Warna kuning pula bermakna Yang Di-Pertuan Besar manakala
            Bintang Pecah Sembilan menunjukkan sembilan buah negeri dalam
            gabungan yang sama. Pedang dan sarung di atas perisai memberi maksud
            Tanda Keadilan serta di tengah jata antara pedang dan sarung terletak
            Changgai Putri tanda kebesaran Yang Di-Pertuan Besar
            </Typography>
          </Grid>
          <Grid item lg={3}>
          </Grid>
        </Grid>
        <br/><br/><br/><br/>
      </Container>
      <div className={css(styles.sectionBlack)}>
        <Grid container>
          <Grid item lg={6} />
          <Grid item lg={6}>
            <Typography variant={'h4'} className={css(styles.text)}>
              <span style={{ color: 'white' }}>
                Warna hitam melambangkan<br/><br/>
                DATO'-DATO' UNDANG<br/>
                dan<br/>
                DATO'-DATO' LEMBAGA
              </span>
            </Typography>
          </Grid>
        </Grid>
      </div>
      <div className={css(styles.sectionRed)}>
        <Grid container>
          <Grid item lg={6}>
            <Typography variant={'h4'} className={css(styles.text)}>
              <span style={{ color: 'white' }}>
                Warna merah melambangkan<br/><br/>
                RAKYAT
              </span>
            </Typography>
          </Grid>
          <Grid item lg={6} />
        </Grid>
      </div>
      <div className={css(styles.sectionYellow)}>
        <Grid container>
          <Grid item lg={6} />
          <Grid item lg={6}>
            <Typography variant={'h4'} className={css(styles.text)}>
              <span style={{ color: 'black' }}>
                Warna kuning melambangkan<br/><br/>
                RAJA
              </span>
            </Typography>
          </Grid>
        </Grid>
      </div>
    </PageContainer>
  )
}
