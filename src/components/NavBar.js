import React, { useEffect, useState, useContext, useLayoutEffect } from 'react'
import { Box, AppBar, Toolbar, Typography, Button, Switch } from '@mui/material'
import { styled, ThemeProvider } from '@mui/material/styles'
import modal from '../modal'
import { theme } from './theme'
import PropTypes from 'prop-types'
import '../styles/Styles.css'
import TemporaryDrawer from './Sidebar'
import Link from 'react-router-dom'
import NavItems from './NavItems'

function useWindowSize() {
	const [size, setSize] = useState([0, 0])
	useLayoutEffect(() => {
		function updateSize() {
			setSize([window.innerWidth, window.innerHeight])
		}
		window.addEventListener('resize', updateSize)
		updateSize()
		return () => window.removeEventListener('resize', updateSize)
	}, [])
	return size
}

const NavBar = ({ toggleColorMode }) => {
	// const [myWeb3, setMyWeb3] = useState()
	const [account, setAccount] = useState('Connect')
	// const [width, setWidth] = useState('')
	const connect = async () => {
		let web3 = await modal()

		let addr = await web3.eth.getAccounts().then((response) => response[0])
		setAccount(addr)
	}

	useEffect(() => {
		if (window.web3) {
			connect()
		}
	}, [])
	// const ref = useRef(null)
	// useEffect(() => {
	// 	setWidth(window.innerWidth)
	// }, [])
	// console.log(width)
	const [width, height] = useWindowSize()
	return (
		<>
			<ThemeProvider theme={theme}>
				<Box sx={{ flexGrow: 1 }}>
					<AppBar position="static" sx={{ backgroundColor: 'rgb(19, 20, 25)' }}>
						<Toolbar sx={{ justifyContent: 'space-between' }}>
							<div className="navitem-left">
								{/* <TemporaryDrawer /> */}
								<Button color="inherit" sx={{ padding: 'none !important' }}>
									<img
										src={width >= 600 ? './logo.svg' : './logo.png'}
										alt="logo"
										className="img"
									/>
								</Button>
								<NavItems width={width} />
							</div>

							<div className="navitem-right">
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
