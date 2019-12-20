import React, { useState } from 'react';
import {
  Container,
} from '@material-ui/core';
import qs from 'querystring';
import axios from 'axios';

import PageContainer from './../shared/PageContainer';
import CardForm from './CardForm';
import Submitted from './Submitted';

import { css }from 'aphrodite';
import { styles } from './Styles';
import { domain } from './../shared/config';

export default function IndexPertanyaan() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (data) => {
    const url = domain + '/inquiries';

    const config = {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    }

    if (
      data.name.length === 0
      || data.email.length === 0
      || data.description.length === 0
    ) {
      alert('Sila semak butir-butir borang anda.');
    } else {
      // send to db
      await axios.post(url, qs.stringify(data), config).then(
        response => {
          setSubmitted(true);
        }
      ).catch( error => {
        console.log(error);
      });
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
