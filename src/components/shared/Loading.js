import React from 'react';
import {
    Grid,
    CircularProgress,
} from '@material-ui/core';
import { styles } from './Styles';
import { css } from 'aphrodite';

export default function Loading(){
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
          <CircularProgress />
        </Grid>
      </Grid>
    )
}