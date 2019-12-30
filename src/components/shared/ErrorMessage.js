import React from 'react';
import {
    Grid,
    Typography,
    Divider,
} from '@material-ui/core';
import { css } from 'aphrodite';
import { styles } from './Styles';
export default function ErrorMessage(){
    return (
        <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justify="center"
            className={css(styles.circular)}
        >
            <Grid item lg={12} align={'center'}>
            <Typography variant={'h3'}>
                Harap Maaf<br/>
            </Typography>
            <br/>
            <Divider />
            <br/>
            <Typography variant={'h6'}>
                Akses tergendala ketika ini<br/>
                Sila kembali semula pada masa akan datang<br/>
            </Typography>
            <br/>
            <Divider />
            </Grid>
        </Grid>
    )
}