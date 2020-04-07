import React from 'react';
import { Link, MenuItem } from '@material-ui/core';
import { Link as RouterLink } from 'react-router-dom';

export default function DesktopLink({ title, url, onMouseOver, header }){
  return (
    <div onMouseOver={onMouseOver}>
      <Link component={RouterLink} to={url} style={styles.link}>
        <MenuItem style={{...styles.font, color: header ? 'black' : 'grey'}}>{title}</MenuItem>
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
    paddingTop: 15,
    paddingBottom: 15,
  }
}
