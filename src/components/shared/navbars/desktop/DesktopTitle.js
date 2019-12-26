import React from 'react';
import { MenuItem } from '@material-ui/core';

export default function DesktopTitle({ title }){
  return (
    <MenuItem style={styles.font}>{title}</MenuItem>
  )
}

const styles = {
  font: {
    fontWeight: 'bold',
    fontSize: 15,
    color: 'black',
    paddingBottom: 15,
  }
}
