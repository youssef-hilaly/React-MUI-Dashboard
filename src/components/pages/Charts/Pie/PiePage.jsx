import React from 'react'
import Pie from './Pie'
import { Box, Typography, useTheme } from '@mui/material'

function PiePage() {
    const theme = useTheme();
    return (
        <>
            <Box sx={{ width: '100%', marginRight: 'auto', marginBottom: '15px' }}>
                <Typography variant="h4" sx={{ color: theme.palette.primary.main, textTransform: 'capitalize', fontWeight: 'bold' }}>Pie Chart</Typography>
                <Typography variant="body1" sx={{}}>Simple Pie Chart</Typography>
            </Box>
            <Pie />
        </>
    )
}

export default PiePage