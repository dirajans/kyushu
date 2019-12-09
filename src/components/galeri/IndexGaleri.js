import React, { useState, useEffect } from 'react';
import {
  Typography,
  GridList,
  GridListTile,
  GridListTileBar,
} from '@material-ui/core';

import axios from 'axios';
import PageContainer from './../shared/PageContainer';

export default function IndexGaleri(){
    const [tileData, setTileData] = useState([]);

    const fetchImages = () => {
      axios.get('https://picsum.photos/v2/list').then(
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
      })
    }

    useEffect( () => {
      fetchImages();
    },[])

    return (
        <PageContainer>

        <Typography
          variant={'h4'}
          align={'center'}
          style={styles.title}
        >
          Galeri
        </Typography>

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
                style={styles.titleBar}
              />
            </GridListTile>
          ))}
        </GridList>

        </PageContainer>
    )
}

const styles = {
  container: {
    paddingBottom: 30,
  },
  title: {
    paddingTop: 30,
    paddingBottom: 30,
  },
  titleBar: {
    background:
          'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
          'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
  icon: {
    color: 'white'
  }
}
