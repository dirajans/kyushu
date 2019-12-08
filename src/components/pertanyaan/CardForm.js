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

import {ns} from './../../images/IndexImages';

export default function CardForm() {
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

    // do something with data
    console.log(data);

    // reset values
    setNama('');
    setEmail('');
    setPertanyaan('');
  }

  return (
    <Card style={styles.card}>
      <Hidden xsDown>
      <CardMedia
        style={styles.media}
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
          style={{ marginBottom: 15 }}
        />
        <TextField
          fullWidth
          variant={'outlined'}
          name={'email'}
          value={email}
          label={'Email'}
          onChange={handleChangeEmail}
          style={{ marginBottom: 15 }}
        />
        <TextField
          fullWidth
          variant={'outlined'}
          name={'pertanyaan'}
          value={pertanyaan}
          label={'Pertanyaan / Cadangan'}
          onChange={handleChangePertanyaan}
          style={{ marginBottom: 15 }}
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

const styles = {
  card: {
    display: 'flex',
    maxWidth: '100%',
  },
  media: {
    display: 'flex',
    height: 500,
    width: '50%',
    backgroundColor: 'black',
  },
}
