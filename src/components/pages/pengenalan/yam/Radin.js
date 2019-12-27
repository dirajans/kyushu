import React from 'react';
import PageContainer from './../../../shared/PageContainer';
import { 
    Typography,
    Grid,
    Divider,
    Container
} from '@material-ui/core';
import { backdrop } from './../../../images/IndexImages';

export default function Radin(){
    return (
        <PageContainer>
            <Container>
                <br/><br/>
            <Grid container>
                <Grid item lg={5}>
                    <img src={backdrop} alt={''} />
                </Grid>
                <Grid item lg={7}>
                    <Typography variant={'h4'}>
                        Yamtuan Radin ibni Almarhum Raja Lenggang
                    </Typography>
                    <br/>
                    <Divider />
                    <br/>
                    <Typography variant={'body1'}>
                    Raja Radin atau dikenali sebagai Yamtuan Radin merupakan pemerintah ke-IV di Negeri Sembilan. 
                    Baginda memerintah dari tahun 1824 hingga 1861. Baginda merupakan anakanda kepada pasangan 
                    Raja Lenggang dan Tunku Puan Ngah binti Yamtuan Hitam. Baginda dilahirkan pada tahun 1802 dan 
                    mangkat pada tahun 1861 ketika berusia 59 tahun.[1]
                    </Typography>
                </Grid>
            </Grid>
            <br/>
            </Container>
        </PageContainer>
    )
}