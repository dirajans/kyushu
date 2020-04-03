import React, { useState } from 'react';
import {
    DialogActions,
    DialogContent,
    DialogTitle,
    Button,
    Grid,
    Typography,
} from '@material-ui/core';
import Carousel from './../../shared/Carousel';
import { bg, backdrop, ns } from './../../images/IndexImages';

export default function FormPost({ 
    data: {
        id,
        title,
        description,
        featured,
        created_at,
        updated_at,
    },
    setEdit,
    onClose,
}){
    const tempData = [
        { title: 'image-3', img: bg, cols: 3, rows: 3 },
        { title: 'image-1', img: backdrop, cols: 1, rows: 1 },
        { title: 'image-4', img: ns, cols: 1, rows: 1 },
      ]
    
    const [tileData] = useState(tempData);

    const Field = ({ name, value, details }) => {
        return (
            <>
            <Typography variant={ details ? 'caption' : 'subtitle2'} style={{ color: 'grey' }}>
                {name}
            </Typography>
            <Typography variant={details ? 'caption' : 'body2'}>
                {value}
            </Typography>
            <br />
            </>
        )
    }

    return (
        <>
        <DialogTitle>Post Info</DialogTitle>
            <DialogContent>
            <Grid container spacing={4}>
                <Grid item lg={7}>
                    <Carousel src={tileData} />
                </Grid>
                <Grid item lg={5}>
                    <Field name={'Title'} value={title} />
                    <Field name={'Description'} value={description} />

                    <Field name={'ID '} value={id} details/>
                    <Field name={'Featured '} value={featured} details/>
                    <Field name={'Posted At '} value={created_at} details/>
                    <Field name={'Updated At '} value={updated_at} details/>
                </Grid>
            </Grid>
            </DialogContent>
            <DialogActions>
                <Button onClick={setEdit} color="primary" variant={'contained'}>
                    Edit
                </Button>
                <Button onClick={onClose} color="primary" variant={'outlined'}>
                    Close
                </Button>
            </DialogActions>
        </>
    )
}
