import React, { useState, useEffect } from 'react';
import {
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
  MenuItem,
  InputLabel,
  FormControl,
  Select,
  Grid,
  Typography,
  CircularProgress,
  Chip,
  Avatar,
} from '@material-ui/core';
import uuidv4 from 'uuid/v4';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import { formattedDate } from './../../shared/Utils';
import { firebase } from './../../../firebaseConfig';
import { snapshotToArray, snapshotToArr } from './../../shared/Utils';

export default function FormPicker({
  onSubmit, 
  onCancel, 
  onDelete, 
  data,
}){
  
  const [places, setPlaces] = useState([]);
  const [place, setPlace] = useState(data ? data.place : '');
  const handleChangePlace = (event) => setPlace(event.target.value);

  const [chosenDate, setChosenDate] = useState(formattedDate(new Date()));
  const handleChangeDate = (chosenDate) => {
    setChosenDate(formattedDate(chosenDate));
  }
  
  const [readyToDelete, setReadyToDelete] = useState([]);
  const [images, setImages] = useState( data ? data.images !== undefined ? data.images : [] : []);
  
  const [color, setColor] = useState('');
  const [arrOne, setArrOne] = useState([]);
  const [arrTwo, setArrTwo] = useState([]);
  const [activeArr, setActiveArr] = useState('');
  const [loading, setLoading] = useState(false);

  const fetchData = () => {
    setLoading(true);
    // firebase.database().ref('arrOne').set(['red', 'green', 'yellow', 'purple', 'orange', 'black']);
    
    firebase.database().ref('places').on('value', snap => {
      const places = snapshotToArray(snap);
      setPlaces(places);
      setLoading(false);
    });


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

    firebase.database().ref('color').on('value', snap => {
      const color = snapshotToArr(snap);
      setColor(color);
      setLoading(false);
    });

    firebase.database().ref('activeArr').on('value', snap => {
      const active = snapshotToArr(snap);
      setActiveArr(active[0]);
      setLoading(false);
    });
  }

  useEffect( () => {
    fetchData();
  }, []);

  const generate = () => {
    const randomSelector = (array) => {
      let randNum = Math.floor(Math.random() * array.length);
      return array[randNum];
    }

    let selected;
    if( activeArr === 'arrTwo' ){
      // select from arrTwo
      selected = randomSelector(arrTwo);
    }
    
    if ( activeArr === 'arrOne'){
      // select from arrOne
      selected = randomSelector(arrOne);
    }
    setColor(selected);
  }

  const ColorBox = ({ color, key }) => {
    return (
      <>
      <Grid item lg={2} key={key}>
        <div style={{ height: '170px', width: '170px', backgroundColor: color }} />
      </Grid>
      </>
    )
  }

  const handleFileUpload = (event) => {
    const files = event.target.files;
    let imgArr = [];

    [...files].map( file => {
      const type = file.type.split('/')[0];
      
      let imgObj = {};
      if ( type === 'image') {
        imgObj = {
          id: uuidv4(),
          name: file.name,
          file,
          preview: URL.createObjectURL(file),
        }
      }

      return imgArr.push(imgObj);
    });

    setImages([...imgArr, ...images]);

    event.target.files = null;
  }

  const handleDeleteImage = (id) => {
    const filtered = images.filter( img => img.id !== id);
    setReadyToDelete([id, ...readyToDelete]);
    setImages(filtered);
  }

  const handleSendStorage = () => {
    setLoading(true);
      // send to storage
      let imgArr = [];
      let promises = images.map( async img => {
        // if new addition images
        if(img.file){
          return firebase.storage().ref('images/' + img.id).put(img.file).then( async snapshot => {
            return snapshot.ref.getDownloadURL().then( async url => {
              let item = {
                id: img.id,
                name: img.file.name,
                url,
              }
              return imgArr.push(item);
            })
          })
        }

        // if already present images
        if(img.file === undefined){
          let item = {
            id: img.id,
            name: img.name,
            url: img.url,
          }
          return imgArr.push(item);
        }
      })

      Promise.all(promises).then( () => {
        const newData = {
          id: data ? data.id : uuidv4(),
          place,
          color,
          chosenDate,
          images: imgArr,
          created_at: data ? data.created_at : new Date().toString(),
          updated_at: new Date().toString(),
        }
        onSubmit(newData);
        setLoading(false);
      })
      
      if(readyToDelete.length > 0){
        readyToDelete.map(id => {
          return firebase.storage().ref('images/' + id).delete();
        })
      }
  }

  const handleFinalizePicker = () => {
    const filterMachine = (selected, array) => {
      const filtered = array.filter( arr => arr !== selected );
      return filtered;
    }
    
    let filtered;
    let newArr;
    if (activeArr === 'arrOne'){
      filtered = filterMachine(color, arrOne);
      setArrOne(filtered);
      firebase.database().ref('arrOne').set(filtered);

      newArr = [color, ...arrTwo];
      setArrTwo(newArr);
      firebase.database().ref('arrTwo').set(newArr);

      if (arrOne.length === 1){
        setActiveArr('arrTwo');
        firebase.database().ref('activeArr').set(['arrTwo']);
      }
    }

    if (activeArr === 'arrTwo'){
      filtered = filterMachine(color, arrTwo);
      setArrTwo(filtered);
      firebase.database().ref('arrTwo').set(filtered);

      newArr = [color, ...arrOne];
      setArrOne(newArr);
      firebase.database().ref('arrOne').set(newArr);

      if (arrTwo.length === 1){
        setActiveArr('arrOne');
        firebase.database().ref('activeArr').set(['arrOne']);
      }
    }
  }

  const handleOnSubmit = () => {
    if(!color || !place || !chosenDate) {
      alert('Check your form');
      return;
    }

    handleSendStorage();

    handleFinalizePicker();
  }

  const handleOnCancel = () => {
    // clear
    setReadyToDelete([]);
    onCancel();
  }

  return (
    <>
    <DialogTitle>{data ? 'Edit Occasion' : loading ? 'Creating Occasion...' : 'Create Occasion'}</DialogTitle>
    {loading && (
      <div style={{ height: 200, paddingLeft: '50%', paddingTop: 100 }}>
        <CircularProgress />
      </div>
    )}

    {!loading && (
      <>
      <DialogContent>
        
        <Grid container spacing={3}>
          <Grid item lg={4} md={4} sm={12} xs={12}>

          <Button variant={'contained'} color={'primary'} onClick={generate}>
            Generate Color
          </Button>

          <br/><br/>

          <ColorBox color={color} />
          <Typography variant={'caption'}>{color}</Typography>
          
          </Grid>
          <Grid item lg={8} md={8} sm={12} xs={12}>
            <Button
              variant="contained"
              color={'primary'}
              component="label"
            >
              Upload Images
              <input
                type="file"
                multiple
                style={{ display: "none" }}
                onChange={handleFileUpload}
              />
            </Button>

            <br/><br/>

            {images.map( img => (
              <Chip
              avatar={<Avatar src={img.preview || img.url} alt={''} />}
              key={img.id}
              size="small"
              label={img.name} 
              onDelete={() => handleDeleteImage(img.id)} 
              />
            ))}

            <br/><br/>

            <FormControl
            fullWidth
            variant={'outlined'}
            margin={'normal'}
            required
            >
              <InputLabel id={'urgency'}>
                Place
              </InputLabel>
              <Select
                id={'place'}
                name={'place'}
                value={place}
                onChange={handleChangePlace}
                labelWidth={60}
              >
              {places.map( (place) => (
                <MenuItem
                key={place.place}
                value={place.place}
                >
                {place.place}
                </MenuItem>
              ) )}
              </Select>
            </FormControl>

            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <KeyboardDatePicker
                fullWidth
                required
                inputVariant={'outlined'}
                format={'yyyy-MM-dd'}
                margin={'normal'}
                id={'chosenDate'}
                label="Occasion Date"
                value={chosenDate}
                onChange={handleChangeDate}
                KeyboardButtonProps={{
                  'aria-label': 'change date',
                }}
              />
            </MuiPickersUtilsProvider>
          </Grid>
        </Grid>

      </DialogContent>
      <DialogActions>
      <Button 
      onClick={handleOnSubmit} 
      color="primary"
      variant={'contained'}
      >
          {data ? 'Update' : 'Submit'}
      </Button>

      {data && (
          <Button onClick={onDelete} color="secondary" variant={'contained'}>
              Delete
          </Button>
      )}
      
      <Button onClick={handleOnCancel} color="primary" variant={'outlined'}>
          Cancel
      </Button>
  </DialogActions>
  </>
    )}
    
    </>
  );
}