import React, { useState, useEffect } from 'react';
import { firebase } from '../../../firebaseConfig';
import { snapshotToArray } from '../../shared/Utils';
import {
  Paper,
  CircularProgress,
  Button,
  Link,
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
import PageContainer from '../../shared/containers/AdminContainer';
import EditableDialog from './EditableDialog';
import DialogForm from './DialogForm';

export default function Post(){
  const [rowData, setRowData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [pageSizes] = useState([10, 30, 90]);

  const [openForm, setOpenForm] = useState(false);
  const [ openInfo, setOpenInfo ] = useState(false);
  const [ infoData, setInfoData ] = useState({});
  
  const fetchData = () => {
    setLoading(true);
    firebase.database().ref('posts/').on('value', (snapshot) => {
      const products = snapshotToArray(snapshot);
      setRowData(products);
      setLoading(false);
    });
  }
  
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

  const handleOpenForm = () => {
    setOpenForm(true);
  }

  const handleClose = () => {
    setOpenForm(false);
    setOpenInfo(false);
  }

  const handleOnClickId = (clickedId) => {
    const data = rowData.find( (row) => row.id === clickedId )
    setInfoData(data);
    setOpenInfo(true);
  }

  const LinkCell = ({ value, style, ...restProps }) => {
    return (
      <Table.Cell {...restProps} style={{ ...style }}>
        <Link onClick={ () => { handleOnClickId(value) }}>{value}</Link>
      </Table.Cell>
    )
  }

  const NameCell = (props) => {
    const { column } = props;
    if (column.name === 'id') {
      return <LinkCell {...props} />
    }
    return <Table.Cell {...props} />
  }

  return (
    <PageContainer name={'Manage Posts'}>
      <Paper>
        {loading && (
          <div style={{ height: 200, paddingLeft: '50%', paddingTop: 100 }}>
            <CircularProgress />
          </div>
        )}

        {!loading && (
          <>
          <div style={{ padding: 10 }}>
          <Button
            variant={'contained'}
            color={'primary'}
            onClick={handleOpenForm}
          >
            Create New Post
          </Button>
        </div>

        <DialogForm
          openStatus={openForm}
          onSubmit={handleClose}
          onCancel={handleClose}
        />

        <EditableDialog
          data={infoData}
          openStatus={openInfo}
          onClose={handleClose}
        />

          <Grid
          rows={rowData}
          columns={columns}
          getRowId={getRowId}
        >
          <SearchState defaultValue={''} />
          <SortingState 
            defaultSorting={[{ columnName: 'created_at', direction: 'asc' }]}
          />
          <PagingState />

          <IntegratedFiltering />
          <IntegratedSorting />
          <IntegratedPaging />

          <Table cellComponent={NameCell} />
          <TableHeaderRow showSortingControls={true} />
          <PagingPanel pageSizes={pageSizes} />
          <Toolbar />
          <SearchPanel />

        </Grid>
        </>
        )}
        
      </Paper>
    </PageContainer>
  )
}
