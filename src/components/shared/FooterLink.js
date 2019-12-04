import React from 'react';
import { Link, MenuItem } from '@material-ui/core';

export default function FooterLink({ title, url, newTab }){
  if (newTab) {
    return (
      <Link href={url} target={'_blank'} underline={'none'}>
        <MenuItem style={styles.font}>{title}</MenuItem>
      </Link>
    )
  } else {
    return (
      <Link href={url} underline={'none'}>
        <MenuItem style={styles.font}>{title}</MenuItem>
      </Link>
    )
  }
}

const styles = {
  font: {
    fontWeight: 'bold',
    fontSize: 13,
    color: 'grey'
  }
}
