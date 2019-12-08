import React from 'react';
import {
  Hidden,
  Slide,
  AppBar,
  useScrollTrigger,
} from '@material-ui/core';

import MobileNavbar from './MobileNavbar';
import DesktopNavbar from './DesktopNavbar';

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
      <div style={{ paddingBottom: 50 }} />
    </Hidden>
    <Hidden xsDown>
      <div style={{ paddingBottom: 110 }} />
    </Hidden>
    </>
  )
}
