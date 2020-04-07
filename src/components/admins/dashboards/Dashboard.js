import React, { useState, useEffect } from 'react';
import {
  Paper,
  CircularProgress,
  Link,
  Button,
  Card,
  CardContent,
  Typography,
} from '@material-ui/core';
import { Grid as GridUI } from '@material-ui/core';
import {
  Chart,
  PieSeries,
} from '@devexpress/dx-react-chart-material-ui';
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
import { firebase } from './../../../firebaseConfig';
import { snapshotToArray } from './../../shared/Utils';
import EditableDialog from './EditableDialog';
import DialogForm from './DialogForm';

export default function Dashboard(){
  const [pageSizes] = useState([10, 30, 90]);
  const [rowData, setRowData] = useState([]);
  const [loading, setLoading] = useState(false);

  const [openForm, setOpenForm] = useState(false);
  const [ openInfo, setOpenInfo ] = useState(false);
  const [ infoData, setInfoData ] = useState({});

  const fetchData = () => {
    setLoading(true);
    firebase.database().ref('occasions').on('value', (snapshot) => {
      const occasions = snapshotToArray(snapshot);
      setRowData(occasions);
      setLoading(false);
    });
  }

  useEffect( () => {
    fetchData();
  }, []);

  const getRowId = row => row.id;

  const [columns] = useState([
    { name: 'id', title: 'ID'},
    { name: 'place', title: 'Place'},
    { name: 'color', title: 'Color'},
    { name: 'chosenDate', title: 'Occasion Date'},
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

  const ColorBadge = ({ value, style, ...restProps }) => {
    return (
      <Table.Cell {...restProps} style={{ ...style }}>
        <div style={{ height: '20px', width: '60px', backgroundColor: value }} />
      </Table.Cell>
    )
  }

  const NameCell = (props) => {
    const { column } = props;
    if (column.name === 'id') {
      return <LinkCell {...props} />
    }
    if (column.name === 'color') {
      return <ColorBadge {...props} />
    }
    return <Table.Cell {...props} />
  }

  const statArr = [
    {
      month: 'Jan 2020',
      data: [
        { color: 'red', value: '1' },
        { color: 'green', value: '2' },
        { color: 'yellow', value: '3' },
        { color: 'purple', value: '4' },
        { color: 'orange', value: '5' },
        { color: 'black', value: '6' },
      ]
    },
    {
      month: 'Feb 2020',
      data: [
        { color: 'red', value: '1' },
        { color: 'green', value: '2' },
        { color: 'yellow', value: '3' },
        { color: 'purple', value: '4' },
        { color: 'orange', value: '5' },
        { color: 'black', value: '6' },
      ]
    },
    {
      month: 'March 2020',
      data: [
        { color: 'red', value: '0' },
        { color: 'green', value: '0' },
        { color: 'yellow', value: '0' },
        { color: 'purple', value: '0' },
        { color: 'orange', value: '2' },
        { color: 'black', value: '1' },
      ]
    }
  ]
  const [stats, setStats] = useState(statArr);

  const CustomSlice = ({ color, argument, ...props}) => {
    return (
      <PieSeries.Point color={argument} {...props} />
    )
  }

  return (
    <PageContainer name={'Dashboard'}>

      <Paper style={{ padding: '20px'}}>
        <GridUI container spacing={2}>
          {stats.map( stat => (
          <GridUI item lg={3} key={stat.month}>
            <Card>
              <CardContent style={{ paddingLeft: '50px'}}>
                <Typography variant={'h6'}>
                  {stat.month}
                </Typography>

                <GridUI container spacing={2}>
                  <GridUI item lg={6} md={6} sm={12} xs={12}>
                    <Chart data={stat.data} width={70} height={130}>
                      <PieSeries 
                      valueField={'value'} 
                      argumentField={'color'} 
                      innerRadius={1}
                      outerRadius={2}
                      pointComponent={CustomSlice}
                      />
                    </Chart>
                  </GridUI>

                  {/* legend */}
                  <GridUI item lg={6} md={6} sm={12} xs={12}>
                    {stat.data.map( item => (
                      <GridUI container style={{ paddingBottom: '5px'}} key={item.color} >
                      <div style={{ height: '15px', width: '50px', backgroundColor: item.color, marginRight: '10px' }} />
                      <Typography variant={'caption'}>{item.value}</Typography>
                      </GridUI>
                    ))}
                  </GridUI>
                </GridUI>

              </CardContent>
            </Card>
          </GridUI>
          ))}
        </GridUI>
      </Paper>

      <br/>
      
      <Paper style={{ padding: '20px'}}>
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
            New Occasion
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
            defaultSorting={[{ columnName: 'created_at', direction: 'desc' }]}
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
