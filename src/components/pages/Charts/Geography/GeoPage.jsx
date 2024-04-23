import { Box, Typography, useTheme } from '@mui/material';
import React from 'react'
import Geo from './Geo';

function GeoPage() {
    const theme = useTheme();
    return (
        <>
            <Box sx={{ width: '100%', marginRight: 'auto', marginBottom: '15px' }}>
                <Typography variant="h4" sx={{ color: theme.palette.primary.main, textTransform: 'capitalize', fontWeight: 'bold' }}>Geo Chart</Typography>
                <Typography variant="body1" sx={{}}>Simple Geo Chart</Typography>
            </Box>
            <Geo />
        </>
    )
}

export default GeoPage