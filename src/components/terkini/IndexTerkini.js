import React from 'react';

import Navbar from './../shared/Navbar';
import Footer from './../shared/Footer';
import MobileNavbar from './../shared/MobileNavbar';
import {
  Hidden,
} from '@material-ui/core';

export default function IndexTerkini(){
    return (
      <>
      <Hidden smUp>
        <MobileNavbar />
      </Hidden>
      <Hidden xsDown>
        <Navbar />
      </Hidden>
        <Footer />
      </>
    )
}
