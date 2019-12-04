import React from 'react';

import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

import Navbar from './../shared/Navbar';
import Footer from './../shared/Footer';

export default function IndexUtama() {

  return (
    <>
      <Navbar />
      <div style={styles.container}>
      <div style={styles.content}>
      <Container maxWidth="lg">

      </Container>

      </div>
      </div>
      <Footer />
    </>
  );
}

const background = '/images/bg.jpg';

const styles = {
  container: {
    backgroundImage: `url(${background})`,
    height: '70vh',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover'
  },

  content: {
    height: '100%',
    width: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    color: 'white',
  }
}
