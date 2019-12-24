import React from 'react';
import { Link, MenuItem } from '@material-ui/core';

export default function NavbarLink({ title, url, onMouseOver }){
  return (
    <div onMouseOver={onMouseOver}>
      <Link href={url} style={styles.link}>
        <MenuItem style={styles.font}>{title}</MenuItem>
      </Link>
    </div>
  )
}

const styles = {
  link: {
    textDecoration: 'none',
  },
  font: {
    fontWeight: 'bold',
    fontSize: 14,
    color: 'grey'
  }
}
