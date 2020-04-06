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
} from '@material-ui/core';
import uuidv4 from 'uuid/v4';
import { firebase } from './../../../firebaseConfig';

export default function FormPost({ 
    onSubmit, 
    onCancel, 
    onDelete, 
    data,
}){
    const [images, setImages] = useState([]);
    const [title, setTitle] = useState(data ? data.title : '');
    const [description, setDescription] = useState(data ? data.description : '');
    const [featured, setFeatured] = useState(data ? data.featured : 'false');
    const features = ['false', 'true'];

    const handleChangeTitle = (event) => setTitle(event.target.value);
    const handleChangeDescription = (event) => setDescription(event.target.value);
    const handleChangeFeatured = (event) => setFeatured(event.target.value);

    const handleFileUpload = (event) => {
      const files = event.target.files;
      let imgArr = [];

      [...files].map( file => {
        const type = file.type.split('/')[0];
        
        if ( type === 'image') {
          const imgObj = {
            id: uuidv4(),
            file,
            preview: URL.createObjectURL(file),
          }
          imgArr.push(imgObj);
        }
      });

      setImages(imgArr);
    }

    const handleDeleteImage = (id) => {
      const filtered = images.filter( img => img.id !== id);
      setImages(filtered);
    }

    const handleOnSubmit = async () => {
      if (!title || !description) {
        alert('Check your form');
        return;
      };

      // send to storage
      let imgArr = [];
      images.map( img => {
        const uploadTask = firebase.storage().ref('images/' + img.file.name).put(img.file);
        
        uploadTask.on('state_changed', snapshot => {
          console.log(snapshot.state);
          
        }, error => {
          console.log(error);
          
        }, () => {
          uploadTask.snapshot.ref.getDownloadURL().then( url => {
            imgArr.push(url);
          })
        })
        return imgArr;
      })
      console.log(imgArr);

      // then modify the object for image url
      const newData = {
        id: data ? data.id : uuidv4(),
        title,
        description,
        featured,
        created_at: data ? data.created_at : new Date().toString(),
        updated_at: new Date().toString(),
      }
      onSubmit(newData);
    }

    return (
        <>
        <DialogTitle>Manage Post</DialogTitle>
        <DialogContent>
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
            avatar={<Avatar src={img.preview} alt={''} />}
            key={img.id}
            size="small"
            label={img.file.name} 
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
            
            <Button onClick={onCancel} color="primary" variant={'outlined'}>
                Cancel
            </Button>
        </DialogActions>
        </>
    );
}