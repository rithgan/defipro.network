import React from 'react'
import NavBar from './components/NavBar'
import Farms from './components/Farms'
// import Pools from './components/Pools'
import PoolCards from './components/PoolCards'
import Affiliate from './components/Affiliate'
import Disclaimer from './components/Disclaimer'
import Stats from './components/Stats'
import { Box, Grid } from '@mui/material'
import './App.css'

function App() {
  return (
    // <PoolCards />
    <div className="App">
      <NavBar />
      <Box sx={{ flexGrow: 1 }}>
        <section className="main-section">
          <div className="container">
            <Grid container spacing={4}>
              <Grid item md={8}>
                <Disclaimer />
              </Grid>
              <Grid item md={4}>
                <Stats />
              </Grid>
              <Grid item>
                <PoolCards />
              </Grid>
              <Grid item xs={12} sm={12} md={4}>
                <Farms />
                {/* <Affiliate /> */}
              </Grid>
              <Grid item xs={12} sm={12} md={8}>
                {/* <Pools /> */}
                {/* <Disclaimer /> */}
                <Affiliate />
              </Grid>
            </Grid>
          </div>
        </section>
      </Box>
    </div>
  )
}

export default App
