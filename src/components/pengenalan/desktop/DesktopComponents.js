import React from 'react';
import {
  Grid,
  Typography,
} from '@material-ui/core';
import { styles } from './Styles';
import { css } from 'aphrodite';

export default function DesktopComponents(){
  return (
    <>
      <div className={css(styles.sectionBlack)} />
      <div className={css(styles.sectionRed)} />
      <div className={css(styles.sectionYellow)} />
    </>
  )
}
