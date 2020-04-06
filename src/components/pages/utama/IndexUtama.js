import React from 'react';
import {
  Grid,
  Typography
} from '@material-ui/core';
import PageContainer from '../../shared/containers/PageContainer';
import { styles } from './Styles';
import { css } from 'aphrodite';

import { bg, backdrop, ns } from './../../images/IndexImages';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export default function IndexUtama() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  }

  return (
    <PageContainer>
      
      <Slider {...settings}>
        <img src={ns} alt={''} />
        <img src={bg} alt={''} />
        <img src={backdrop} alt={''} />
      </Slider>

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
