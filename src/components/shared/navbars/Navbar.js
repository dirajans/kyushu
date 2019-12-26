import React from 'react';
import {
  Hidden,
  Slide,
  AppBar,
  useScrollTrigger,
} from '@material-ui/core';

import MobileNavbar from './mobile/MobileNavbar';
import DesktopNavbar from './desktop/DesktopNavbar';

function HideOnScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({ target: window ? window() : undefined });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

export default function Navbar(){
  return (
    <>
    <HideOnScroll>
      <AppBar color={'default'}>
        <Hidden smUp>
          <MobileNavbar />
        </Hidden>
        <Hidden xsDown>
          <DesktopNavbar />
        </Hidden>
      </AppBar>
    </HideOnScroll>

    <Hidden smUp>
      <div style={{ marginBottom: 50 }} />
    </Hidden>
    <Hidden xsDown>
      <div style={{ marginBottom: 114 }} />
    </Hidden>
    </>
  )
}
