import React from 'react';
import { Link, MenuItem } from '@material-ui/core';

export default function FooterLink({ title, url, newTab }){
  return (
    <Link href={url} target={newTab ? '_blank' : '_self'} underline={'none'}>
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
