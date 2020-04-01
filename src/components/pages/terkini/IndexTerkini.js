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
import Loading from './../../shared/Loading';
import { css } from 'aphrodite';
import { styles } from './Styles';
import { ns } from './../../images/IndexImages';
import { firebase } from './../../../firebaseConfig';
import { snapshotToArray } from './../../shared/Utils';

export default function IndexTerkini() {
  const [tileData, setTileData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const [open, setOpen] = useState(false);
  const [dialogData, setDialogData] = useState({});

  const fetchPosts = async () => {
    setLoading(true);
    await firebase.database().ref('posts').once('value', snap => {
      const posts = snapshotToArray(snap);
      setTileData(posts);
      setLoading(false);
    })
    .catch( error => {
      console.log(error);
      setError(error);
      setLoading(false);
    })
  }

  useEffect( () => {
    fetchPosts();
  }, []);

  const handleClickOpen = (data) => {
    setDialogData(data);
    setOpen(true);
  }

  const handleClose = () => {
    setOpen(false);
  }

  const ModalDialog = () => {
    return (
      <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        fullWidth={true}
        maxWidth={'lg'}
      >
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          {dialogData.title}
        </DialogTitle>

        <DialogContent dividers>
        {dialogData.images.length !== 0 && dialogData.images.map( (image) => (
          <img
            key={image.hash}
            src={image.url}
            alt={''}
            style={{ maxWidth: '100%', margin: 'auto' }}
          />
        ))}
        <br/><br/>
        <Typography variant={'caption'} gutterBottom>
        Posted by {dialogData.user.username} at {dialogData.created_at}
        </Typography>
        <br/><br/>
          <Typography gutterBottom style={{ textAlign: 'justify' }}>
            {dialogData.description}
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
      <GridList cellHeight={500} spacing={1} cols={4}>
        {tileData.map(tile => (
          <GridListTile key={tile.title} cols={tile.featured ? 2 : 1} onClick={() => { handleClickOpen(tile) }}>
            <img src={ ns } alt={tile.title} />
            <GridListTileBar
              title={<span style={{ fontSize: 30 }}>{tile.title}</span>}
              subtitle={tile.created_at}
              titlePosition={'bottom'}
              className={css(styles.titleBar)}
            />
          </GridListTile>
        ))}
      </GridList>
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
