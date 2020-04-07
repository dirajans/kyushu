import React, { useState, useEffect } from 'react';
import {
  GridList,
  GridListTile,
} from '@material-ui/core';
import PageContainer from '../../shared/containers/PageContainer';
import ErrorMessage from './../../shared/ErrorMessage';
import EmptyMessage from './../../shared/EmptyMessage';
import Loading from './../../shared/Loading';
import { firebase } from './../../../firebaseConfig';
import { snapshotToArray } from './../../shared/Utils';

export default function IndexGaleri(){
    const [tileData, setTileData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const fetchGaleri = async () => {
      setLoading(true);
      await firebase.database().ref('galeri').once('value', snap => {
        const galeri = snapshotToArray(snap);
        setTileData(galeri);
        setLoading(false);
      })
      .catch( error => {
        console.log(error);
        setError(error);
        setLoading(false);
      })
    }
  
    useEffect( () => {
      fetchGaleri();
    }, []);

    return (
        <PageContainer>
        {loading && (
          <Loading />
        )}

        {!loading && !error && (
          <>
          {tileData.length > 0 && (
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
          {tileData.length === 0 && (
            <EmptyMessage />
          )}
          
          </>
        )}

        {!loading && error && (
          <ErrorMessage />
        )}

        </PageContainer>
    )
}
