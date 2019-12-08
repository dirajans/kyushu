import React from 'react';
import { Hidden } from '@material-ui/core';

import MobileNavbar from './MobileNavbar';
import DesktopNavbar from './DesktopNavbar';

export default function Navbar(){
    return (
        <>
        <Hidden smUp>
          <MobileNavbar />
        </Hidden>
        <Hidden xsDown>
          <DesktopNavbar />
        </Hidden>
        </>
    )
}