import React from 'react';
import {
    Dialog,
} from '@material-ui/core';
import { firebase } from './../../../firebaseConfig';
import FormPost from './FormPost';

export default function DialogForm({
    openStatus,
    onSubmit,
    onCancel,
}){

    const handleFormSubmit = (data) => {
        if (!data.title || !data.description) {
          alert('Check your form');
          return;
        };
        
        // register new post to firebase
        firebase.database().ref('posts/' + data.id).set(data);
    
        onSubmit();
      }

    return (
        <Dialog
            open={openStatus}
            fullWidth={true}
            maxWidth={'sm'}
        >
           <FormPost onCancel={onCancel} onSubmit={handleFormSubmit} />
        </Dialog>
    )
}