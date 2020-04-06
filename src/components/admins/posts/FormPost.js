import React, { useState } from 'react';
import {
    DialogActions,
    DialogContent,
    DialogTitle,
    Button,
    MenuItem,
    InputLabel,
    FormControl,
    Select,
    TextField,
    Chip,
    Avatar,
    CircularProgress,
    Grid,
    Typography,
} from '@material-ui/core';
import uuidv4 from 'uuid/v4';
import { firebase } from './../../../firebaseConfig';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export default function FormPost({ 
    onSubmit, 
    onCancel, 
    onDelete, 
    data,
}){
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    }
    const [readyToDelete, setReadyToDelete] = useState([]);
    const [images, setImages] = useState( data ? data.images !== undefined ? data.images : [] : []);
    const [title, setTitle] = useState(data ? data.title : '');
    const [description, setDescription] = useState(data ? data.description : '');
    const [featured, setFeatured] = useState(data ? data.featured : 'false');
    const features = ['false', 'true'];
    const [loading, setLoading] = useState(false);

    const handleChangeTitle = (event) => setTitle(event.target.value);
    const handleChangeDescription = (event) => setDescription(event.target.value);
    const handleChangeFeatured = (event) => setFeatured(event.target.value);

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

    const handleOnSubmit = async () => {
      if (!title || !description) {
        alert('Check your form');
        return;
      };

      setLoading(true);
      // send to storage
      let imgArr = [];
      let promises = images.map( async img => {
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
      })

      Promise.all(promises).then( () => {
        const newData = {
          id: data ? data.id : uuidv4(),
          title,
          description,
          featured,
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

    const handleOnCancel = () => {
      // clear
      setReadyToDelete([]);
      onCancel();
    }

    return (
        <>
        <DialogTitle>{data ? 'Edit Post' : loading ? 'Creating Post...' : 'Create Post'}</DialogTitle>
        {loading && (
          <div style={{ height: 200, paddingLeft: '45%', paddingTop: 100 }}>
            <CircularProgress />
          </div>
        )}

        {!loading && (
          <>
          <DialogContent>

          <Grid container spacing={2}>
            <Grid item lg={7}>

              <Slider {...settings}>
                {!data && images.length === 0 && (
                  <Typography variant={'caption'}>
                    No images uploaded yet.
                  </Typography>
                )}
                
                {images.map( img => (
                    <img src={img.preview || img.url} alt={''} key={img.id} />
                ))}
              </Slider>

            </Grid>
            <Grid item lg={5}>
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

              <TextField
                required
                fullWidth
                variant={'outlined'}
                name={'title'}
                value={title}
                label={'Title'}
                onChange={handleChangeTitle}
              />

              <br/><br/>

              <TextField
                required
                fullWidth
                variant={'outlined'}
                name={'description'}
                value={description}
                label={'Description'}
                onChange={handleChangeDescription}
                multiline
                rows={8}
              />
              
              <FormControl
              fullWidth
              variant={'outlined'}
              margin={'normal'}
              required
              >
                <InputLabel id={'urgency'}>
                  Featured
                </InputLabel>
                <Select
                  id={'featured'}
                  name={'featured'}
                  value={featured}
                  onChange={handleChangeFeatured}
                  labelWidth={60}
                >
                {features.map( (feature) => (
                  <MenuItem
                  key={feature}
                  value={feature}
                  >
                  {feature}
                  </MenuItem>
                ) )}
                </Select>
              </FormControl>
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