import React, { useState, useEffect } from 'react';
import {
  GridList,
  GridListTile,
} from '@material-ui/core';
import axios from 'axios';
import PageContainer from './../../shared/PageContainer';
import ErrorMessage from './../../shared/ErrorMessage';
import Loading from './../../shared/Loading';

export default function IndexGaleri(){
    const [tileData, setTileData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const fetchImages = async () => {
      const url = 'http://18.139.3.116:1337/upload/files'
      setLoading(true);
      await axios.get(url)
        .then( res => {
          setTileData(res.data)
        })
        .catch( error => {
          setError(true);
          console.log(error);
        })
      setLoading(false);
    }

    useEffect( () => {
      fetchImages();
    }, [])

    return (
        <PageContainer>
        {loading && (
          <Loading />
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

        {!loading && error && (
          <ErrorMessage />
        )}

        </PageContainer>
    )
}
