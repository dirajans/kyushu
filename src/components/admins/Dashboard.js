import React from 'react';
import {
  Typography,
  Container,
  Button,
} from '@material-ui/core';
import { firebase } from './../../firebaseConfig';

export default function Dashboard(){
  
  const handleSignOut = async () => {
    await firebase.auth().signOut()
    .catch( error => {
      console.log(error);
    })
  }

  return (
    <Container>
      <Typography>
      Admin Dashboard page
      </Typography>
      <Button onClick={handleSignOut}>
        Sign Out
      </Button>
    </Container>
  )
}
