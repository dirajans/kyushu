import React, { useState, useEffect } from 'react';
import {
  Button,
  CircularProgress,
  Grid,
  Typography,
} from '@material-ui/core';
import { firebase } from './../../../firebaseConfig';
import { snapshotToArr} from './../../shared/Utils';

export default function ColorPicker({ onGenerate }){
  const [selection, setSelection] = useState('');
  const [arrOne, setArrOne] = useState([]);
  const [arrTwo, setArrTwo] = useState([]);
  const [activeArr, setActiveArr] = useState('arrOne');
  const [loading, setLoading] = useState(false);

  const fetchData = () => {
    setLoading(true);
    // firebase.database().ref('arrOne').set(['red', 'green', 'yellow', 'purple', 'orange', 'black']);

    firebase.database().ref('arrOne').on('value', snap => {
      const arrOne = snapshotToArr(snap);
      setArrOne(arrOne);
      setLoading(false);
    });

    firebase.database().ref('arrTwo').on('value', snap => {
      const arrTwo = snapshotToArr(snap);
      setArrTwo(arrTwo);
      setLoading(false);
    });

    firebase.database().ref('selection').on('value', snap => {
      const selection = snapshotToArr(snap);
      setSelection(selection);
      setLoading(false);
      onGenerate(selection);
    });
  }

  useEffect( () => {
    fetchData();
  });

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
      firebase.database().ref('arrTwo').set(filtered);

      const newArr = [selected, ...arrOne];
      firebase.database().ref('arrOne').set(newArr)

      firebase.database().ref('selection').set([selected]);
      onGenerate(selected);
      
      if (arrTwo.length === 1) setActiveArr('arrOne');
    }
    
    if ( activeArr === 'arrOne'){
      // filter arrOne
      const { filtered, selected } = filterMachine(arrOne);
      firebase.database().ref('arrOne').set(filtered);

      const newArr = [selected, ...arrTwo];
      firebase.database().ref('arrTwo').set(newArr);

      firebase.database().ref('selection').set([selected]);
      onGenerate(selected);

      if (arrOne.length === 1) setActiveArr('arrTwo');
    }

  }

  const ColorBox = ({ color, key }) => {
    return (
      <>
      <Grid item lg={2} key={key}>
        <div style={{ height: '150px', width: '150px', backgroundColor: color }} />
      </Grid>
      </>
    )
  }

  return (
      <>
    {loading && (
        <div style={{ height: 200, paddingLeft: '50%', paddingTop: 100 }}>
            <CircularProgress />
        </div>
    )}

    {!loading && (
        <>
        <Button variant={'contained'} color={'primary'} onClick={generate}>
          Generate Color
        </Button>

        <br/><br/>

        <ColorBox color={selection} />
        <Typography variant={'caption'}>{selection}</Typography>
        </>
    )}
    </>
  )

}