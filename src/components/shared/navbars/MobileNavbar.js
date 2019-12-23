import React, { useState } from 'react';
import {
  Toolbar,
  IconButton,
  Typography,
  List,
  Drawer
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import * as ROUTES from './../../../routes/Pages';
import MobileLink from './MobileLink';

export default function MobileNavbar(){
  const [state, setState] = useState(false);

  const toggleDrawer = () => {
    setState(!state)
  }

  return (
    <>
    <Toolbar>
      <IconButton
        edge="start"
        color="inherit"
        aria-label="menu"
        onClick={toggleDrawer}
      >
        <MenuIcon />
      </IconButton>
      <Typography variant="h6">
        Portal DiRaja Negeri Sembilan
      </Typography>
    </Toolbar>

    <Drawer anchor="top" open={state} onClose={toggleDrawer}>
      <List>
        <MobileLink onClick={toggleDrawer} href={ROUTES.UTAMA} title={'Utama'} />
        <MobileLink onClick={toggleDrawer} href={ROUTES.PENGENALAN} title={'Pengenalan'} />
        <MobileLink onClick={toggleDrawer} href={ROUTES.PENTADBIRAN} title={'Pentadbiran'} />
        <MobileLink onClick={toggleDrawer} href={ROUTES.TERKINI} title={'Terkini'} />
        <MobileLink onClick={toggleDrawer} href={ROUTES.GALERI} title={'Galeri'} />
        <MobileLink onClick={toggleDrawer} href={ROUTES.PERTANYAAN} title={'Pertanyaan'} />
      </List>
    </Drawer>
    </>
  )
}
