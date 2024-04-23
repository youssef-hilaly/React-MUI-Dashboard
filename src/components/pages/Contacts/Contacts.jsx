import React from 'react'
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { Box } from '@mui/material';
import {rows, columns} from './Data';


function Contacts() {
  return (
    <Box sx={{ height: 800, width: '100%' }}>
    <DataGrid slots={{toolbar: GridToolbar}} rows={rows} columns={columns} />
  </Box>
  )
}

export default Contacts