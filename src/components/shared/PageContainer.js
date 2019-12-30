import React from 'react';

import Navbar from './navbars/Navbar';
import Footer from './footers/Footer';
import { StyleSheet, css } from 'aphrodite';

import { backdrop2 } from './../images/IndexImages';

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
    backgroundImage: `url(${backdrop2})`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundColor: 'white',
    backgroundAttachment: 'fixed',
  }
})