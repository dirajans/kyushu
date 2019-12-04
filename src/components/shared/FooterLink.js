import React from 'react';
import { Link, MenuItem } from '@material-ui/core';

export default function FooterLink({ title, url }){
  return (
    <Link href={url} style={styles.link}>
      <MenuItem style={styles.font}>{title}</MenuItem>
    </Link>
  )
}

const styles = {
  link: {
    textDecoration: 'none',
  },
  font: {
    fontWeight: 'bold',
    fontSize: 13,
    color: 'grey'
  }
}
