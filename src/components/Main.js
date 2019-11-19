import React from 'react';

import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import Container from '@material-ui/core/Container';
import Markdown from './Markdown';
import post1 from './blog-post.1.md';

import Navbar from './Navbar';
import Footer from './Footer';
import Sidebar from './Sidebar';
import MainFeaturePost from './MainFeaturePost';
import SubFeaturePost from './SubFeaturePost';

import useStyles from './Styles';

const posts = [post1];

export default function Main() {
  const classes = useStyles();

  return (
    <div>
      <Container maxWidth="lg">
        <Navbar />

          <MainFeaturePost />

          <SubFeaturePost />

          <Grid container spacing={5} className={classes.mainGrid}>
            {/* Main content */}
            <Grid item xs={12} md={8}>
              <Typography variant="h6" gutterBottom>
                From the Firehose
              </Typography>
              <Divider />
              {posts.map(post => (
                <Markdown className={classes.markdown} key={post.substring(0, 40)}>
                  {post}
                </Markdown>
              ))}
            </Grid>
            {/* End main content */}
            
            <Sidebar />
          
          </Grid>

      </Container>

      <Footer />

    </div>
  );
}