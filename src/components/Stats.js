import React, { useState } from 'react'
import {
	Box,
	Card,
	CardHeader,
	CardContent,
	Typography,
	Paper,
	Button,
	// TextField,
	InputBase,
} from '@mui/material'
import { getTotalDeposit } from '../contract'
import { ThemeProvider, createTheme } from '@mui/material/styles'

import { theme } from './theme'

const themeStats = createTheme({
	...theme,
	components: {
		MuiTypography: {
			styleOverrides: {
				root: {
					lineHeight: '1.575',
					fontSize: '1.5rem',
				},
			},
		},
		MuiCardContent: {
			styleOverrides: {
				root: {
					paddingBottom: '16px !important',
				},
			},
		},
	},
})

const Stats = () => {
	// 	const [deposit, setDeposit] = useState()
	// 	const handleDeposit = async () => {
	// 		let totalDeposit = await getTotalDeposit()
	//
	// 		setDeposit(totalDeposit)
	// 	}
	return (
		<ThemeProvider theme={themeStats}>
			<Box
				sx={{
					flexGrow: 1,
					marginBottom: '16px',
					background: 'transparent',
				}}
			>
				<Card
					sx={{
						borderRadius: '16px',
						boxShadow: '0 0 8px 2px rgb(0 0 0 / 8%)',
					}}
				>
					<CardContent>
						<Typography sx={{ marginTop: '0', marginBottom: '1rem' }}>
							Invited users: 0
						</Typography>
						<Typography sx={{ marginTop: '0' }}>
							Total Earnings: 0 BNB
						</Typography>
						{/* <Typography sx={{ marginTop: '0', marginBottom: '1rem' }}> */}
						{/* 	{`Total Referral Deposit: 0 BNB`} */}
						{/* </Typography> */}
						{/* <Typography sx={{ marginTop: '0', marginBottom: '1rem' }}> */}
						{/* 	{`Total Referral Earnings: 0 BNB`} */}
						{/* </Typography> */}
					</CardContent>
				</Card>
			</Box>
		</ThemeProvider>
	)
}

export default Stats
