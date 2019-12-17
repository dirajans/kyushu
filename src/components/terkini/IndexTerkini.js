import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  GridList,
  GridListTile,
  GridListTileBar,
  Dialog,
  DialogTitle,
  DialogActions,
  DialogContent,
  Typography,
  Button
} from '@material-ui/core';

import { bg, ns, backdrop, peta } from './../../images/IndexImages';
import PageContainer from './../shared/PageContainer';

const tileData = [
  {
    img: bg,
    title: 'bg',
    author: 'ali',
    featured: true,
  },
  {
    img: ns,
    title: 'bg',
    author: 'ali',
    featured: false,
  },
  {
    img: peta,
    title: 'bg',
    author: 'ali',
    featured: false,
  },
  {
    img: backdrop,
    title: 'bg',
    author: 'ali',
    featured: false,
  },
  {
    img: bg,
    title: 'bg',
    author: 'ali',
    featured: true,
  },
  {
    img: bg,
    title: 'bg',
    author: 'ali',
    featured: false,
  },
  {
    img: bg,
    title: 'bg',
    author: 'ali',
    featured: false,
  },
  {
    img: bg,
    title: 'bg',
    author: 'ali',
    featured: true,
  },
]

export default function AdvancedGridList() {
  const classes = useStyles();

  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  }

  const handleClose = () => {
    setOpen(false);
  }

  return (
    <PageContainer>
      <GridList cellHeight={500} spacing={1} cols={4}>
        {tileData.map(tile => (
          <GridListTile key={tile.img} cols={tile.featured ? 2 : 1} onClick={handleClickOpen}>
            <img src={tile.img} alt={tile.title} />
            <GridListTileBar
              title={<span style={{ fontSize: 30 }}>{tile.title}</span>}
              subtitle={'24th June, 2019'}
              titlePosition={'bottom'}
              className={classes.titleBar}
            />
          </GridListTile>
        ))}
      </GridList>

      <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open} fullWidth={true} maxWidth={'lg'}>
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          Modal title
        </DialogTitle>
        <DialogContent dividers>
        <img src={ns} alt={''} />
          <Typography gutterBottom>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
            in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose} color="primary">
            Save changes
          </Button>
        </DialogActions>
      </Dialog>

    </PageContainer>
  );
}

const useStyles = makeStyles(theme => ({
  gridList: {
    width: 500,
    height: 450,
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
  },
  titleBar: {
    background:
      'linear-gradient(to top, rgba(0,0,0,0.7) 0%, ' +
      'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
  icon: {
    color: 'white',
  },
}));
