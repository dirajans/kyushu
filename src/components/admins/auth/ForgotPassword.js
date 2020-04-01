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
import { useStyles } from './Styles';
import CheckIcon from '@material-ui/icons/Check';
import { firebase } from './../../../firebaseConfig';
import Copyright from './../../shared/Copyright';
import { ns } from './../../images/IndexImages';

export default function ForgotPassword() {
  const classes = useStyles();

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

  const goToHome = () => {
    window.open('/', '_self');
  }

  return (
    <Container component="main" maxWidth="xs">
      <div className={classes.paper}>
        <img style={{ width: 300 }} src={ns} alt={'jata'} onClick={goToHome} />
        <Typography component="h1" variant={'h5'} style={{ fontFamily: 'Great Vibes'}}>
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
            <Avatar className={classes.avatar}>
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
            Set Semula Kata Laluan
          </Typography>
          <form className={classes.form} noValidate onSubmit={handleSubmitReset}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Alamat Emel"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={handleChange('email')}
            />

            <div className={classes.wrapper}>
            <Button
              type="submit"
              fullWidth
              disabled={loading}
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Set Semula
            </Button>
            {loading && <CircularProgress size={24} className={classes.buttonProgress} />}
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
              Pergi ke halaman Log Masuk
            </Link>
          </Grid>
        </Grid>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  )
}