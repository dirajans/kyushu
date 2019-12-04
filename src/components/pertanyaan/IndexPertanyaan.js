import React from 'react';
import Navbar from './../shared/Navbar';
import Footer from './../shared/Footer';
import { Paper, Grid, Container, Card, CardActionArea, CardMedia, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    card: {
      maxWidth: 1000,
    },
    media: {
      height: 140,
    },
  });

export default function IndexPertanyaan(){
const classes = useStyles();

 return (
    <>
        <Navbar />

        <Container>
            <Card className={classes.card}>
                <CardActionArea>
                    <CardMedia
                    className={classes.media}
                    image="https://picsum.photos/400/300"
                    title="Contemplative Reptile"
                    />
                </CardActionArea>
            </Card>
        </Container>
        
        <Footer />
    </>
    )
}