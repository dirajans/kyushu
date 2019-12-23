import React, { useState } from 'react';
import {
  ListItem,
  ListItemText,
} from '@material-ui/core';

export default function MobileLink({ onClick, href, title }){
    return (
        <ListItem
          button
          onClick={onClick}
          component={'a'}
          href={href}
        >
          <ListItemText primary={title} />
        </ListItem>
    )
}