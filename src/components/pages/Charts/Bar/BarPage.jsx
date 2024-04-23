import React from 'react'
import { Box, Typography, useTheme } from '@mui/material'
import Bar from './Bar'


function BarPage() {
  const theme = useTheme();
  return (
    <>
      <Box sx={{ width: '100%', marginRight: 'auto', marginBottom: '15px' }}>
        <Typography variant="h4" sx={{ color: theme.palette.primary.main, textTransform: 'capitalize', fontWeight: 'bold' }}>Bar Chart</Typography>
        <Typography variant="body1" sx={{}}>The minimum wage in Germany, Italy, and Spain (EUR/Month)</Typography>
      </Box>
    <Bar />
    </>
  )
}

export default BarPage