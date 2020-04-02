import React, { useState } from 'react';
import {
    Dialog,
} from '@material-ui/core';
import { firebase } from './../../../firebaseConfig';
import uuidv4 from 'uuid/v4';
import FormPost from './FormPost';

export default function DialogForm({
    openStatus,
    onSubmit,
    onCancel,
}){
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [featured, setFeatured] = useState('false');
    // const features = ['false', 'true'];

    // const handleChangeTitle = (event) => setTitle(event.target.value);
    // const handleChangeDescription = (event) => setDescription(event.target.value);
    // const handleChangeFeatured = (event) => setFeatured(event.target.value);

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
           <FormPost onCancel={handleOnCancel} onSubmit={handleFormSubmit} />
        </Dialog>
    )
}