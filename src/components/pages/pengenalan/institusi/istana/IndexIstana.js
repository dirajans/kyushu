import React from 'react';
import {
  Hidden
} from '@material-ui/core';
import PageContainer from '../../../../shared/containers/PageContainer';
import DesktopComponents from './DesktopComponents';
import MobileComponents from './MobileComponents';

export default function IndexIstana(){
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
