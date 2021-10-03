import * as React from 'react'
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

// import {theme} from './theme.js'

const ColorModeContext = React.createContext({ toggleColorMode: () => {} })

function App() {
  const theme = useTheme()
  const colorMode = React.useContext(ColorModeContext)
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
                  Total Referral Deposit
                </Typography>
                <Typography variant="h5" sx={{ textAlign: 'center' }}>
                  0 BNB
                </Typography>
              </Grid>
              <Grid item md={6} sx={{ marginTop: '16px' }}>
                <Typography variant="h5" sx={{ textAlign: 'center' }}>
                  Total Referral Earnings
                </Typography>
                <Typography variant="h5" sx={{ textAlign: 'center' }}>
                  0 BNB
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
