import React from 'react';
import {
  ListItem,
  ListItemIcon,
  ListItemText,
  ListSubheader
} from '@material-ui/core';
import DashboardIcon from '@material-ui/icons/Dashboard';
import AssignmentIcon from '@material-ui/icons/Assignment';
import SettingsIcon from '@material-ui/icons/Settings';

const ListItemChild = ({ children, route, title }) => {
  return (
    <ListItem button component={'a'} href={route}>
      <ListItemIcon>
        {children}
      </ListItemIcon>
      <ListItemText primary={title} />
    </ListItem>
  )
}

export const mainListItems = (
  <div>
    <ListSubheader inset>Action</ListSubheader>
    <ListItemChild title='Dashboard' route='/admin/dashboard'><DashboardIcon /></ListItemChild>
    <ListItemChild title='Posts' route='/admin/posts'><AssignmentIcon /></ListItemChild>
    <ListItemChild title='Settings' route='/admin/settings'><SettingsIcon /></ListItemChild>
  </div>
);