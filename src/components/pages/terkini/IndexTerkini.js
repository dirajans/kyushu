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
import PageContainer from './../../shared/PageContainer';
import ErrorMessage from './../../shared/ErrorMessage';
import Loading from './../../shared/Loading';
import { css } from 'aphrodite';
import { styles } from './Styles';
import axios from 'axios';

export default function IndexTerkini() {
  const [tileData, setTileData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchData = async () => {
    const url = 'http://localhost:1337/posts'
    setLoading(true);
    await axios.get(url)
      .then( res => {
        setTileData(res.data);
      })
      .catch( error => {
        setError(true);
        console.log(error);
      })
    setLoading(false);
  }

  useEffect( () => {
    fetchData();
  }, []);

  const [open, setOpen] = useState(false);
  const [dialogData, setDialogData] = useState({});

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
            style={{ objectFit: 'contain' }}
          />
        ))}
        <br/><br/>
        <Typography variant={'caption'} gutterBottom>
        Posted by {dialogData.user.username} at {dialogData.created_at}
        </Typography>
        <br/><br/>
          <Typography gutterBottom>
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
          <GridListTile key={tile.img} cols={tile.featured ? 2 : 1} onClick={() => { handleClickOpen(tile) }}>
            <img src={tile.images[0].url} alt={tile.title} />
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
