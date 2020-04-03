import React, { useState } from 'react';
import {
    Dialog
} from '@material-ui/core';
import Info from './Info';
import FormPost from './FormPost';
import { firebase } from './../../../firebaseConfig';

export default function EditableDialog({
    data,
    openStatus,
    onClose,
}){
    const [ isEdit, setIsEdit ] = useState(false);

    const handleSetEdit = () => {
        setIsEdit(true);
    }

    const handleOnCancel = () => {
        setIsEdit(false);
    }

    // submit edited post
    const handleOnSubmit = (newData) => {
        firebase.database().ref('posts/' + data.id).set(newData);
        setIsEdit(false);
        onClose();
    }

    const handleOnDelete = () => {
        if(window.confirm('Are you sure?')){
            firebase.database().ref('posts/' + data.id).remove();
            setIsEdit(false);
            onClose();
        }
    }

    return (
        <Dialog
            open={openStatus}
            fullWidth={true}
            maxWidth={'md'}
        >

        {isEdit && (
            <FormPost data={data}
            onCancel={handleOnCancel} 
            onSubmit={handleOnSubmit}
            onDelete={handleOnDelete}
            />
        )}

        {!isEdit && (
            <Info data={data}
            setEdit={handleSetEdit}
            onClose={onClose}
            />
        )}

        </Dialog>
    );
}