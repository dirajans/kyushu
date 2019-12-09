import React from 'react';
import {
  Container,
} from '@material-ui/core';

import PageContainer from './../shared/PageContainer';
import CardForm from './CardForm';

import { css }from 'aphrodite';
import { styles } from './Styles';

export default function IndexPertanyaan() {
  return (
    <PageContainer>
      <Container className={css(styles.container)}>
        <CardForm />
      </Container>
    </PageContainer>
  )
}
