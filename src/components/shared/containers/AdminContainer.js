import React, { useState } from 'react';
import clsx from 'clsx';
import {
  Drawer,
  AppBar,
  Toolbar,
  List,
  Typography,
  Divider,
  IconButton,
  MenuItem,
  Menu,
  Container,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { firebase } from '../../../firebaseConfig';
import { mainListItems } from './ListItems';
import { useStyles } from './AdminStyles';

export default function PageContainer({ children, name }) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const [anchorProfileEl, setAnchorProfileEl] = useState(null);

  const isProfileMenuOpen = Boolean(anchorProfileEl);

  const handleProfileClose = () => {
    setAnchorProfileEl(null);
  };

  const handleProfileMenuOpen = event => {
    setAnchorProfileEl(event.currentTarget);
  };

  const handleSignOutPress = async () => {
    await firebase.auth().signOut()
    .then( () => {
      localStorage.setItem('currentUser', null);
      window.open('/admin/signin', '_self');
    })
    .catch( (error) => {
      alert(error.toString());
    });
  }

  const menuProfileId = 'profile-menu';
  const renderProfileMenu = (
    <Menu
      anchorEl={anchorProfileEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuProfileId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isProfileMenuOpen}
      onClose={handleProfileClose}
    >
      {/* <MenuItem onClick={handleProfileOpenPage} >My Profile</MenuItem> */}
      <MenuItem onClick={ () => handleSignOutPress() } >Sign Out</MenuItem>
    </Menu>
  );

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
          >
            <MenuIcon />
          </IconButton>
          <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
            {name}
          </Typography>

          <IconButton
            edge="end"
            aria-label="account of current user"
            aria-controls={menuProfileId}
            aria-haspopup="true"
            onClick={handleProfileMenuOpen}
            color="inherit"
          >
            <AccountCircleIcon />
          </IconButton>

        </Toolbar>
      </AppBar>
      
      {renderProfileMenu}

      <Drawer
        variant="permanent"
        classes={{
          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
        }}
        open={open}
      >
        <div className={classes.toolbarIcon}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <List>{mainListItems}</List>

      </Drawer>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          {children}
        </Container>
        
      </main>
    </div>
  );
}