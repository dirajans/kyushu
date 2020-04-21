import React from 'react';
import {
  ListItem,
  ListItemIcon,
  ListItemText,
  ListSubheader
} from '@material-ui/core';
import DashboardIcon from '@material-ui/icons/Dashboard';
import AssignmentIcon from '@material-ui/icons/Assignment';
import QuestionIcon from '@material-ui/icons/QuestionAnswer';
import SettingsIcon from '@material-ui/icons/Settings';
import { Link as RouterLink } from 'react-router-dom';
import * as ROUTES from './../../../routes/Pages';

const ListItemChild = ({ children, route, title }) => {
  return (
    <ListItem button component={RouterLink} to={route}>
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
    <ListItemChild title='Dashboard' route={ROUTES.DASHBOARD}><DashboardIcon /></ListItemChild>
    <ListItemChild title='Posts' route={ROUTES.POST}><AssignmentIcon /></ListItemChild>
    <ListItemChild title='Pertanyaan' route={ROUTES.PERTANYAANADMIN}><QuestionIcon /></ListItemChild>
    <ListItemChild title='Settings' route={ROUTES.SETTINGS}><SettingsIcon /></ListItemChild>
  </div>
);