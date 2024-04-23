import React from 'react'
import { DataGrid } from '@mui/x-data-grid';
import { rows } from './Data';
import { useTheme } from '@emotion/react';
import { Box, Typography } from '@mui/material';
import { AdminPanelSettingsOutlined, LockOpenOutlined, SecurityOutlined } from '@mui/icons-material';

function Team() {

  const theme = useTheme();

  const columns = [
    { field: 'id', headerName: 'ID', flex: 1, align: 'center', headerAlign: 'center' },
    { field: 'name', headerName: 'Name', flex: 1, align: 'center', headerAlign: 'center' },
    { field: 'email', headerName: 'Email', flex: 1, align: 'center', headerAlign: 'center' },
    { field: 'age', headerName: 'Age', flex: 1, align: 'center', headerAlign: 'center' },
    { field: 'phone', headerName: 'Phone', flex: 1, align: 'center', headerAlign: 'center' },
    {
      field: 'access', headerName: 'Access', flex: 1, align: 'center', headerAlign: 'center',
      renderCell: ({ row: { access } }) => {
        return (
          <Box
            sx={{
              mx: 'auto',
              p: '5px',
              width: '99px',
              borderRadius: '3px',
              textAlign: 'center',
              backgroundColor: access === 'Admin' ? theme.palette.primary.dark : access === 'Manager' ? theme.palette.secondary.dark : '#3da58a',
              display: 'flex',
              justifyContent: 'space-evenly',

            }}>
            {access === 'Admin' ? <AdminPanelSettingsOutlined fontSize='small' sx={{ color: 'white' }} />
              : access === 'Manager' ? <SecurityOutlined fontSize='small' sx={{ color: 'white' }} />
                : <LockOpenOutlined fontSize='small' sx={{ color: 'white' }} />}
            <Typography variant="body1" sx={{ fontSize: '13px', color: 'white' }}>{access}</Typography>
          </Box>
        )
      }
    },];

  return (
    <Box sx={{ height: 800, width: '100%' }}>
      <DataGrid rows={rows} columns={columns} />
    </Box>
  )
}

export default Team