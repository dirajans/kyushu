import React, { useState, useEffect } from 'react';
import {
  Typography,
  GridList,
  GridListTile,
  CircularProgress,
  Grid,
} from '@material-ui/core';
import { css } from 'aphrodite';
import { styles } from './Styles';
import axios from 'axios';
import PageContainer from './../shared/PageContainer';
import { domain } from './../shared/config';

export default function IndexGaleri(){
    const [tileData, setTileData] = useState([]);
    const [loading, setLoading] = useState(false);

    const url = domain + '/upload/files';
    const fetchImages = async () => {
      setLoading(true);
      await axios.get(url).then(
        response => {
          setTileData(response.data);
        }
      ).catch( error => {
        console.log(error);
      });
      setLoading(false);
    }

    useEffect( () => {
      fetchImages();
    }, [])

    return (
        <PageContainer>

        <Typography
          variant={'h4'}
          align={'center'}
          className={css(styles.title)}
        >
          Galeri
        </Typography>

        {loading && (
          <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justify="center"
            className={css(styles.circular)}
          >
            <Grid item lg={12} align={'center'}>
              <CircularProgress />
            </Grid>
          </Grid>
        )}

        {!loading && (
          <GridList
            cellHeight={160}
            spacing={1}
            cols={3}
            style={{ paddingBottom: 1 }}
          >
            {tileData.map(tile => (
              <GridListTile key={tile.hash} cols={1} rows={2}>
                <img src={tile.url} alt={''} />
              </GridListTile>
            ))}
          </GridList>
        )}

        </PageContainer>
    )
}
