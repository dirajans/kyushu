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
} from '@material-ui/core';
import ColorPicker from './ColorPicker';
import uuidv4 from 'uuid/v4';

export default function FormPicker({
    onSubmit, 
    onCancel, 
    onDelete, 
    data,
}){

    const places = ['a', 'b', 'c'];
    const [place, setPlace] = useState(data ? data.place : '');
    const handleChangePlace = (event) => setPlace(event.target.value);

    const [color, setColor] = useState('');

    const handleOnGenerate = (selection) => {
      setColor(selection);
    }

    const handleOnSubmit = () => {
      const newData = {
        id: data ? data.id : uuidv4(),
        place,
        color,
        created_at: data ? data.created_at : new Date().toString(),
        updated_at: data ? data.updated_at : new Date().toString(),
      }
      onSubmit(newData);
    }

    return (
      <>
      <DialogTitle>Manage Occasion</DialogTitle>
        <DialogContent>

          <ColorPicker onGenerate={handleOnGenerate} />

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