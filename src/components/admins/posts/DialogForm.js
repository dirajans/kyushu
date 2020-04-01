import React, { useState } from 'react';
import {
    Dialog,
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
import { firebase } from './../../../firebaseConfig';
import uuidv4 from 'uuid/v4';

export default function DialogForm({
    openStatus,
    onSubmit,
    onCancel,
}){
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [featured, setFeatured] = useState('false');
    const features = ['false', 'true'];

    const handleChangeTitle = (event) => setTitle(event.target.value);
    const handleChangeDescription = (event) => setDescription(event.target.value);
    const handleChangeFeatured = (event) => setFeatured(event.target.value);

    const handleOnCancel = () => {
      onCancel();
    }

    const clearOnClose = () => {
        setTitle('');
        setDescription('');
        setFeatured('false');
    }

    const handleFormSubmit = () => {
        if (!title || !description) {
          alert('Check your form');
          return;
        };
    
        const post = {
          id: uuidv4(),
          title,
          description,
          featured,
          created_at: new Date().toString(),
          updated_at: new Date().toString(),
        }
    
        // save to firebase
        firebase.database().ref('posts/' + post.id).set(post);
    
        // clear field
        clearOnClose();
        onSubmit();
      }

    return (
        <Dialog
            open={openStatus}
            onClose={clearOnClose}
            aria-labelledby={'massClose'}
            fullWidth={true}
            maxWidth={'md'}
        >
            <DialogTitle id={'massClose'}>Create New Post</DialogTitle>
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
          rows={5}
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
                onClick={handleFormSubmit} 
                color="primary"
                variant={'contained'}
                >
                    Hantar
                </Button>
                <Button onClick={handleOnCancel} color="primary">
                    Batal
                </Button>
            </DialogActions>
        </Dialog>
    )
}