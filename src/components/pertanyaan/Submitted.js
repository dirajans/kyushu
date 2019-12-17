import React, { useState } from 'react';
import {
  Card,
  CardMedia,
  CardContent,
  TextField,
  Typography,
  Divider,
  Button,
  Hidden
} from '@material-ui/core';

import { ns } from './../../images/IndexImages';
import { css }from 'aphrodite';
import { styles } from './Styles';

export default function CardForm({ onClick }) {
  return (
    <Card className={css(styles.card)}>
      <Hidden xsDown>
      <CardMedia
        className={css(styles.media)}
        image={ns}
        title={'Title for image'}
      />
      </Hidden>

      <CardContent style={{ justifyContent: 'center' }}>
        <Typography variant={'h5'}>
        Pertanyaan
        </Typography>
        <br/>
        <Divider />
        <br/>
        <Typography variant={'subtitle2'}>
        Untuk sebarang pertanyaan atau cadangan, sila isi borang di bawah:
        </Typography>
        <br/><br/>
        <Button
          fullWidth
          variant={'outlined'}
          color={'primary'}
          onClick={onClick}
        >
        Kembali
        </Button>
      </CardContent>
    </Card>
  );
}
