import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  List,
  ListItem,
  ListItemText,
  Drawer
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import pages from './../Pages';

export default function MobileNavbar(){
  const [state, setState] = useState(false);

  const toggleDrawer = () => {
    setState(!state)
  }

  return (
    <>
    <AppBar position="static" color={'default'}>
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
    </AppBar>

    <Drawer anchor="top" open={state} onClose={toggleDrawer}>
      <List>
        {pages.map( (page) => (
          <ListItem
            key={page.name+'navbar'}
            button
            onClick={toggleDrawer}
            component={'a'}
            href={page.href}
          >
            <ListItemText primary={page.name} />
          </ListItem>
        ))}
      </List>
    </Drawer>
    </>
  )
}
