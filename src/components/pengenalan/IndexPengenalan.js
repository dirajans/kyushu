import React from 'react';
import {
  Hidden
} from '@material-ui/core';
import PageContainer from '../shared/PageContainer';

import DesktopComponents from './desktop/DesktopComponents';
import MobileComponents from './mobile/MobileComponents';

export default function IndexPengenalan(){
  return (
    <PageContainer>
      <Hidden smUp>
        <MobileComponents />
      </Hidden>
      <Hidden xsDown>
        <DesktopComponents />
      </Hidden>
    </PageContainer>
  )
}
