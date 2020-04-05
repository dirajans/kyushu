import React from 'react';
import { Dialog } from '@material-ui/core';
import { firebase } from './../../../firebaseConfig';
import FormPicker from './FormPicker';

export default function DialogForm({
    openStatus,
    onSubmit,
    onCancel,
}){

    const handleFormSubmit = (data) => {
        // register new post to firebase
        firebase.database().ref('occasions/' + data.id).set(data);
    
        onSubmit();
      }

    return (
        <Dialog
            open={openStatus}
            fullWidth={true}
            maxWidth={'sm'}
        >
           <FormPicker onCancel={onCancel} onSubmit={handleFormSubmit} />
        </Dialog>
    )
}