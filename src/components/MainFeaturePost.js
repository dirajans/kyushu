import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

import useStyles from './Styles';

function MainFeaturePost(){
    const classes = useStyles();

    return (
        <div>
        <Paper className={classes.mainFeaturedPost}>
          <Container>

        <Grid container>
          <Grid item md={6}>
            <div className={classes.mainFeaturedPostContent}>
              <Typography component="h1" variant="h3" color="inherit" gutterBottom>
                Header
              </Typography>
              <Typography variant="h5" color="inherit" paragraph>
                Subheader
              </Typography>
            </div>
          </Grid>
        </Grid>

      </Container>
      </Paper>
      </div>
    )
}

export default MainFeaturePost;