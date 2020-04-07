import React, { useState, useEffect } from 'react';
import {
  GridList,
  GridListTile,
  GridListTileBar,
  Dialog,
  DialogTitle,
  DialogActions,
  DialogContent,
  Typography,
  Button,
} from '@material-ui/core';
import PageContainer from '../../shared/containers/PageContainer';
import ErrorMessage from './../../shared/ErrorMessage';
import EmptyMessage from './../../shared/EmptyMessage';
import Loading from './../../shared/Loading';
import { css } from 'aphrodite';
import { styles } from './Styles';
import { firebase } from './../../../firebaseConfig';
import { snapshotToArray } from './../../shared/Utils';

import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export default function IndexTerkini() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  }

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const [open, setOpen] = useState(false);
  const [dialogData, setDialogData] = useState({});

  const fetchPosts = () => {
    setLoading(true);
    firebase.database().ref('posts').on('value', snap => {
      const posts = snapshotToArray(snap);
      setData(posts);
      setLoading(false);
    })
  }

  useEffect( () => {
    fetchPosts();
  }, []);

  const handleClickOpen = (item) => {
    setDialogData(item);
    setOpen(true);
  }

  const handleClose = () => {
    setOpen(false);
  }

  const ModalDialog = () => {
    const { id, title, description, images, created_at, updated_at } = dialogData;
    return (
      <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        fullWidth={true}
        maxWidth={'lg'}
      >
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          {title}
        </DialogTitle>

        <DialogContent dividers>
          <Slider {...settings}>
            {images !== undefined && images.map( img => (
              <img src={img.url} alt={''} key={img.id} />
            ))}
            {images === undefined && (
              <Typography variant={'caption'}>
                  No images uploaded yet.
              </Typography>
            )}
          </Slider>
          <br/><br/>
          <Typography variant={'caption'} gutterBottom>
          Posted by {''} at {created_at}
          <br/>
          Last updated at {updated_at}
          </Typography>
          <br/><br/>
          <Typography gutterBottom style={{ textAlign: 'justify' }}>
            {description}
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    )
  }

  return (
    <PageContainer>
    {loading && (
      <Loading />
    )}

    {!loading && !error && (
      <>
      {data.length > 0 && (
        <GridList cellHeight={300} spacing={1} cols={4}>
          {data.map(item => (
            <GridListTile key={item.title} cols={item.featured === 'true' ? 2 : 1} onClick={() => { handleClickOpen(item) }}>
              <Slider {...settings}>
                {item.images !== undefined && item.images.map( img => (
                  <img src={img.url} alt={''} key={img.id} />
                ))}
                {item.images === undefined && (
                  <Typography variant={'caption'}>
                      No images uploaded yet.
                  </Typography>
                )}
              </Slider>
              <GridListTileBar
                title={<span style={{ fontSize: 30 }}>{item.title}</span>}
                subtitle={item.created_at}
                titlePosition={'bottom'}
                className={css(styles.titleBar)}
              />
            </GridListTile>
          ))}
        </GridList>
      )}
      {data.length === 0 && (
        <EmptyMessage />
      )}
      </>
    )}

    {!loading && error && (
      <ErrorMessage />
    )}

    {open && (
      <ModalDialog />
    )}

    </PageContainer>
  );
}
