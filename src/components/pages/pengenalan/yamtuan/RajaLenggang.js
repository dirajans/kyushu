import React from 'react';
import PageContainer from './../../../shared/PageContainer';
import { 
    Typography,
    Grid,
    Divider,
    Container
} from '@material-ui/core';
import { backdrop } from './../../../images/IndexImages';

export default function RajaLenggang(){
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
                        Raja Lenggang
                    </Typography>
                    <br/>
                    <Divider />
                    <br/>
                    <Typography variant={'body1'} style={{ textAlign: 'justify' }}>
                    Yamtuan Lenggang juga dikenali Paduka Seri Tuanku Raja Ali. Yamtuan Lenggang pemerintah atau Yang Di-Pertuan 
                    Besar Negeri Sembilan ke-III di Negeri Sembilan, baginda merupakan menantu kepada Raja Hitam. 
                    Baginda mendirikan rumahtangga dengan Tunku Puan Ngah binti Yamtuan Hitam. Baginda menggantikan 
                    Tuanku Raja Hitam yang telah mangkat. Tuanku Raja Lenggang bertakhta dan memerintah dari 
                    tahun 1808 sehingga tahun 1824. Raja Lenggang merupakan keturunan Yang Di-Pertuan Pagaruyung, 
                    baginda merupakan anakanda kepada Yamtuan Melenggang Alam atau Raja Naro I. 
                    <br/><br/>
                    Pada tahun 1824, Tuanku Raja Lenggang digantikan oleh putranya, Raja Radin sebagai Yang Dipertuan Besar 
                    Negeri Sembilan berikutnya.[1]
                    </Typography>
                </Grid>
            </Grid>
            <br/><br/><br/><br/>
            </Container>
        </PageContainer>
    )
}