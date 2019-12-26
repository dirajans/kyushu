import React from 'react';
import PageContainer from './../../../shared/PageContainer';
import { 
    Typography,
    Grid,
    Divider,
    Container
} from '@material-ui/core';
import { muhriz } from './../../../images/IndexImages';

export default function Muhriz(){
    return (
        <PageContainer>
            <Container>
                <br/><br/>
            <Grid container>
                <Grid item lg={5}>
                    <img src={muhriz} alt={''} />
                </Grid>
                <Grid item lg={7}>
                    <Typography variant={'h4'}>
                        Tuanku Muhriz ibni Almarhum Tuanku Munawir
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