import React from 'react';
import PageContainer from './../../../shared/PageContainer';
import { 
    Typography,
    Grid,
    Divider,
    Container
} from '@material-ui/core';
import { backdrop } from './../../../images/IndexImages';

export default function RajaHitam(){
    return (
        <PageContainer>
            <Container>
                <br/><br/><br/><br/>
            <Grid container>
                <Grid item lg={5}>
                    <img src={backdrop} alt={''} />
                </Grid>
                <Grid item lg={7}>
                    <Typography variant={'h4'}>
                        Raja Hitam
                    </Typography>
                    <br/>
                    <Divider />
                    <br/>
                    <Typography variant={'body1'} style={{ textAlign: 'justify' }}>
                    Nan Dipertuan Tuanku Raja Hitam juga dikenali Tuanku Raja Hitam merupakan seorang Raja atau 
                    Yang Dipertuan Besar Negeri Sembilan ke-II di Negeri Sembilan. Baginda menggantikan Raja Melewar 
                    yang telah mangkat. Baginda merupakan menantu kepada Raja Melewar kerana mengahwini Tunku Puan Aishah 
                    binti Raja Melewar. Baginda memerintah dari tahun 1795 sehingga tahun 1808.
                    <br/><br/>
                    <strong>Kehidupan awal</strong>
                    <br/>
                    Baginda merupakan anakanda kepada pasangan Yamtuan Raja Balambang dan Tuwan Gadih Mudo dari Minangkabau. 
                    Baginda dilahirkan sekitar tahun 1704 dan mangkat pada tahun 1808 ketika berusia 104 tahun. 
                    <br/><br/>
                    Baginda mempunyai 4 orang isteri antaranya :
                    <br/><br/>
                    Saenah (Anak penghulu Melaka)<br/>
                    Cik Puan Besar Jingka<br/>
                    Tunku Puan Aishah binti Raja Melewar<br/>
                    Tunku Sulong binti Raja Adil<br/>
                    <br/>
                    Hasil perkahwinan tersebut, baginda dikurniakan beberapa orang putera dan puteri, antaranya :
                    <br/><br/>
                    Osman bin Yamtuan Raja Hitam<br/>
                    Timbun bin Yamtuan Raja Hitam<br/>
                    Tunku Alang Hussien bin Yamtuan Raja Hitam<br/>
                    Tunku Ibrahim bin Yamtuan Raja Hitam<br/>
                    Tunku Alwi bin Yamtuan Raja Hitam<br/>
                    Tunku Puan Ngah binti Yamtuan Raja Hitam<br/>
                    Tunku Putok binti Yamtuan Raja Hitam<br/>
                    Tunku Puteh binti Yamtuan Raja Hitam<br/>
                    <br/>
                    Baginda juga merupakan saudara tiri berlainan ibu dengan Puteri Ratna Indun Sari dan Putri Ratna Indusari. [1]
                    <br/><br/>
                    <strong>Meninggal dunia</strong>
                    <br/>
                    Pada tahun 1808, Tuanku Raja Hitam telah mangkat dan tempat baginda digantikan oleh Tuanku Raja Lenggang 
                    sebagai Yang Dipertuan Besar Negeri Sembilan berikutnya. Baginda dikebumikan di Sri Menanti, Negeri Sembilan.
                    </Typography>
                </Grid>
            </Grid>
            <br/><br/><br/><br/>
            </Container>
        </PageContainer>
    )
}