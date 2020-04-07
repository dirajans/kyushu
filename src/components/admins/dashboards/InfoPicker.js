import React from 'react';
import {
    DialogActions,
    DialogContent,
    DialogTitle,
    Button,
    Grid,
    Typography,
} from '@material-ui/core';

import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export default function InfoPicker({ 
    data: {
        id,
        place,
        color,
        images,
        created_at,
        updated_at,
    },
    setEdit,
    onClose,
}){

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    }

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
        <DialogTitle>Occasion Info</DialogTitle>
            <DialogContent>
            <Grid container spacing={4}>
                <Grid item lg={7} md={7} sm={12} xs={12}>
                    <Slider {...settings}>
                        {images !== undefined && images.map( img => (
                            <img src={img.url} alt={''} key={img.id} />
                        ))}
                        {images === undefined && (
                            <Typography variant={'caption'}>
                                No images uploaded yet.
                            </Typography>
                        )}
                    </Slider>
                </Grid>
                <Grid item lg={5} md={5} sm={12} xs={12}>
                    <Field name={'Place'} value={place} />
                    <Field name={'Color'} value={color} />

                    <Field name={'ID '} value={id} details/>
                    <Field name={'Created At '} value={created_at} details/>
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
