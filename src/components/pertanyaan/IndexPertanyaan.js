import React, { useState } from 'react';
import {
  Container,
} from '@material-ui/core';

import PageContainer from './../shared/PageContainer';
import CardForm from './CardForm';
import Submitted from './Submitted';

import { css }from 'aphrodite';
import { styles } from './Styles';

export default function IndexPertanyaan() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    setSubmitted(true);
  }

  const handleBack = () => {
    setSubmitted(false);
  }

  return (
    <PageContainer>
      <Container className={css(styles.container)}>
      {submitted && (
        <Submitted onClick={handleBack} />
      )}
      {!submitted && (
        <CardForm onSubmit={handleSubmit} />
      )}
      </Container>
    </PageContainer>
  )
}
