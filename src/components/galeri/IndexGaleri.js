import React, { useState } from 'react';
import {
  Container,
  Typography,
  GridList,
  GridListTile
} from '@material-ui/core';

import Navbar from './../shared/Navbar';
import Footer from './../shared/Footer';
import MobileNavbar from './../shared/MobileNavbar';
import {
  Hidden,
} from '@material-ui/core';

import AwesomeSlider from 'react-awesome-slider';
import AwesomeSliderStyles from 'react-awesome-slider/src/styles';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import './galeri.scss';

const AutoplaySlider = withAutoplay(AwesomeSlider);

export default function IndexGaleri(){
    const [tileData] = useState([
        { title: 'image-3', img: '/images/bg.jpg', cols: 3 },
        { title: 'image-1', img: '/images/backdrop.png', cols: 2 },
        { title: 'image-2', img: '/images/bendera.png', cols: 1 },
        { title: 'image-4', img: '/images/ns.png', cols: 2 },
    ]);

    return (
        <>
        <Hidden smUp>
          <MobileNavbar />
        </Hidden>
        <Hidden xsDown>
          <Navbar />
        </Hidden>
        <AutoplaySlider
            play={true}
            cancelOnInteraction={false}
            interval={6000}

            bullets={false}
            infinite={true}
            cssModule={AwesomeSliderStyles}
        >
        {tileData.map( (data) => (
          <div data-src={data.img} />
        ))}
        </AutoplaySlider>

        <Typography
          variant={'h4'}
          align={'center'}
          style={styles.title}
        >
          Galeri
        </Typography>

        <Container style={styles.container}>
          <GridList cellHeight={160} cols={5}>
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
  title: {
    paddingTop: 30,
    paddingBottom: 30,
  }
}
