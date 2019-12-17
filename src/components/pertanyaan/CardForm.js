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

export default function CardForm({ onSubmit }) {
  const [nama, setNama] = useState('');
  const [email, setEmail] = useState('');
  const [pertanyaan, setPertanyaan] = useState('');

  const handleChangeNama = (event) => setNama(event.target.value);
  const handleChangeEmail = (event) => setEmail(event.target.value);
  const handleChangePertanyaan = (event) => setPertanyaan(event.target.value);

  const handleFormSubmit = () => {
    const data = {
      nama,
      email,
      pertanyaan,
    }

    onSubmit(data);

    // do something with data
    console.log(data);

    // reset values
    setNama('');
    setEmail('');
    setPertanyaan('');
  }

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
        <br/>
        <TextField
          fullWidth
          variant={'outlined'}
          name={'nama'}
          value={nama}
          label={'Nama'}
          onChange={handleChangeNama}
          className={css(styles.marginField)}
        />
        <TextField
          fullWidth
          variant={'outlined'}
          name={'email'}
          value={email}
          label={'Email'}
          onChange={handleChangeEmail}
          className={css(styles.marginField)}
        />
        <TextField
          fullWidth
          variant={'outlined'}
          name={'pertanyaan'}
          value={pertanyaan}
          label={'Pertanyaan / Cadangan'}
          onChange={handleChangePertanyaan}
          className={css(styles.marginField)}
          multiline
          rows={5}
        />
        <br/><br/>
        <Button
          fullWidth
          variant={'outlined'}
          color={'primary'}
          onClick={handleFormSubmit}
        >
        Hantar
        </Button>
      </CardContent>
    </Card>
  );
}
