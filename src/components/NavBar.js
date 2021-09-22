import React from 'react'
import { Box, AppBar, Toolbar, Typography, Button, Switch } from '@mui/material'

const NavBar = () => {
	return (
		<>
			<Box sx={{ flexGrow: 1 }}>
				<AppBar position="static">
					<Toolbar>
						<Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
							BNB Factor
						</Typography>
						<Switch />
						<Button color="inherit">Connect</Button>
					</Toolbar>
				</AppBar>
			</Box>
		</>
	)
}

export default NavBar
