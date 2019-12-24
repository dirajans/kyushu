import React, { useState } from 'react';
import {
  Container,
} from '@material-ui/core';
import axios from 'axios';
import qs from 'querystring';
import PageContainer from './../../shared/PageContainer';
import CardForm from './CardForm';
import Submitted from './Submitted';

import { css }from 'aphrodite';
import { styles } from './Styles';

export default function IndexPertanyaan() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (data) => {
    if (
      data.name.length === 0
      || data.email.length === 0
      || data.description.length === 0
    ) {
      alert('Sila semak butir-butir borang anda.');
    } else {
      const url = 'http://18.139.3.116:1337/inquiries';
      // send to db
      await axios({
        method: 'post',
        url: url,
        data: qs.stringify(data),
        headers: {
          'content-type': 'application/x-www-form-urlencoded;charset=utf-8'
        }
      });

      setSubmitted(true);
    }
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
