import React, { useState } from 'react';
import Navbar from './../shared/Navbar';
import Footer from './../shared/Footer';
import AwesomeSlider from 'react-awesome-slider';
import AwesomeSliderStyles from 'react-awesome-slider/src/styles';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import './galeri.scss';
import { Grid, Container, Typography, Divider } from '@material-ui/core';
import GaleriCard from './GaleriCard';

const AutoplaySlider = withAutoplay(AwesomeSlider);

export default function IndexGaleri(){
    const [images] = useState([
        { name: 'image-1', url: 'url1' },
        { name: 'image-2', url: 'url2' },
        { name: 'image-1', url: 'url1' },
        { name: 'image-2', url: 'url2' },
        { name: 'image-1', url: 'url1' },
        { name: 'image-2', url: 'url2' },
        { name: 'image-1', url: 'url1' },
        { name: 'image-2', url: 'url2' },
    ]);

    return (
        <>
        <Navbar />
        <AutoplaySlider
            play={true}
            cancelOnInteraction={false}
            interval={6000}

            bullets={false}
            infinite={true}
            cssModule={AwesomeSliderStyles}
        >
            <div data-src="/path/to/image-0.png" />
            <div data-src="/path/to/image-1.png" />
            <div data-src="/path/to/image-2.jpg" />
        </AutoplaySlider>

        <br />

        <Container>
            <Grid container justify={'space-between'}>
                <Grid item>
                <Typography variant={'h5'} component={'h2'}>
                    Majlis
                </Typography>
                </Grid>
                <Grid item>
                    December 1st, 2019
                </Grid>
            </Grid>
            <br/>
            <Divider />
            <br/>
            <Grid container spacing={2}>
                {images.map(
                    (image) => (
                        <Grid item lg={3}>
                            <GaleriCard />
                        </Grid>
                    )
                )}
            </Grid>
        </Container>
        
        <Footer />
        </>
    )
}
