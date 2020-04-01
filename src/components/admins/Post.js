import React, { useState, useEffect } from 'react';
import { firebase } from './../../firebaseConfig';
import { snapshotToArray } from './../../components/shared/Utils';
import {
  Paper,
  CircularProgress,
} from '@material-ui/core';
import {
  IntegratedFiltering,
  IntegratedPaging,
  IntegratedSorting,
  PagingState,
  SortingState,
  SearchState,
} from '@devexpress/dx-react-grid';
import {
  Grid,
  PagingPanel,
  Table,
  TableHeaderRow,
  Toolbar,
  SearchPanel,
} from '@devexpress/dx-react-grid-material-ui';
import PageContainer from '../shared/containers/AdminContainer';


export default function Post(){
  const [rowData, setRowData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [pageSizes] = useState([10, 30, 90]);
  
  const fetchData = () => {
    setLoading(true);
    firebase.database().ref('posts/').on('value', (snapshot) => {
      const products = snapshotToArray(snapshot);
      setRowData(products);
      setLoading(false);
    });
  };
  
  useEffect( () => {
    fetchData();
  }, [])
  
  const getRowId = row => row.id;

  const [columns] = useState([
    { name: 'id', title: 'ID'},
    { name: 'title', title: 'Title'},
    { name: 'description', title: 'Description'},
    { name: 'featured', title: 'Featured'},
    { name: 'created_at', title: 'Created At'},
    { name: 'updated_at', title: 'Updated At'},
  ]);

  return (
    <PageContainer name={'Manage Posts'}>
      <Paper>
        {loading && (
          <div style={{ height: 200, paddingLeft: '50%', paddingTop: 100 }}>
            <CircularProgress />
          </div>
        )}

        {!loading && (
          <Grid
          rows={rowData}
          columns={columns}
          getRowId={getRowId}
        >
          <SearchState defaultValue={''} />
          <SortingState />
          <PagingState />

          <IntegratedFiltering />
          <IntegratedSorting />
          <IntegratedPaging />

          <Table />
          <TableHeaderRow showSortingControls={true} />
          <PagingPanel pageSizes={pageSizes} />
          <Toolbar />
          <SearchPanel />

        </Grid>
        )}
        
      </Paper>
    </PageContainer>
  )
}
