import React from 'react';

import Navbar from './navbars/Navbar';
import Footer from './footers/Footer';
import { StyleSheet, css } from 'aphrodite';

import { backdrop, benderaBw } from './../images/IndexImages';

export default function PageContainer({ children }){
  return (
    <>
      <Navbar />
      <div className={css(styles.backdrop)}>
      {children}
      </div>
      <Footer />
    </>
  )
}

const styles = StyleSheet.create({
  backdrop: {
    backgroundImage: `url(${backdrop}), url(${benderaBw})`,
    backgroundPosition: 'left, right',
    backgroundRepeat: 'no-repeat',
    backgroundColor: 'white',
    backgroundAttachment: 'fixed',
  },
})
