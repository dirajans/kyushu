import React from 'react';
import PageContainer from './../../../../shared/PageContainer';
import {
    Typography,
    Grid,
    Divider,
    Container
} from '@material-ui/core';
import { backdrop } from './../../../../images/IndexImages';

export default function Imam(){
    return (
        <PageContainer>
            <Container>
            <br/><br/><br/><br/>
            <Grid container spacing={6}>
                <Grid item lg={5}>
                    <img src={backdrop} alt={''} style={{ maxWidth: '100%', height: 'auto'}} />
                </Grid>
                <Grid item lg={7}>
                    <Typography variant={'h4'}>
                        Yamtuan Imam ibni Almarhum Raja Lenggang
                    </Typography>
                    <br/>
                    <Divider />
                    <br/>
                    <Typography variant={'body1'} style={{ textAlign: 'justify' }}>
                    Yamtuan Imam merupakan pemerintah ke-V di Negeri Sembilan. Baginda merupakan saudara kandung Raja Radin.
                    Baginda memerintah dari tahun 1861 hingga 1869. Baginda merupakan anakanda kepada pasangan Raja Lenggang
                    dan Tunku Puan Ngah binti Yamtuan Hitam. Baginda dilahirkan pada tahun 1823 dan mangkat pada tahun 1869[1].
                    </Typography>
                </Grid>
            </Grid>
            <br/><br/><br/><br/>
            </Container>
        </PageContainer>
    )
}
