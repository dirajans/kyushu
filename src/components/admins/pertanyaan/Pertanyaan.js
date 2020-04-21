import React, { useState, useEffect } from 'react';
import { firebase } from './../../../firebaseConfig';
import { snapshotToArray } from './../../shared/Utils';
import {
  Paper,
  CircularProgress,
  Link,
} from '@material-ui/core';
import {
  IntegratedFiltering,
  IntegratedPaging,
  IntegratedSorting,
  PagingState,
  SortingState,
  SearchState,
  EditingState,
} from '@devexpress/dx-react-grid';
import {
  Grid,
  PagingPanel,
  Table,
  TableHeaderRow,
  Toolbar,
  SearchPanel,
  TableEditRow,
  TableEditColumn,
} from '@devexpress/dx-react-grid-material-ui';
import PageContainer from './../../shared/containers/AdminContainer';

export default function Settings(){
  const [rowData, setRowData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [pageSizes] = useState([10, 30, 90]);
  const [editingRowIds, setEditingRowIds] = useState([]);
  const [addedRows, setAddedRows] = useState([]);
  const [rowChanges, setRowChanges] = useState({});
  
  const fetchData = () => {
    setLoading(true);
    firebase.database().ref('pertanyaan').on('value', (snapshot) => {
      const pertanyaan = snapshotToArray(snapshot);
      setRowData(pertanyaan);
      setLoading(false);
    });
  };
  
  useEffect( () => {
    fetchData();
  }, [])
  
  const getRowId = row => row.id;

  const [columns] = useState([
    { name: 'name', title: 'Name'},
    { name: 'email', title: 'Email'},
    { name: 'description', title: 'Description'},
    { name: 'created_at', title: 'Created At'},
    { name: 'updated_at', title: 'Updated At'},
  ]);

  const [editingStateColumnExtensions] = useState([
    { columnName: 'created_at', editingEnabled: false },
    { columnName: 'updated_at', editingEnabled: false },
  ]);
  
  const changeAddedRows = (value) => {
    const initialized = value.map(row => (
      Object.keys(row).length
      ? row
      : {
        updated_at: new Date().toString(),
        created_at: new Date().toString(),
      })
    );
    setAddedRows(initialized);
  };

  const commitChanges = ({ added, changed, deleted }) => {
    let changedRows;
    if (added) {
      const startingAddedId = rowData.length > 0 ? rowData[rowData.length - 1].id + 1 : 0;
      changedRows = [
        ...rowData,
        ...added.map((row, index) => ({
          id: startingAddedId + index,
          ...row,
        })),
      ];
    }
    if (changed) {
      changedRows = rowData.map(row => (changed[row.id]
        ? {
          ...row,
          ...changed[row.id],
          updated_at: new Date().toString()
        }
        : row));
    }
    if (deleted) {
      const deletedSet = new Set(deleted);
      changedRows = rowData.filter(row => !deletedSet.has(row.id));
    }
    setRowData(changedRows);

    // save to firebase
    firebase.database().ref('pertanyaan').set(changedRows);
  };

  const handleOnClickId = (value) => {
    window.location.href = `mailto:${value}`;
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
    if (column.name === 'email') {
      return <LinkCell {...props} />
    }
    return <Table.Cell {...props} />
  }

  return (
    <PageContainer name={'Manage Pertanyaan'}>
      <Paper>
        {loading && (
          <div style={{ height: 200, paddingLeft: '50%', paddingTop: 100 }}>
            <CircularProgress />
          </div>
        )}

        {!loading && (
          <>
        <Grid
          rows={rowData}
          columns={columns}
          getRowId={getRowId}
        >
          <SearchState defaultValue={''} />
          <SortingState />
          <PagingState />
          <EditingState
            editingRowIds={editingRowIds}
            onEditingRowIdsChange={setEditingRowIds}

            rowChanges={rowChanges}
            onRowChangesChange={setRowChanges}

            addedRows={addedRows}
            onAddedRowsChange={changeAddedRows}

            onCommitChanges={commitChanges}

            columnExtensions={editingStateColumnExtensions}
          />

          <IntegratedFiltering />
          <IntegratedSorting />
          <IntegratedPaging />

          <Table cellComponent={NameCell} />
          <TableHeaderRow showSortingControls={true} />
          <TableEditRow />
          <TableEditColumn
            showAddCommand={!addedRows.length}
            showEditCommand
            showDeleteCommand
          />
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