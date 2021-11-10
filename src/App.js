import React from 'react'
import NavBar from './components/NavBar'
import Affiliate from './components/Affiliate'
import Footer from './components/Footer'
import { Box, Grid } from '@mui/material'
import './App.css'
import { styled } from '@mui/material/styles'
import BNB from './containers/BNB'
import BFM from './containers/BFM'
import BUSD from './containers/BUSD'

export default function App() {
  return (
    <div className="App">
      <NavBar />
      <Box sx={{ flexGrow: 1, background: 'rgb(26, 27, 32)' }}>
        <section className="main-section">
          <div className="container">
            <Grid container spacing={4}>
              <BNB />

              {/* Affiliate link */}
              <Grid item xs={12} sm={12} md={8}>
                <Affiliate />
              </Grid>
              {/* Foooter */}
              <Grid item md={12} sx={{ width: '100%' }}>
                <Footer />
              </Grid>
            </Grid>
          </div>
        </section>
      </Box>
    </div>
  )
}
