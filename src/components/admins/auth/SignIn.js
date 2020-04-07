import React, { useState } from 'react';
import {
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
import { firebase } from './../../../firebaseConfig';
import Copyright from './../../shared/Copyright';
import { ns } from './../../images/IndexImages';
import { Link as RouterLink } from 'react-router-dom';
import * as ROUTES from './../../../routes/Pages';

export default function SignIn() {
  const classes = useStyles();

  const [ values, setValues ] = useState(0);
  const [ loading, setLoading ] = useState(false);

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    const { email, password } = values;

    if (email === undefined || password === undefined) {
      alert('Sila semak alamat emel dan kata laluan anda')
    } else {
      setLoading(true);
      await firebase.auth().signInWithEmailAndPassword(email, password)
      .then( (result) => {
        localStorage.setItem('currentUser', JSON.stringify(result.user));
        setLoading(false);
        window.open( process.env.PUBLIC_URL + '/#' + ROUTES.DASHBOARD, '_self');
      })
      .catch( (error) => {
        setLoading(false);
        alert(error.toString());
      });
    }
  }

  const goToHome = () => {
    window.open( process.env.PUBLIC_URL , '_self');
  }

  return (
    <Container component="main" maxWidth="xs">
      <div className={classes.paper}>

        <img style={{ width: 300 }} src={ns} alt={'jata'} onClick={goToHome} />
        <Typography component="h1" variant={'h5'} style={{ fontFamily: 'Great Vibes'}}>
          Portal Diraja Negeri Sembilan
        </Typography>

        <br /><br />
        <Typography component="h1" variant="h5">
          Log Masuk
        </Typography>
        <form className={classes.form} noValidate onSubmit={handleSubmit}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Alamat Emel"
            name="email"
            autoComplete="off"
            autoFocus
            onChange={handleChange('email')}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Kata Laluan"
            type="password"
            id="password"
            autoComplete="off"
            onChange={handleChange('password')}
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
            Log Masuk
          </Button>
          {loading && <CircularProgress size={24} className={classes.buttonProgress} />}
          </div>

          <Grid
            container
            direction="column"
            alignItems="center"
            justify="center"
          >
            <Grid item xs>
              <Link component={RouterLink} to={ROUTES.FORGOTPASSWORD} variant="body2">
                Terlupa kata laluan?
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}