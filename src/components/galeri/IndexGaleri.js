import React, { useState } from 'react';
import {
  Grid,
  Container,
  Typography,
  Divider,
  GridList,
  GridListTile
} from '@material-ui/core';

import Navbar from './../shared/Navbar';
import Footer from './../shared/Footer';
import GaleriCard from './GaleriCard';

import AwesomeSlider from 'react-awesome-slider';
import AwesomeSliderStyles from 'react-awesome-slider/src/styles';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import './galeri.scss';

const AutoplaySlider = withAutoplay(AwesomeSlider);

export default function IndexGaleri(){
    const [tileData] = useState([
        { title: 'image-1', img: '/images/backdrop.png', cols: 2 },
        { title: 'image-2', img: '/images/bendera.png' },
        { title: 'image-3', img: '/images/bg.jpg', cols: 3 },
        { title: 'image-4', img: '/images/ns.png' },
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
            <div data-src="/images/bendera.png" />
            <div data-src="/images/bg.jpg" />
            <div data-src="/images/ns.png" />
        </AutoplaySlider>

        <br />

        <Container style={styles.container}>
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
            <GridList cellHeight={160} cols={3}>
              {tileData.map(tile => (
                <GridListTile key={tile.img} cols={tile.cols || 1}>
                  <img src={tile.img} alt={tile.title} />
                </GridListTile>
              ))}
            </GridList>
        </Container>

        <Footer />
        </>
    )
}

const styles = {
  container: {
    paddingBottom: 30,
  },
}
