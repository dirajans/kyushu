import React from 'react';
import { MenuItem } from '@material-ui/core';

export default function FooterTitle({ title }){
  return (
    <MenuItem style={styles.font}>{title}</MenuItem>
  )
}

const styles = {
  font: {
    fontWeight: 'bold',
    fontSize: 15,
    color: 'white',
  }
}
