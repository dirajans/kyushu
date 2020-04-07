import React from 'react';
import {
  ListItem,
  ListItemText,
} from '@material-ui/core';
import { Link as RouterLink } from 'react-router-dom';

export default function MobileLink({ onClick, href, title }){
    return (
        <ListItem
          button
          onClick={onClick}
          component={RouterLink}
          to={href}
        >
          <ListItemText primary={title} />
        </ListItem>
    )
}
