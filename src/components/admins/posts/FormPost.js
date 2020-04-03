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
    TextField,
} from '@material-ui/core';
import uuidv4 from 'uuid/v4';

export default function FormPost({ 
    onSubmit, 
    onCancel, 
    onDelete, 
    data,
}){
    const [title, setTitle] = useState(data ? data.title : '');
    const [description, setDescription] = useState(data ? data.description : '');
    const [featured, setFeatured] = useState(data ? data.featured : 'false');
    const features = ['false', 'true'];

    const handleChangeTitle = (event) => setTitle(event.target.value);
    const handleChangeDescription = (event) => setDescription(event.target.value);
    const handleChangeFeatured = (event) => setFeatured(event.target.value);

    const handleOnSubmit = () => {
      const newData = {
        id: data ? data.id : uuidv4(),
        title,
        description,
        featured,
        created_at: data ? data.created_at : new Date().toString(),
        updated_at: data ? data.updated_at : new Date().toString(),
      }
      onSubmit(newData);
    }

    return (
        <>
        <DialogTitle>Manage Post</DialogTitle>
        <DialogContent>
          <TextField
            required
            fullWidth
            variant={'outlined'}
            name={'title'}
            value={title}
            label={'Title'}
            onChange={handleChangeTitle}
          />

          <br/><br/>

          <TextField
            required
            fullWidth
            variant={'outlined'}
            name={'description'}
            value={description}
            label={'Description'}
            onChange={handleChangeDescription}
            multiline
            rows={8}
          />
          
          <FormControl
          fullWidth
          variant={'outlined'}
          margin={'normal'}
          required
          >
            <InputLabel id={'urgency'}>
              Featured
            </InputLabel>
            <Select
              id={'featured'}
              name={'featured'}
              value={featured}
              onChange={handleChangeFeatured}
              labelWidth={60}
            >
            {features.map( (feature) => (
              <MenuItem
              key={feature}
              value={feature}
              >
              {feature}
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