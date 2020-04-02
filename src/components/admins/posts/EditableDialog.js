import React, { useState } from 'react';
import {
    Dialog
} from '@material-ui/core';
import Info from './Info';
import FormPost from './FormPost';

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

    const handleOnSubmit = () => {

    }

    const handleOnDelete = () => {

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