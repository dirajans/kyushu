import React from 'react';
import { Link, MenuItem } from '@material-ui/core';
import { Link as RouterLink } from 'react-router-dom';

export default function FooterLink({ title, url, newTab }){
  return (
    <Link component={RouterLink} to={url} target={newTab ? '_blank' : '_self'} underline={'none'}>
      <MenuItem style={styles.font}>{title}</MenuItem>
    </Link>
  )
}

const styles = {
  font: {
    fontWeight: 'bold',
    fontSize: 13,
    color: 'grey'
  }
}
