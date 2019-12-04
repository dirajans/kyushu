import React from 'react';
import Navbar from './../shared/Navbar';
import Footer from './../shared/Footer';
import MobileNavbar from './../shared/MobileNavbar';
import {
  Container,
  Card,
  CardMedia,
  Hidden,
} from '@material-ui/core';

export default function IndexPertanyaan() {
  return (
    <>
    <Hidden smUp>
      <MobileNavbar />
    </Hidden>
    <Hidden xsDown>
      <Navbar />
    </Hidden>

    <Container style={styles.container}>
      <Card style={styles.card}>
      <CardMedia
        style={styles.media}
        image = {'#'}
        title = {'#'}
      />
      </Card>
    </Container>

    <Footer/>
    </>
  )
}

const styles = {
  container: {
    paddingBottom: 30,
  },
  card: {
    maxWidth: 1000,
  },
  media: {
    height: 140,
  },
}
