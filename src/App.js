import React from 'react'
import NavBar from './components/NavBar'
// import Links from './components/Links'
import Affiliate from './components/Affiliate'
import Footer from './components/Footer'
import { Box, Grid } from '@mui/material'
import './App.css'
import { styled } from '@mui/material/styles'
import BNB from './containers/BNB'
import BFM from './containers/BFM'
import BUSD from './containers/BUSD'
import { Routes, Route } from 'react-router-dom'

export default function App() {
  return (
    <div className="App">
      {/* <TokenContext.Provider> */}
      <NavBar />
      {/* </TokenContext.Provider> */}
      <Box sx={{ flexGrow: 1, background: 'rgb(26, 27, 32)' }}>
        <section className="main-section">
          <div className="container">
            <Grid
              item
              xs={12}
              sx={{ display: 'flex', justifyContent: 'center' }}
            >
              {/* <Links /> */}
            </Grid>
            <Grid container spacing={4}>
              <Routes>
                <Route path="/" element={<BNB />} />
                <Route path="/bfm" exact element={<BFM />} />
                <Route path="/busd" exact element={<BUSD />} />
              </Routes>

              {/* Affiliate link */}
              {/* <Grid item xs={12} sm={12} md={8}> */}
              {/*   <Affiliate /> */}
              {/* </Grid> */}
              {/* Foooter */}
              {/* <Grid item md={12} sx={{ width: '100%' }}> */}
              {/*   <Footer /> */}
              {/* </Grid> */}
            </Grid>
          </div>
        </section>
      </Box>
    </div>
  )
}
