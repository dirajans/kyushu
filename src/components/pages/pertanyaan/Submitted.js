import React from 'react';
import {
  Card,
  CardMedia,
  CardContent,
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
        Pertanyaan / Cadangan
        </Typography>
        <br/>
        <Divider />
        <br/>
        <Typography variant={'subtitle2'}>
        Terima kasih.<br/>
        Pertanyaan / cadangan anda telah berjaya dihantar.
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
