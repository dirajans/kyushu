import React, { useState } from 'react';
import {
  GridList,
  GridListTile,
} from '@material-ui/core';
import PageContainer from './../../shared/PageContainer';
import ErrorMessage from './../../shared/ErrorMessage';
import Loading from './../../shared/Loading';

export default function IndexGaleri(){
    const [tileData, setTileData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

<<<<<<< HEAD
=======
    const fetchImages = async () => {
      // const url = 'http://18.139.3.116:1337/upload/files'
      setLoading(true);
      // await axios.get(url)
      //   .then( res => {
      //     setTileData(res.data)
      //   })
      //   .catch( error => {
      //     setError(true);
      //     console.log(error);
      //   })
      setLoading(false);
    }

    useEffect( () => {
      fetchImages();
    }, [])

>>>>>>> 0def6d71c5c81506925c490fc187095b7c5a6546
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
