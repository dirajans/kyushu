import React, { useState } from 'react';
import {
  Paper,
  Typography,
  Button,
  Grid,
} from '@material-ui/core';
import PageContainer from '../../shared/containers/AdminContainer';
import { firebase } from './../../../firebaseConfig';

export default function Dashboard(){
  const [selection, setSelection] = useState('');

  const [arrOne, setArrOne] = useState(['green', 'yellow', 'blue', 'purple', 'red', 'black', 'orange']);
  const [arrTwo, setArrTwo] = useState([]);
  const [activeArr, setActiveArr] = useState('arrOne');

  const filterMachine = (array) => {
    let randNum = Math.floor(Math.random() * array.length);
    const selected = array[randNum];
    const filtered = array.filter( arr => arr !== selected);
    return {filtered, selected};
  }

  const generate = () => {

    if( activeArr === 'arrTwo' ){
      // filter arrTwo
      const { filtered, selected } = filterMachine(arrTwo);
      setArrTwo(filtered);

      setArrOne([selected, ...arrOne]);

      setSelection(selected);

      if (arrTwo.length === 1) setActiveArr('arrOne');
    }
    
    if ( activeArr === 'arrOne'){
      // filter arrOne
      const { filtered, selected } = filterMachine(arrOne);
      setArrOne(filtered);

      setArrTwo([selected, ...arrTwo]);

      setSelection(selected);

      if (arrOne.length === 1) setActiveArr('arrTwo');
    }
  }

  return (
    <PageContainer name={'Dashboard'}>
      <Paper style={{ padding: '20px'}}>
        <Typography variant={'h5'}>
          Random Picker
        </Typography>

        <br/>

        <Button variant={'contained'} color={'primary'} onClick={generate}>
          Generate
        </Button>

        <br/><br/><br/>

        <Grid container spacing={2}>
          {arrOne.map( color => (
            <Grid item lg={2}>
            <div style={{ height: '100px', width: '100px', backgroundColor: color }} />
            </Grid>
          ))}
        </Grid>

        <br/>

        <Grid container spacing={2}>
          {arrTwo.map( color => (
            <Grid item lg={2}>
            <div style={{ height: '100px', width: '100px', backgroundColor: color }} />
            </Grid>
          ))}
        </Grid>

            <br/>
        <hr/>
        <br/>
        <h2>Selected Color:</h2>
        <h3>{selection}</h3>
        <div style={{ height: '100px', width: '100px', backgroundColor: selection }} />

      </Paper>
    </PageContainer>
  )
}
