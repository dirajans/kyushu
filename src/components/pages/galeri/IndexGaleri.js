import React, { useState, useEffect } from 'react';
import {
  GridList,
  GridListTile,
} from '@material-ui/core';
import PageContainer from '../../shared/containers/PageContainer';
import EmptyMessage from './../../shared/EmptyMessage';
import Loading from './../../shared/Loading';
import { firebase } from './../../../firebaseConfig';
import { snapshotToArray } from './../../shared/Utils';

export default function IndexGaleri(){
    const [tileData, setTileData] = useState([]);
    const [loading, setLoading] = useState(false);

    const fetchGaleri = () => {
      setLoading(true);
      firebase.database().ref('galeri').on('value', snap => {
        const galeri = snapshotToArray(snap);
        setTileData(galeri);
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

        {!loading && (
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
        </PageContainer>
    )
}
