import React from 'react';
import Typography from '@material-ui/core/Typography';

export default function Copyright(){
    return (
      <Typography variant="body2" color="textSecondary" align="center">
        Hakcipta Kerajaan Negeri Sembilan Darul Khusus
        {' © '}
        {new Date().getFullYear()}
      </Typography>
    );
}