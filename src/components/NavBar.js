import React, { useEffect, useState } from 'react'
import { Box, AppBar, Toolbar, Typography, Button, Switch } from '@mui/material'
import chainContract from '../contract'
import { styled, ThemeProvider } from '@mui/material/styles'
import modal from '../modal'
import { theme } from './theme'
import PropTypes from 'prop-types'
import '../styles/Styles.css'

const NavBar = ({ toggleColorMode }) => {
	// const [myWeb3, setMyWeb3] = useState()
	const [account, setAccount] = useState('Connect')
	const connect = async () => {
		let web3 = await modal()

		let addr = await web3.eth.getAccounts().then((response) => response[0])
		setAccount(addr)
	}

	return (
		<>
			<ThemeProvider theme={theme}>
				<Box sx={{ flexGrow: 1 }}>
					<AppBar position="static" sx={{ backgroundColor: 'rgb(19, 20, 25)' }}>
						<Toolbar sx={{ justifyContent: 'space-between' }}>
							<div>
								<Button color="inherit" sx={{ padding: 'none !important' }}>
									<img src="./logo.svg" alt="logo" className="img" />
								</Button>
							</div>

							<div>
								<Button
									onClick={connect}
									color="secondary"
									variant="contained"
									sx={{
										fontWeight: '600',
										borderRadius: '16px',
										color: '#fff',
									}}
								>
									{account === 'Connect'
										? 'Connect'
										: account.slice(0, 5) + '...' + account.slice(37)}
								</Button>
							</div>
						</Toolbar>
					</AppBar>
				</Box>
			</ThemeProvider>
		</>
	)
}

NavBar.propTypes = {
	toggleColorMode: PropTypes.func,
}

export default NavBar
