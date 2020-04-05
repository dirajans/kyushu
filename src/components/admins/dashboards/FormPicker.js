import React, { useState } from 'react';
import {
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
  MenuItem,
  InputLabel,
  FormControl,
  Select,
  Grid,
} from '@material-ui/core';
import ColorPicker from './ColorPicker';
import uuidv4 from 'uuid/v4';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import { formattedDate } from './../../shared/Utils';

export default function FormPicker({
  onSubmit, 
  onCancel, 
  onDelete, 
  data,
}){
  
  const [places, setPlaces] = useState(['a','b']);
  const [place, setPlace] = useState(data ? data.place : '');
  const handleChangePlace = (event) => setPlace(event.target.value);
  const [chosenDate, setChosenDate] = useState(formattedDate(new Date()));

  const [color, setColor] = useState('');

  const handleOnGenerate = (selection) => {
    setColor(selection);
  }

  const handleChangeDate = (chosenDate) => {
    setChosenDate(formattedDate(chosenDate));
  }

  const handleOnSubmit = () => {
    const newData = {
      id: data ? data.id : uuidv4(),
      place,
      color,
      chosenDate,
      created_at: data ? data.created_at : new Date().toString(),
      updated_at: data ? data.updated_at : new Date().toString(),
    }
    onSubmit(newData);
  }

  return (
    <>
    <DialogTitle>Manage Occasion</DialogTitle>
      <DialogContent>
        <Grid container spacing={3}>
          <Grid item lg={4}>
            <ColorPicker onGenerate={handleOnGenerate} />
          </Grid>
          <Grid item lg={8}>
            <FormControl
            fullWidth
            variant={'outlined'}
            margin={'normal'}
            required
            >
              <InputLabel id={'urgency'}>
                Place
              </InputLabel>
              <Select
                id={'place'}
                name={'place'}
                value={place}
                onChange={handleChangePlace}
                labelWidth={60}
              >
              {places.map( (place) => (
                <MenuItem
                key={place}
                value={place}
                >
                {place}
                </MenuItem>
              ) )}
              </Select>
            </FormControl>

            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <KeyboardDatePicker
                fullWidth
                required
                inputVariant={'outlined'}
                format={'yyyy-MM-dd'}
                margin={'normal'}
                id={'chosenDate'}
                label="Occasion Date"
                value={chosenDate}
                onChange={handleChangeDate}
                KeyboardButtonProps={{
                  'aria-label': 'change date',
                }}
              />
            </MuiPickersUtilsProvider>
          </Grid>
        </Grid>

      </DialogContent>
      <DialogActions>
      <Button 
      onClick={handleOnSubmit} 
      color="primary"
      variant={'contained'}
      >
          {data ? 'Update' : 'Submit'}
      </Button>

      {data && (
          <Button onClick={onDelete} color="secondary" variant={'contained'}>
              Delete
          </Button>
      )}
      
      <Button onClick={onCancel} color="primary" variant={'outlined'}>
          Cancel
      </Button>
  </DialogActions>
  </>
  );
}