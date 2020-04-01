import React from 'react';
import {
  Paper,
  Typography,
} from '@material-ui/core';
import PageContainer from '../../shared/containers/AdminContainer';

export default function Dashboard(){

  return (
    <PageContainer name={'Dashboard'}>
      <Paper style={{ padding: '20px'}}>
        <Typography variant={'h5'}>
          Random Picker
        </Typography>
      </Paper>
    </PageContainer>
  )
}
