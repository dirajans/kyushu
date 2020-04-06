import React, { useState, useEffect } from 'react';
import { firebase } from './../../../firebaseConfig';
import { snapshotToArray } from './../../shared/Utils';
import {
  Paper,
  CircularProgress,
  Button,
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
import csv from 'csv';
import uuidv4 from 'uuid/v4';

export default function Settings(){
  const [rowData, setRowData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [pageSizes] = useState([10, 30, 90]);
  const [editingRowIds, setEditingRowIds] = useState([]);
  const [addedRows, setAddedRows] = useState([]);
  const [rowChanges, setRowChanges] = useState({});
  
  const fetchData = () => {
    setLoading(true);
    firebase.database().ref('places').on('value', (snapshot) => {
      const places = snapshotToArray(snapshot);
      setRowData(places);
      setLoading(false);
    });
  };
  
  useEffect( () => {
    fetchData();
  }, [])
  
  const getRowId = row => row.id;

  const [columns] = useState([
    { name: 'place', title: 'Place'},
    { name: 'address', title: 'Address'},
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
    firebase.database().ref('places').set(changedRows);
  };

  const handleImportCSV = (event) => {
    const csvFile = event.target.files[0];
    const type = csvFile.type.split('/')[1];

    if(type === 'csv'){
      const reader = new FileReader();
      reader.onload = () => {
        csv.parse(reader.result, (error, data) => {
          
          if (error){
            console.log(error);
            alert('Error: ',error);
            return;
          }

          let placeArr = [];
          data.map( item => {
            let placeObj = {
              id: uuidv4(),
              place: item[0],
              address: item[1],
              created_at: new Date().toString(),
              updated_at: new Date().toString(),
            }
            return placeArr.push(placeObj);
          })

          // send to firebase
          placeArr.map( place => {
            return firebase.database().ref('places/' + place.id).set(place);
          })
        })
      }
      reader.readAsBinaryString(csvFile);
    }
    event.target.value = null;
  }

  return (
    <PageContainer name={'Manage Places'}>
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
              variant="contained"
              color={'primary'}
              component="label"
            >
              Import CSV
              <input
                type="file"
                style={{ display: "none" }}
                onChange={handleImportCSV}
              />
            </Button>
          </div>

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

          <Table />
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