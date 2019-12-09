import React, { useState } from 'react';
import {
  Hidden,
} from '@material-ui/core';

import AwesomeSlider from 'react-awesome-slider';
import AwesomeSliderStyles from 'react-awesome-slider/src/styles';
import withAutoplay from 'react-awesome-slider/dist/autoplay';

import PageContainer from '../shared/PageContainer';
import { bg, backdrop, ns } from './../../images/IndexImages';

import DesktopComponents from './desktop/DesktopComponents';
import MobileComponents from './mobile/MobileComponents';

import './galeri.scss';

const AutoplaySlider = withAutoplay(AwesomeSlider);

export default function IndexUtama() {
  const [tileData] = useState([
      { title: 'image-3', img: bg, cols: 3, rows: 3 },
      { title: 'image-1', img: backdrop, cols: 1, rows: 1 },
      { title: 'image-4', img: ns, cols: 1, rows: 1 },
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

      <Hidden smUp>
        <MobileComponents />
      </Hidden>
      <Hidden xsDown>
        <DesktopComponents />
      </Hidden>
    </PageContainer>
  );
}
