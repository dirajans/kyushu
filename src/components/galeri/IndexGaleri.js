import React, { useState, useEffect } from 'react';
import {
  Typography,
  GridList,
  GridListTile,
  GridListTileBar,
  CircularProgress,
  Grid,
} from '@material-ui/core';
import { css } from 'aphrodite';
import { styles } from './Styles';
import axios from 'axios';
import PageContainer from './../shared/PageContainer';

export default function IndexGaleri(){
    const [tileData, setTileData] = useState([]);
    const [loading, setLoading] = useState(false);

    const fetchImages = async () => {
      setLoading(true);
      await axios.get('https://picsum.photos/v2/list').then(
        response => {
          const dataArr = [];
          response.data.slice(0,5).map( res => {
            const data = {
              img: res.download_url,
              title: res.id,
              rows: 2,
              cols: 1,
            };
            return dataArr.push(data);
          })
          setTileData(dataArr);
        }
      ).catch( error => {
        console.log(error);
      });
      setLoading(false);
    }

    useEffect( () => {
      fetchImages();
    },[])

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
              <GridListTile key={tile.img} cols={tile.cols || 1} rows={tile.rows || 1}>
                <img src={tile.img} alt={tile.title} />
                <GridListTileBar
                  title={tile.title}
                  titlePosition={'top'}
                  actionPosition="left"
                  className={css(styles.titleBar)}
                />
              </GridListTile>
            ))}
          </GridList>
        )}

        </PageContainer>
    )
}
