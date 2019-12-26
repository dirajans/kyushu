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
                <br/><br/>
            <Grid container>
                <Grid item lg={5}>
                    <img src={muhammad} alt={''} />
                </Grid>
                <Grid item lg={7}>
                    <Typography variant={'h4'}>
                        Tuanku Muhammad ibni Almarhum Tuanku Antah
                    </Typography>
                    <br/>
                    <Divider />
                    <br/>
                    <Typography variant={'body1'}>
                    </Typography>
                </Grid>
            </Grid>
            <br/>
            </Container>
        </PageContainer>
    )
}