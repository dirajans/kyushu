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
        // register new post to firebase
        firebase.database().ref('posts/' + data.id).set(data);
        onSubmit();
      }

    return (
        <Dialog
            open={openStatus}
            fullWidth={true}
            maxWidth={'md'}
        >
           <FormPost onCancel={onCancel} onSubmit={handleFormSubmit} />
        </Dialog>
    )
}