import React, { useState } from 'react';
import {
  Avatar,
  Button,
  TextField,
  Link,
  Grid,
  Box,
  Typography,
  Container,
  CircularProgress,
} from '@material-ui/core';
import { styles } from './Styles';
import CheckIcon from '@material-ui/icons/Check';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { firebase } from './../../firebaseConfig';

export default function ForgotPassword() {
  const [ values, setValues ] = useState(0);
  const [ loading, setLoading ] = useState(false);
  const [ success, setSuccess ] = useState(false);
  const [ email2, setEmail ] = useState('');

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  const handleSubmitReset = async (evt) => {
    evt.preventDefault();
    const { email } = values;
    setEmail(email);
    if (email === undefined) {
      alert('Invalid email address')
    } else {
      setLoading(true);
      await firebase.auth().sendPasswordResetEmail(email).then( () => {
        setLoading(false);
        setSuccess(true);
      })
      .catch( (error) => {
        setLoading(false);
        alert(error.toString());
      });
    }
  }

  return (
    <Container component="main" maxWidth="xs">
      <div className={styles.paper}>
        <Avatar className={styles.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Portal Diraja Negeri Sembilan
        </Typography>

        {success && (
          <>
          <Grid
          container
          direction="column"
          alignItems="center"
          justify="center"
          style={{ paddingTop: 100, paddingBottom: 100 }}
          >
            <Avatar className={styles.avatar}>
              <CheckIcon color={'green'} />
            </Avatar>
            <Typography component="h1" variant="h6" style={{ textAlign: 'center' }}>
              Reset instruction has been sent to {email2}!
              <br />
              <br />
              Please check your email
            </Typography>
          </Grid>
          </>
        )}

        {!success && (
          <>
          <br /><br />
          <Typography component="h1" variant="h5">
            Password Reset
          </Typography>
          <form className={styles.form} noValidate onSubmit={handleSubmitReset}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={handleChange('email')}
            />

            <div className={styles.wrapper}>
            <Button
              type="submit"
              fullWidth
              disabled={loading}
              variant="contained"
              color="primary"
              className={styles.submit}
            >
              Reset
            </Button>
            {loading && <CircularProgress size={24} className={styles.buttonProgress} />}
            </div>
          </form>
          </>
        )}

        <Grid
          container
          direction="column"
          alignItems="center"
          justify="center"
        >
          <Grid item xs>
            <Link href="/admin/signin" variant="body2">
              Go to Sign In page
            </Link>
          </Grid>
        </Grid>
      </div>
      <Box mt={8}>
        
      </Box>
    </Container>
  )
}