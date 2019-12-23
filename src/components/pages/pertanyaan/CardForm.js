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
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [description, setDescription] = useState('');

  const handleChangeName = (event) => setName(event.target.value);
  const handleChangeEmail = (event) => setEmail(event.target.value);
  const handleChangeDescription = (event) => setDescription(event.target.value);

  const handleFormSubmit = () => {
    const data = {
      name,
      email,
      description,
    }

    onSubmit(data);

    // reset values
    setName('');
    setEmail('');
    setDescription('');
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
        Pertanyaan / Cadangan
        </Typography>
        <br/>
        <Divider />
        <br/>
        <Typography variant={'subtitle2'}>
        Untuk sebarang pertanyaan atau cadangan, sila isi borang di bawah:
        </Typography>
        <br/>
        <TextField
          required
          fullWidth
          variant={'outlined'}
          name={'nama'}
          value={name}
          label={'Nama'}
          onChange={handleChangeName}
          className={css(styles.marginField)}
        />
        <TextField
          required
          fullWidth
          variant={'outlined'}
          name={'email'}
          value={email}
          label={'Email'}
          onChange={handleChangeEmail}
          className={css(styles.marginField)}
        />
        <TextField
          required
          fullWidth
          variant={'outlined'}
          name={'pertanyaan'}
          value={description}
          label={'Pertanyaan / Cadangan'}
          onChange={handleChangeDescription}
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
