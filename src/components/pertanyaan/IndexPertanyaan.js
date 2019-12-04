import React from 'react';
import Navbar from './../shared/Navbar';
import Footer from './../shared/Footer';
import {
  Container,
  Card,
  CardMedia,
} from '@material-ui/core';

export default function IndexPertanyaan() {
  return (
    <>
    <Navbar / >

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
