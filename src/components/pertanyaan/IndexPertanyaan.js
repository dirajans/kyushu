import React from 'react';
import {
  Container,
  Card,
  CardMedia,
} from '@material-ui/core';

import PageContainer from './../shared/PageContainer';

export default function IndexPertanyaan() {
  return (
    <PageContainer>

    <Container style={styles.container}>
      <Card style={styles.card}>
      <CardMedia
        style={styles.media}
        image = {'#'}
        title = {'#'}
      />
      </Card>
    </Container>

    </PageContainer>
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
