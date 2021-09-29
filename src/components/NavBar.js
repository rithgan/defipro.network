import React, { useEffect, useState } from 'react'
import { Box, AppBar, Toolbar, Typography, Button, Switch } from '@mui/material'
import chainContract from '../contract'
import modal from '../modal'

const NavBar = () => {
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
	return (
		<>
			<Box sx={{ flexGrow: 1 }}>
				<AppBar position="static">
					<Toolbar>
						<Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
							BNB Factor
						</Typography>
						<Switch />
						<Button onClick={connect} color="inherit">
							{account}
						</Button>
					</Toolbar>
				</AppBar>
			</Box>
		</>
	)
}

export default NavBar
