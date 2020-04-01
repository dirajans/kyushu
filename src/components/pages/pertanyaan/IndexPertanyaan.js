import React, { useState } from 'react';
import {
  Container,
} from '@material-ui/core';
import PageContainer from './../../shared/PageContainer';
import CardForm from './CardForm';
import Submitted from './Submitted';
import { css }from 'aphrodite';
import { styles } from './Styles';
import { firebase } from './../../../firebaseConfig';

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
<<<<<<< HEAD
      // send to firebase
      firebase.database().ref('pertanyaan/' + data.id).set(data);
=======
      // const url = 'http://18.139.3.116:1337/inquiries';
      // send to db
      // await axios({
      //   method: 'post',
      //   url: url,
      //   data: qs.stringify(data),
      //   headers: {
      //     'content-type': 'application/x-www-form-urlencoded;charset=utf-8'
      //   }
      // });

>>>>>>> 0def6d71c5c81506925c490fc187095b7c5a6546
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
