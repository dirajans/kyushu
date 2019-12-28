import React from 'react';

import Navbar from './navbars/Navbar';
import Footer from './footers/Footer';
import { StyleSheet, css } from 'aphrodite';

import { backdrop } from './../images/IndexImages';

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
    backgroundImage: `url(${backdrop})`,
    backgroundPosition: 'left',
    backgroundRepeat: 'no-repeat',
    backgroundColor: 'white',
    backgroundAttachment: 'fixed',
  }
})