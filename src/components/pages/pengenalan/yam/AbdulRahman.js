import React from 'react';
import PageContainer from './../../../shared/PageContainer';
import { 
    Typography,
    Grid,
    Divider,
    Container
} from '@material-ui/core';
import { tar } from './../../../images/IndexImages';

export default function AbdulRahman(){
    return (
        <PageContainer>
            <Container>
                <br/><br/>
            <Grid container>
                <Grid item lg={5}>
                    <img src={tar} alt={''} />
                </Grid>
                <Grid item lg={7}>
                    <Typography variant={'h3'}>
                        Tuanku Abdul Rahman
                    </Typography>
                    <Divider />
                    <Typography variant={'body1'}>
                        Description
                    </Typography>
                </Grid>
            </Grid>
            <br/>
            </Container>
        </PageContainer>
    )
}