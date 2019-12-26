import React from 'react';
import PageContainer from './../../../shared/PageContainer';
import { 
    Typography,
    Grid,
    Divider,
    Container
} from '@material-ui/core';
import { antah } from './../../../images/IndexImages';

export default function Antah(){
    return (
        <PageContainer>
            <Container>
                <br/><br/>
            <Grid container>
                <Grid item lg={5}>
                    <img src={antah} alt={''} />
                </Grid>
                <Grid item lg={7}>
                    <Typography variant={'h4'}>
                        Yamtuan Antah ibni Almarhum Yamtuan Radin 
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