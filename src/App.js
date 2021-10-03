import React, { useState, useEffect, useMemo, useContext } from 'react'
import NavBar from './components/NavBar'
import Farms from './components/Farms'
// import Pools from './components/Pools'
import PoolCards from './components/PoolCards'
import Affiliate from './components/Affiliate'
import Disclaimer from './components/Disclaimer'
import Stats from './components/Stats'
import Head from './components/Head'
import { Box, Grid, Typography } from '@mui/material'
import './App.css'
import { useTheme, ThemeProvider, createTheme } from '@mui/material/styles'
import { getTotalDeposit, getTotalReferralDeposit } from './contract'

const ColorModeContext = React.createContext({ toggleColorMode: () => {} })

function App() {
  const theme = useTheme()
  const colorMode = React.useContext(ColorModeContext)

  const [total, setTotal] = useState(0)
  const [referral, setReferral] = useState(0)

  let fetchTotal = getTotalDeposit()

  console.log(fetchTotal)

  //   const fetchTotal = async () => {
  //     const total = await new Promise((resolve) => resolve(getTotalDeposit()))
  //     console.log(total)
  //     return total
  //   }
  //
  //   // fetchTotal()
  //   React.useEffect(() => {
  //     let isMounted = true
  //     fetchTotal().then((data) => {
  //       // if (data !== undefined) setTotal(null)
  //       // setTotal(data)
  //     })
  //   }, [total])
  // const fetchTotal = async () => {
  //   try {
  //     const result = await getTotalDeposit()
  //     console.log('Promise resolved')
  //   } catch (err) {
  //     console.log(err)
  //   }
  // }

  // fetchTotal()
  // console.log('fetch: ' + fetchTotal())

  // React.useEffect(() => {
  //   // setTotal(2)
  //   fetchTotal()
  // }, [])
  // let fun = (val) => console.log(val)
  let totalDeposit = getTotalDeposit().then((res) => setTotal(res))
  let totalReferral = getTotalReferralDeposit().then((res) => setReferral(res))
  return (
    // <PoolCards />
    <div className="App">
      <NavBar toggleColorMode={colorMode.toggleColorMode} />
      <Box sx={{ flexGrow: 1, background: '#fafafa' }}>
        <section className="main-section">
          <div className="container">
            <Grid container spacing={4}>
              <Grid item md={12}>
                <Head />
              </Grid>
              <Grid item md={6} sx={{ marginTop: '16px' }}>
                <Typography variant="h5" sx={{ textAlign: 'center' }}>
                  Total Value Deposited
                </Typography>
                <Typography variant="h5" sx={{ textAlign: 'center' }}>
                  {total / 1000000000000000000} BNB
                </Typography>
              </Grid>
              <Grid item md={6} sx={{ marginTop: '16px' }}>
                <Typography variant="h5" sx={{ textAlign: 'center' }}>
                  Total Referral Earnings
                </Typography>
                <Typography variant="h5" sx={{ textAlign: 'center' }}>
                  {referral / 1000000000000000000} BNB
                </Typography>
              </Grid>
              <Grid item>
                <PoolCards />
              </Grid>
              <Grid item xs={12} sm={12} md={4}>
                <Farms />
              </Grid>
              <Grid item xs={12} sm={12} md={8}>
                <Affiliate />
              </Grid>
              <Grid item md={8}>
                <Disclaimer />
              </Grid>
              <Grid item md={4}>
                <Stats />
              </Grid>
            </Grid>
          </div>
        </section>
      </Box>
    </div>
  )
}

export default function ToggleColorMode() {
  const [mode, setMode] = React.useState('light')
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'))
      },
    }),
    []
  )

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode]
  )

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}
