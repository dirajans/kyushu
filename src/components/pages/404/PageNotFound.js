import React from 'react';
import {
  Box,
  Typography,
  Container,
  Link,
} from '@material-ui/core';
import Copyright from './../../shared/Copyright';
import { ns } from './../../images/IndexImages';
import { makeStyles } from '@material-ui/core/styles';
import { Link as RouterLink } from 'react-router-dom';

export default function SignIn() {
  const classes = useStyles();

  const goToHome = () => {
    window.open(process.env.PUBLIC_URL, '_self');
  }

  return (
    <Container component="main" maxWidth="xs">
      <div className={classes.paper}>

        <img style={{ width: 300 }} src={ns} alt={'jata'} onClick={goToHome} />
        <Typography component="h1" variant={'h5'} style={{ fontFamily: 'Great Vibes'}}>
          Portal Diraja Negeri Sembilan
        </Typography>

        <br /><br />
        <Typography component="h1" variant="h3">
          404
        </Typography>
        <Typography component="h1" variant="h5">
          Page Not Found
        </Typography>

        <br /><br />
        <Link component={RouterLink} to={process.env.PUBLIC_URL} variant="body2">
          Kembali ke halaman utama
        </Link>
        
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
}));