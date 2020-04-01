import React, { useState } from 'react';
import {
  Grid,
  Typography
} from '@material-ui/core';
import AwesomeSlider from 'react-awesome-slider';
import AwesomeSliderStyles from 'react-awesome-slider/src/styles';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import PageContainer from '../../shared/containers/PageContainer';
import { bg, backdrop, ns } from './../../images/IndexImages';
import './galeri.scss';
import { styles } from './Styles';
import { css } from 'aphrodite';

const AutoplaySlider = withAutoplay(AwesomeSlider);

export default function IndexUtama() {
  const tempData = [
    { title: 'image-3', img: bg, cols: 3, rows: 3 },
    { title: 'image-1', img: backdrop, cols: 1, rows: 1 },
    { title: 'image-4', img: ns, cols: 1, rows: 1 },
  ]
  const [tileData] = useState(tempData);

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
        <div data-src={data.img} key={data.title} />
      ))}
      </AutoplaySlider>

      <div className={css(styles.sectionLast)}>
        <Grid
          container
          spacing={0}
          direction="column"
          alignItems="center"
          justify="center"
          style={{ minHeight: '100%' }}
        >
          <Grid item lg={12} align={'center'}>
            <Typography variant={'h1'}>
              Daulat Tuanku
            </Typography>
          </Grid>
        </Grid>
      </div>
    </PageContainer>
  );
}
