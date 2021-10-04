import React, { useEffect, useState } from 'react'
import { Box, AppBar, Toolbar, Typography, Button, Switch } from '@mui/material'
import chainContract from '../contract'
import { styled, ThemeProvider } from '@mui/material/styles'
import modal from '../modal'
import { theme } from './theme'
import PropTypes from 'prop-types'

const MaterialUISwitch = styled(Switch)(({ theme }) => ({
	width: 62,
	height: 34,
	padding: 7,
	'& .MuiSwitch-switchBase': {
		margin: 1,
		padding: 0,
		transform: 'translateX(6px)',
		'&.Mui-checked': {
			color: '#fff',
			transform: 'translateX(22px)',
			'& .MuiSwitch-thumb:before': {
				backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
					'#fff'
				)}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
			},
			'& + .MuiSwitch-track': {
				opacity: 1,
				backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
			},
		},
	},
	'& .MuiSwitch-thumb': {
		backgroundColor: theme.palette.mode === 'dark' ? '#003892' : '#001e3c',
		width: 32,
		height: 32,
		'&:before': {
			content: "''",
			position: 'absolute',
			width: '100%',
			height: '100%',
			left: 0,
			top: 0,
			backgroundRepeat: 'no-repeat',
			backgroundPosition: 'center',
			backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
				'#fff'
			)}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
		},
	},
	'& .MuiSwitch-track': {
		opacity: 1,
		backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
		borderRadius: 20 / 2,
	},
}))

const NavBar = ({ toggleColorMode }) => {
	// const [myWeb3, setMyWeb3] = useState()
	const [account, setAccount] = useState('Connect')
	const connect = async () => {
		// await chainContract().then((res) => {
		// 	setMyWeb3(res)
		// 	console.log(res)
		// })
		let web3 = await modal()
		console.log(web3)
		let addr = await web3.eth.getAccounts().then((response) => response[0])
		setAccount(addr)
		// await modal()
	}
	console.log(account.length)
	return (
		<>
			<ThemeProvider theme={theme}>
				<Box sx={{ flexGrow: 1 }}>
					<AppBar position="static">
						<Toolbar sx={{ justifyContent: 'space-between' }}>
							<div>
								<Button color="inherit">
									<img src="./logo.png" alt="logo" width="48px" />
									<Typography
										variant="h6"
										component="div"
										sx={{
											flexGrow: 1,
											letterSpacing: '0.1rem',
											textTransform: 'uppercase',
											fontWeight: '700',
											marginLeft: '1px',
										}}
									>
										{' '}
										BitFarms
									</Typography>
								</Button>
							</div>
							{/* <MaterialUISwitch */}
							{/* 	onClick={toggleColorMode} */}
							{/* 	sx={{ m: 1 }} */}
							{/* 	defaultChecked */}
							{/* /> */}
							<div>
								<Button
									onClick={connect}
									color="secondary"
									variant="contained"
									sx={{ fontWeight: '600' }}
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
	toggleColorMode: PropTypes.function,
}

export default NavBar
