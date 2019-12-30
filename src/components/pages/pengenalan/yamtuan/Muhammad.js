import React from 'react';
import PageContainer from './../../../shared/PageContainer';
import { 
    Typography,
    Grid,
    Divider,
    Container
} from '@material-ui/core';
import { muhammad } from './../../../images/IndexImages';

export default function Muhriz(){
    return (
        <PageContainer>
            <Container>
                <br/><br/><br/><br/>
                <Grid container spacing={6}>
                <Grid item lg={5}>
                    <img src={muhammad} alt={''} style={{ maxWidth: '100%', height: 'auto'}} />
                </Grid>
                <Grid item lg={7}>
                    <Typography variant={'h4'}>
                        Tuanku Muhammad ibni Almarhum Tuanku Antah
                    </Typography>
                    <br/>
                    <Divider />
                    <br/>
                    <Typography variant={'body1'} style={{ textAlign: 'justify' }}>
                    Tuanku Muhammad ibni Almarhum Tuanku Antah (25 April 1865 - 1 Ogos 1933) merupakan Yang di-Pertuan Besar 
                    Negeri Sembilan yang ketujuh, memerintah dari 22 Oktober 1888 - 1 Ogos 1933. 
                    <br/><br/>
                    Semasa pemerintahan baginda, 
                    Negeri Sembilan datang di bawah perlindungan British pada tahun 1889, dan menjadi bahagian daripada 
                    Negeri-negeri Melayu Bersekutu pada tahun 1895. Baginda juga terlibat dalam perjanjian persetiaan persekutuan 
                    1895, Tuanku Muhammad Shah ditabalkan sebagai Yang di-Pertuan Besar Negeri Sembilan. Baginda mangkat pada 
                    tahun 1933, selepas pemerintahan 45 tahun, dalam usia 68 tahun. Baginda telah dimakamkan di Makam Diraja Seri 
                    Menanti di Seri Menanti.
                    </Typography>
                </Grid>
            </Grid>
            <br/><br/><br/><br/>
            </Container>
        </PageContainer>
    )
}