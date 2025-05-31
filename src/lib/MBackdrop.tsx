'use client'

import * as React from 'react'
import CircularProgress from '@mui/material/CircularProgress'
import { Backdrop, Box, Typography } from '@mui/material'

export default function MLoader({ message }: { message?: string }) {
  return (
    <React.Fragment>
      <Backdrop sx={(theme) => ({ color: '#fff', zIndex: theme.zIndex.drawer + 1 })} open={true}>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
          textAlign="center" // Center text alignment
        >
          <CircularProgress color="primary" size={60} /> {/* Increased size for better visibility */}
          {message && (
            <Typography sx={{ mt: 2 }} variant="subtitle1" align="center" color="primary">
              {message}
            </Typography>
          )}
        </Box>
      </Backdrop>
    </React.Fragment>
  )
}
