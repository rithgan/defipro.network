import React from 'react'
import NavBar from './components/NavBar'
import Farms from './components/Farms'
import Pools from './components/Pools'
import Affiliate from './components/Affiliate'
import Disclaimer from './components/Disclaimer'
import { Box, Grid } from '@mui/material'

function App() {
  return (
    <div className="App">
      <NavBar />
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={8}>
            <Pools />
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <Farms />
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={8}>
            <Disclaimer />
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <Affiliate />
          </Grid>
        </Grid>
      </Box>
    </div>
  )
}

export default App
