import React from 'react';
import {
  Container,
} from '@material-ui/core';

import PageContainer from './../shared/PageContainer';
import CardForm from './CardForm';

export default function IndexPertanyaan() {
  return (
    <PageContainer>
      <Container style={styles.container}>
        <CardForm />
      </Container>
    </PageContainer>
  )
}

const styles = {
  container: {
    paddingTop: 30,
    paddingBottom: 30,
  },
  card: {

  },
  media: {

  }
}
