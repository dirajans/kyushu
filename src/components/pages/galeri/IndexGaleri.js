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
import PageContainer from './../../shared/PageContainer';

export default function IndexGaleri(){
    const [tileData, setTileData] = useState([]);
    const [loading, setLoading] = useState(false);

    const fetchImages = async () => {
      setLoading(true);
      setLoading(false);
    }

    useEffect( () => {
      fetchImages();
    }, [])

    return (
        <PageContainer>
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
