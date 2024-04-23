import React from 'react'
import { Box, Typography, useTheme } from '@mui/material'
import Line from './Line'

function LinePage() {
  const theme = useTheme();
  return (
    <>
      <Box sx={{ width: '100%', marginRight: 'auto', marginBottom: '15px' }}>
        <Typography variant="h4" sx={{ color: theme.palette.primary.main, textTransform: 'capitalize', fontWeight: 'bold' }}>Line Chart</Typography>
        <Typography variant="body1" sx={{}}>Simple Line Chart</Typography>
      </Box>
      <Line />
    </>
  )
}

export default LinePage