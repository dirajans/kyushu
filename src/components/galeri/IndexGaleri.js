import React, { useState } from 'react';
import {
  Container,
  Typography,
  GridList,
  GridListTile
} from '@material-ui/core';

import PageContainer from './../shared/PageContainer';

import AwesomeSlider from 'react-awesome-slider';
import AwesomeSliderStyles from 'react-awesome-slider/src/styles';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import './galeri.scss';

import { bg, backdrop, ns } from './../../images/IndexImages';

const AutoplaySlider = withAutoplay(AwesomeSlider);

export default function IndexGaleri(){
    const [tileData] = useState([
        { title: 'image-3', img: bg, cols: 3 },
        { title: 'image-1', img: backdrop, cols: 2 },
        { title: 'image-4', img: ns, cols: 2 },
    ]);

    return (
        <PageContainer>
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

        </PageContainer>
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
